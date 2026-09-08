# Lead Capture Integration: reCAPTCHA + GoHighLevel + ClickUp + Slack

Portable reference for the lead-form → CRM/task/notification pipeline used in this
project. Copy this file into a new project and hand it (plus the source files it
points at) to an AI agent, or follow it manually — it has everything needed to
reproduce the flow end to end: architecture, full code, every environment
variable, and the gotchas that aren't obvious from the API docs.

## What this does

One form submission on the client triggers four independent integrations on the
server, in this order:

1. **reCAPTCHA v2** — verifies the submission is human before anything else runs.
2. **GoHighLevel (GHL)** — upserts a Contact (dedup by email, then phone) and
   creates an Opportunity in a pipeline/stage.
3. **ClickUp** — creates a task on a list, then sets each custom field
   individually.
4. **Slack** — posts a formatted notification to a webhook.

GHL, ClickUp, and Slack are **independent of each other** — a failure in one
never blocks or alters the others. Only reCAPTCHA failure short-circuits the
whole action, since nothing after it should run for a non-human submission.

```
Client form (React Hook Form + zod)
  → renders <ReCAPTCHA> widget, captures recaptchaToken
  → on submit: builds URLSearchParams, calls server action
        submitLeadAction(paramsStr, recaptchaToken)

Server Action (submitLeadAction)
  1. Verify recaptchaToken against Google's siteverify endpoint
     └─ fail/network-error → return early, nothing else runs
  2. GHL: search-duplicate by email → by phone → create-or-update Contact
     → create Opportunity (only if contactId + pipelineId + stageId present)
  3. ClickUp: create task → Promise.all() of per-field "set custom field" calls
  4. Slack: POST formatted text to incoming webhook
  → return { success, ghl, clickup, slack } — client only throws on
    overall success:false (currently keyed off ClickUp's result)
```

## File layout to replicate

- `src/actions/submitLead.ts` — the server action; all four integrations live
  here. Marked implicitly as server-only by being called from a Client
  Component via a Next.js Server Action (add `"use server"` at the top of the
  file if your Next.js version requires the explicit directive — this project's
  version infers it from usage, but pin it explicitly if you see it run
  client-side).
- `src/components/pages/contact-us/ContactForm.tsx` — the client form: builds
  the `URLSearchParams` payload, renders `react-google-recaptcha`, calls the
  action.
- `.env.local` (dev) / hosting provider's environment variables (prod) — every
  credential and field ID below.

---

## 1. reCAPTCHA v2 ("I'm not a robot" checkbox)

### Setup
1. Register a site at https://www.google.com/recaptcha/admin — choose
   **reCAPTCHA v2 → "I'm not a robot" Checkbox**.
2. Add every domain that will host the form (localhost, staging domain,
   production domain — **all of them**, or the widget will refuse to render
   with "Invalid domain for site key").
3. You get a **Site Key** (public, goes in client JS) and a **Secret Key**
   (server-only, never shipped to the browser).

### Env vars
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=...
```
> **Naming gotcha carried over from this project**: the secret key is prefixed
> `NEXT_PUBLIC_` even though it's only ever read server-side (inside the
> Server Action, never in client code). It works because Next.js only inlines
> `NEXT_PUBLIC_*` vars into the bundle at the call sites that actually
> reference them client-side — this one is referenced only in
> `submitLead.ts`, a server file, so it never leaks. Still bad practice: in a
> fresh project, name it `RECAPTCHA_SECRET_KEY` (no prefix) instead.

### Client widget
```tsx
import ReCAPTCHA from "react-google-recaptcha"; // npm install react-google-recaptcha @types/react-google-recaptcha

const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
const recaptchaRef = useRef<ReCAPTCHA>(null);

<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || ""}
  onChange={(token) => setRecaptchaToken(token)}
/>
```
Block submit client-side too if no token yet:
```tsx
if (!recaptchaToken) {
  alert("Please complete the reCAPTCHA challenge.");
  return;
}
```

### Server verification
```ts
const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY?.trim();
if (!secretKey) {
  return { success: false, error: "Server configuration error: missing reCAPTCHA secret" };
}
if (!recaptchaToken) {
  return { success: false, error: "Please complete the reCAPTCHA challenge." };
}

const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
let verifyJson: any;
try {
  const verifyRes = await fetch(verifyUrl, { method: "POST" });
  verifyJson = await verifyRes.json();
} catch (fetchErr: any) {
  // A THROWN error here (not a {success:false} JSON body) means the SERVER
  // itself couldn't reach google.com — a network/egress problem, not a bad
  // token. On AWS Amplify this almost always means the SSR compute is
  // attached to a VPC with no NAT Gateway (or a security group blocking
  // outbound 443). Log the underlying cause, don't just show "fetch failed".
  console.error("reCAPTCHA verify request failed to reach Google:", {
    message: fetchErr?.message,
    cause: fetchErr?.cause,
    name: fetchErr?.name,
  });
  return {
    success: false,
    error: "Could not reach reCAPTCHA verification service. This usually means the server has no outbound internet access (check VPC/NAT configuration).",
  };
}

if (!verifyJson.success) {
  return { success: false, error: "reCAPTCHA verification failed. Please try again." };
}
```

**Gotcha (the actual bug fixed in this project)**: don't let the `fetch()` call
sit in the outer try/catch un-wrapped — if it throws, Node's raw error message
(literally `"fetch failed"`) bubbles up to the user with zero diagnostic value.
Wrap it in its own try/catch as above so you get the real DNS/network error in
your logs, and give the *user* a message that at least hints at server
networking rather than something that sounds like their fault.

---

## 2. GoHighLevel (GHL)

### Setup
1. In the GHL sub-account (location) you're integrating with: **Settings →
   Business Info** for the Location ID, **Settings → API Keys** (or use a
   Private Integration token) for the API key.
2. **Settings → Pipelines**: create/pick a pipeline, grab the Pipeline ID and
   the Stage ID you want new leads to land in (open the pipeline, inspect the
   stage in the URL or via the API's `GET /opportunities/pipelines` endpoint).
3. **Custom fields**: create whatever contact-level and opportunity-level
   custom fields you need in GHL's UI, then fetch their real IDs via
   `GET /locations/{locationId}/customFields` (or `GET /contacts/{id}` on an
   existing contact to see field IDs in the response). **Do not** guess the ID
   from the field's `key`/slug — see gotcha below.

### Env vars
```
NEXT_PUBLIC_GHL_API_KEY=...
NEXT_PUBLIC_GHL_LOCATION_ID=...
NEXT_PUBLIC_GHL_PIPELINE_ID=...
NEXT_PUBLIC_GHL_STAGE_ID=...

# Contact-level custom fields (numeric/UUID field IDs, not keys)
NEXT_PUBLIC_GHL_CONTACT_FIELD_YOUR_TRADE=...
NEXT_PUBLIC_GHL_CONTACT_FIELD_COMPANYS_NAME=...
NEXT_PUBLIC_GHL_CONTACT_FIELD_SELECT_SERVICES=...

# Opportunity-level custom fields
NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_WEBSITE=...
NEXT_PUBLIC_GHL_OPP_FIELD_SERVICES_PROPOSED=...
NEXT_PUBLIC_GHL_OPP_FIELD_INDUSTRYTRADE=...
NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_SIZE=...
NEXT_PUBLIC_GHL_OPP_FIELD_DESCRIPTION=...
NEXT_PUBLIC_GHL_OPP_FIELD_LEAD_SOURCE=...
```

### Gotchas learned the hard way
- **GHL's API silently drops custom fields addressed by `key`** on both
  Contacts and Opportunities — the request succeeds (200 OK) but the field
  just doesn't get set, with no error anywhere. Only the numeric/UUID **`id`**
  actually persists. Always verify live against the real location
  (`GET` the field list, or create a test contact/opportunity and inspect the
  response) before trusting a field ID.
- **Multi-select custom fields need an array**, not a comma-joined string:
  `field_value: ["seo", "google-ads"]`, not `"seo, google-ads"`.
- **Dedup before create**: GHL doesn't upsert Contacts by default — search by
  email, then by phone if no email match, before deciding to `POST` (create)
  vs `PUT` (update). Skipping this creates duplicate contacts on every
  resubmission.
- **Opportunities need an existing `contactId`** — create/find the Contact
  first, then create the Opportunity referencing it. An Opportunity with no
  `pipelineId`/`stageId`/`contactId` will fail; treat that as a distinct,
  logged failure mode (see the `else` branch below) rather than silently
  skipping.

### Code
```ts
const ghlApiKey = process.env.NEXT_PUBLIC_GHL_API_KEY;
const ghlLocationId = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;
const ghlPipelineId = process.env.NEXT_PUBLIC_GHL_PIPELINE_ID;
const ghlStageId = process.env.NEXT_PUBLIC_GHL_STAGE_ID;

let ghlResult: {
  contactUpsert: { success: boolean; data?: any; error?: string };
  opportunityCreate: { success: boolean; data?: any; error?: string };
} = { contactUpsert: { success: false }, opportunityCreate: { success: false } };

if (ghlApiKey && ghlLocationId) {
  try {
    let contactId = null;
    let matchedContactData = null;

    // 1. Dedup by email
    if (email) {
      const dupRes = await fetch(
        `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${ghlLocationId}&email=${encodeURIComponent(email)}`,
        { method: "GET", headers: { "Authorization": `Bearer ${ghlApiKey}`, "Version": "2021-07-28", "Accept": "application/json" } }
      );
      if (dupRes.ok) {
        const dupData = await dupRes.json();
        if (dupData.contact?.id) { contactId = dupData.contact.id; matchedContactData = dupData; }
      }
    }

    // 2. Dedup by phone if no email match
    if (!contactId && phone) {
      const dupRes = await fetch(
        `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${ghlLocationId}&number=${encodeURIComponent(phone)}`,
        { method: "GET", headers: { "Authorization": `Bearer ${ghlApiKey}`, "Version": "2021-07-28", "Accept": "application/json" } }
      );
      if (dupRes.ok) {
        const dupData = await dupRes.json();
        if (dupData.contact?.id) { contactId = dupData.contact.id; matchedContactData = dupData; }
      }
    }

    // Build custom fields by real numeric/UUID id — see gotcha above
    const servicesArray = servicesProposed ? servicesProposed.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const contactCustomFields: { id: string; field_value: string | string[] }[] = [
      ...(trade && process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_YOUR_TRADE
        ? [{ id: process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_YOUR_TRADE, field_value: trade }] : []),
      ...(companyName && process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_COMPANYS_NAME
        ? [{ id: process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_COMPANYS_NAME, field_value: companyName }] : []),
      ...(servicesArray.length > 0 && process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_SELECT_SERVICES
        ? [{ id: process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_SELECT_SERVICES, field_value: servicesArray }] : []),
    ];

    // 3. Create or update Contact
    if (!contactId) {
      const contactResponse = await fetch("https://services.leadconnectorhq.com/contacts/", {
        method: "POST",
        headers: { "Authorization": `Bearer ${ghlApiKey}`, "Version": "2021-07-28", "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          locationId: ghlLocationId, firstName, lastName, email, phone, companyName,
          source: leadSource, tags: ["website-lead"], customFields: contactCustomFields,
        }),
      });
      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        ghlResult.contactUpsert = { success: true, data: contactData };
        contactId = contactData.contact?.id;
      } else {
        ghlResult.contactUpsert = { success: false, error: await contactResponse.text() };
      }
    } else {
      // Existing contact — update so custom fields still get written
      const updateResponse = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}`, {
        method: "PUT",
        headers: { "Authorization": `Bearer ${ghlApiKey}`, "Version": "2021-07-28", "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ customFields: contactCustomFields }),
      });
      if (updateResponse.ok) {
        ghlResult.contactUpsert = { success: true, data: await updateResponse.json() };
      } else {
        ghlResult.contactUpsert = { success: true, data: matchedContactData, error: await updateResponse.text() };
      }
    }

    // 4. Create Opportunity (needs contactId + pipelineId + stageId)
    if (contactId && ghlPipelineId && ghlStageId) {
      const opportunityCustomFields: { id: string; field_value: string | string[] }[] = [
        ...(websiteUrl && process.env.NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_WEBSITE
          ? [{ id: process.env.NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_WEBSITE, field_value: websiteUrl }] : []),
        ...(servicesArray.length > 0 && process.env.NEXT_PUBLIC_GHL_OPP_FIELD_SERVICES_PROPOSED
          ? [{ id: process.env.NEXT_PUBLIC_GHL_OPP_FIELD_SERVICES_PROPOSED, field_value: servicesArray }] : []),
        ...(trade && process.env.NEXT_PUBLIC_GHL_OPP_FIELD_INDUSTRYTRADE
          ? [{ id: process.env.NEXT_PUBLIC_GHL_OPP_FIELD_INDUSTRYTRADE, field_value: trade }] : []),
        ...(employeeCount && process.env.NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_SIZE
          ? [{ id: process.env.NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_SIZE, field_value: employeeCount }] : []),
        ...(description && process.env.NEXT_PUBLIC_GHL_OPP_FIELD_DESCRIPTION
          ? [{ id: process.env.NEXT_PUBLIC_GHL_OPP_FIELD_DESCRIPTION, field_value: description }] : []),
        ...(leadSource && process.env.NEXT_PUBLIC_GHL_OPP_FIELD_LEAD_SOURCE
          ? [{ id: process.env.NEXT_PUBLIC_GHL_OPP_FIELD_LEAD_SOURCE, field_value: leadSource }] : []),
      ];

      const oppResponse = await fetch("https://services.leadconnectorhq.com/opportunities/", {
        method: "POST",
        headers: { "Authorization": `Bearer ${ghlApiKey}`, "Version": "2021-07-28", "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          pipelineId: ghlPipelineId, pipelineStageId: ghlStageId, locationId: ghlLocationId,
          name: `${firstName} ${lastName} - Web Lead`, contactId, status: "open",
          customFields: opportunityCustomFields,
        }),
      });
      if (oppResponse.ok) {
        ghlResult.opportunityCreate = { success: true, data: await oppResponse.json() };
      } else {
        ghlResult.opportunityCreate = { success: false, error: await oppResponse.text() };
      }
    } else {
      ghlResult.opportunityCreate = {
        success: false,
        error: `Missing parameters: contactId=${contactId}, pipelineId=${ghlPipelineId}, stageId=${ghlStageId}`,
      };
    }
  } catch (ghlErr: any) {
    ghlResult.contactUpsert = { success: false, error: ghlErr?.message || "Unknown GHL Error" };
  }
} else {
  ghlResult.contactUpsert = { success: false, error: "GHL credentials missing from environment" };
}
```

---

## 3. ClickUp

### Setup
1. Get a personal API token: ClickUp → avatar → **Settings → Apps** →
   "Generate" under API Token.
2. Pick the List you want lead tasks created on; the List ID is in its URL
   (`https://app.clickup.com/{team}/v/li/{listId}`).
3. Create whatever custom fields you need on that List, then fetch their real
   IDs: `GET https://api.clickup.com/api/v2/list/{listId}/field`.
4. For any **labels/drop-down** field (single- or multi-select), the field's
   response also lists its **options**, each with its own `id` (a UUID) — you
   need those option IDs, not the human-readable label text, when setting the
   field's value.

### Env vars
```
NEXT_PUBLIC_CLICKUP_API_TOKEN=...
NEXT_PUBLIC_CLICKUP_LIST_ID=...

NEXT_PUBLIC_CLICKUP_FIELD_FIRST_NAME=...
NEXT_PUBLIC_CLICKUP_FIELD_LAST_NAME=...
NEXT_PUBLIC_CLICKUP_FIELD_PHONE_NUMBER=...
NEXT_PUBLIC_CLICKUP_FIELD_EMAIL=...
NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_NAME=...
NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_WEBSITE=...
NEXT_PUBLIC_CLICKUP_FIELD_SERVICES_PROPOSED=...
NEXT_PUBLIC_CLICKUP_FIELD_INDUSTRY_TRADE=...   # see gotcha — may not be usable
NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_SIZE=...
NEXT_PUBLIC_CLICKUP_FIELD_CLIENT_NOTES=...
NEXT_PUBLIC_CLICKUP_FIELD_LEAD_SOURCE=...
```

### Gotchas learned the hard way
- **The task-create endpoint does not accept custom field values in its
  initial POST body** for label/dropdown-type fields — create the task first
  (name only), then set every custom field with a separate
  `POST /task/{taskId}/field/{fieldId}` call per field. Fire them with
  `Promise.all` since they're independent.
- **Labels/dropdown fields need the option's `id` (UUID), not the label
  text.** Build a lookup map from your form's known values → the list's real
  option IDs (fetched once via the API, hardcoded as a map — they don't
  change unless someone edits the field in ClickUp).
- **A field can exist but have the wrong option set for your data.** E.g. an
  "Industry" field whose options are generic business categories (Healthcare,
  SaaS, Fintech...) has nothing to map a "Plumbing"/"HVAC" value to — don't
  force-map to the nearest option; leave the field unset and log a comment
  explaining why, so a human fixes the field's options in ClickUp instead of
  silently miscategorizing every lead.

### Code
```ts
const CLICKUP_FIELD_IDS = {
  firstName: process.env.NEXT_PUBLIC_CLICKUP_FIELD_FIRST_NAME || "",
  lastName: process.env.NEXT_PUBLIC_CLICKUP_FIELD_LAST_NAME || "",
  phoneNumber: process.env.NEXT_PUBLIC_CLICKUP_FIELD_PHONE_NUMBER || "",
  email: process.env.NEXT_PUBLIC_CLICKUP_FIELD_EMAIL || "",
  companyName: process.env.NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_NAME || "",
  companyWebsite: process.env.NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_WEBSITE || "",
  servicesProposed: process.env.NEXT_PUBLIC_CLICKUP_FIELD_SERVICES_PROPOSED || "",
  companySize: process.env.NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_SIZE || "",
  clientNotes: process.env.NEXT_PUBLIC_CLICKUP_FIELD_CLIENT_NOTES || "",
  leadSource: process.env.NEXT_PUBLIC_CLICKUP_FIELD_LEAD_SOURCE || "",
} as const;

// Example option-id maps — fetch real IDs via GET /list/{id}/field and
// hardcode them here; they're stable unless the field is edited.
const CLICKUP_SERVICE_LABEL_MAP: Record<string, string> = {
  website: "8ac52eab-79ed-418e-a3f4-5019341c76e6",
  seo: "5ff2fdc8-0438-4bce-bb45-444e84f44d01",
  other: "3858832c-a521-4d1a-a29c-7ae146c351ef",
  // ...rest of your options
};
function mapServicesToClickUpLabelIds(servicesProposed: string): string[] {
  const labelIds = servicesProposed
    .split(",").map((s) => s.trim().toLowerCase()).filter(Boolean)
    .map((slug) => CLICKUP_SERVICE_LABEL_MAP[slug] || CLICKUP_SERVICE_LABEL_MAP.other)
    .filter(Boolean);
  return [...new Set(labelIds)];
}

const CLICKUP_LEAD_SOURCE_MAP: Record<string, string> = {
  "op website": "9166d493-e974-43f5-91c6-100beba29f65",
  vicidailer: "a861624a-9cf4-406d-accd-4131c594add5",
};
function mapLeadSourceToClickUpOptionId(leadSource: string): string {
  return CLICKUP_LEAD_SOURCE_MAP[leadSource.trim().toLowerCase()] || CLICKUP_LEAD_SOURCE_MAP["op website"];
}

async function setClickUpField(taskId: string, fieldId: string, value: string | string[], token: string) {
  try {
    const res = await fetch(`https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}`, {
      method: "POST",
      headers: { "Authorization": token, "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });
    if (!res.ok) console.error(`ClickUp setField failed (${fieldId}): ${res.status} ${await res.text()}`);
  } catch (err: any) {
    console.error(`ClickUp setField error (${fieldId}):`, err?.message || err);
  }
}

// --- inside the action ---
const clickupToken = process.env.NEXT_PUBLIC_CLICKUP_API_TOKEN;
const clickupListId = process.env.NEXT_PUBLIC_CLICKUP_LIST_ID;
let clickupResult: { success: boolean; taskId?: string; error?: string } = { success: false };

if (clickupToken && clickupListId) {
  try {
    const taskName = `${firstName.trim()} ${lastName.trim()}`.trim() || "New Web Lead";
    const taskResponse = await fetch(`https://api.clickup.com/api/v2/list/${clickupListId}/task`, {
      method: "POST",
      headers: { "Authorization": clickupToken, "Content-Type": "application/json" },
      body: JSON.stringify({ name: taskName }),
    });

    if (taskResponse.ok) {
      const taskData = await taskResponse.json();
      const taskId = taskData.id;
      clickupResult = { success: true, taskId };

      await Promise.all([
        firstName && CLICKUP_FIELD_IDS.firstName && setClickUpField(taskId, CLICKUP_FIELD_IDS.firstName, firstName, clickupToken),
        lastName && CLICKUP_FIELD_IDS.lastName && setClickUpField(taskId, CLICKUP_FIELD_IDS.lastName, lastName, clickupToken),
        phone && CLICKUP_FIELD_IDS.phoneNumber && setClickUpField(taskId, CLICKUP_FIELD_IDS.phoneNumber, phone, clickupToken),
        email && CLICKUP_FIELD_IDS.email && setClickUpField(taskId, CLICKUP_FIELD_IDS.email, email, clickupToken),
        companyName && CLICKUP_FIELD_IDS.companyName && setClickUpField(taskId, CLICKUP_FIELD_IDS.companyName, companyName, clickupToken),
        websiteUrl && CLICKUP_FIELD_IDS.companyWebsite && setClickUpField(taskId, CLICKUP_FIELD_IDS.companyWebsite, websiteUrl, clickupToken),
        employeeCount && CLICKUP_FIELD_IDS.companySize && setClickUpField(taskId, CLICKUP_FIELD_IDS.companySize, employeeCount, clickupToken),
        clickupClientNotes && CLICKUP_FIELD_IDS.clientNotes && setClickUpField(taskId, CLICKUP_FIELD_IDS.clientNotes, clickupClientNotes, clickupToken),
        CLICKUP_FIELD_IDS.leadSource && setClickUpField(taskId, CLICKUP_FIELD_IDS.leadSource, mapLeadSourceToClickUpOptionId(leadSource), clickupToken),
      ]);

      if (servicesProposed && CLICKUP_FIELD_IDS.servicesProposed) {
        const labelIds = mapServicesToClickUpLabelIds(servicesProposed);
        if (labelIds.length > 0) await setClickUpField(taskId, CLICKUP_FIELD_IDS.servicesProposed, labelIds, clickupToken);
      }
    } else {
      clickupResult = { success: false, error: await taskResponse.text() };
    }
  } catch (clickupErr: any) {
    clickupResult = { success: false, error: clickupErr?.message || "Unknown ClickUp Error" };
  }
} else {
  clickupResult = { success: false, error: "ClickUp credentials missing from environment" };
}
```

---

## 4. Slack (incoming webhook)

### Setup
1. Slack → **Apps → Incoming Webhooks** (or create a Slack App with the
   `incoming-webhook` feature) → add to the workspace → pick the target
   channel → copy the webhook URL. Treat it as a secret — anyone with the URL
   can post to that channel.

### Env var
```
NEXT_PUBLIC_SLACK_WEBHOOK_URL=...
```

### Code
```ts
const slackWebhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
let slackResult: { success: boolean; error?: string } = { success: false };

if (slackWebhookUrl) {
  try {
    const slackText = [
      "*New Lead Submitted*",
      `*Name:* ${firstName} ${lastName}`.trim(),
      email ? `*Email:* ${email}` : null,
      phone ? `*Phone:* ${phone}` : null,
      companyName ? `*Company:* ${companyName}` : null,
      trade ? `*Trade:* ${trade}` : null,
      `*Source:* ${leadSource}`,
      clientNotes ? `*Notes:* ${clientNotes}` : null,
    ].filter(Boolean).join("\n");

    const slackRes = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: slackText }), // Slack's "simple" text payload — use `blocks` for richer formatting
    });

    slackResult = slackRes.ok
      ? { success: true }
      : { success: false, error: await slackRes.text() };
  } catch (slackErr: any) {
    slackResult = { success: false, error: slackErr?.message || "Unknown Slack Error" };
  }
} else {
  slackResult = { success: false, error: "SLACK_WEBHOOK_URL missing from environment" };
}
```

---

## Client-side: building the payload and calling the action

```tsx
"use client";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { submitLeadAction } from "@/actions/submitLead";

export default function LeadForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA challenge.");
      return;
    }
    try {
      const params = new URLSearchParams({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone_number: data.phone,
        lead_source: "OP Website",     // static per-form label, or dynamic
        trade: data.trade || "",
        website_url: data.website || "",
        company_name: data.company || "",
        employee_count: data.teamSize || "",
        services_proposed: (data.interests || []).join(", "),
        description: data.message || "",
        client_notes: buildClientNotesString(data), // whatever combined blob you want
      });

      const result = await submitLeadAction(params.toString(), recaptchaToken);
      if (!result.success) throw new Error(result.error);

      // reset() form, recaptchaRef.current?.reset(), setRecaptchaToken(null)
    } catch (error: any) {
      alert(error.message || "Something went wrong.");
      setRecaptchaToken(null);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ...fields... */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || ""}
        onChange={(token) => setRecaptchaToken(token)}
      />
    </form>
  );
}
```

Payload is passed as a serialized `URLSearchParams` string (not a plain
object) because Server Actions require plain-JSON-serializable arguments —
this sidesteps any edge cases with `undefined` values or nested objects, and
keeps `submitLeadAction`'s signature stable regardless of how many fields a
given form collects. Different forms across the site can send different
subsets of the same field names; every field is read with `params.get(...)
|| ""` server-side, so missing fields degrade gracefully instead of throwing.

---

## Full environment variable checklist

```env
# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=

# GoHighLevel
NEXT_PUBLIC_GHL_API_KEY=
NEXT_PUBLIC_GHL_LOCATION_ID=
NEXT_PUBLIC_GHL_PIPELINE_ID=
NEXT_PUBLIC_GHL_STAGE_ID=
NEXT_PUBLIC_GHL_CONTACT_FIELD_YOUR_TRADE=
NEXT_PUBLIC_GHL_CONTACT_FIELD_COMPANYS_NAME=
NEXT_PUBLIC_GHL_CONTACT_FIELD_SELECT_SERVICES=
NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_WEBSITE=
NEXT_PUBLIC_GHL_OPP_FIELD_SERVICES_PROPOSED=
NEXT_PUBLIC_GHL_OPP_FIELD_INDUSTRYTRADE=
NEXT_PUBLIC_GHL_OPP_FIELD_COMPANY_SIZE=
NEXT_PUBLIC_GHL_OPP_FIELD_DESCRIPTION=
NEXT_PUBLIC_GHL_OPP_FIELD_LEAD_SOURCE=

# ClickUp
NEXT_PUBLIC_CLICKUP_API_TOKEN=
NEXT_PUBLIC_CLICKUP_LIST_ID=
NEXT_PUBLIC_CLICKUP_FIELD_FIRST_NAME=
NEXT_PUBLIC_CLICKUP_FIELD_LAST_NAME=
NEXT_PUBLIC_CLICKUP_FIELD_PHONE_NUMBER=
NEXT_PUBLIC_CLICKUP_FIELD_EMAIL=
NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_NAME=
NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_WEBSITE=
NEXT_PUBLIC_CLICKUP_FIELD_SERVICES_PROPOSED=
NEXT_PUBLIC_CLICKUP_FIELD_INDUSTRY_TRADE=
NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_SIZE=
NEXT_PUBLIC_CLICKUP_FIELD_CLIENT_NOTES=
NEXT_PUBLIC_CLICKUP_FIELD_LEAD_SOURCE=

# Slack
NEXT_PUBLIC_SLACK_WEBHOOK_URL=
```

Every credential above must be set **identically in every hosting
environment** (dev, staging, production) — but identical env vars are not
sufficient on their own. If reCAPTCHA verification fails only in one
environment with a raw `"fetch failed"`-style error, that's a **server
network/egress** problem (e.g. production's SSR compute attached to a VPC
with no NAT Gateway), not a missing/wrong credential — see the reCAPTCHA
section's try/catch above, which is what surfaces that distinction instead of
hiding it behind a generic error.

## Adapting this to a new project

1. Copy `submitLeadAction` wholesale, then delete whichever of the three
   integrations (GHL/ClickUp/Slack) the new project doesn't need — each is
   gated by its own `if (credentialsPresent)` block and is fully
   self-contained, so removal is just deleting that block plus its
   `...Result` variable from the final return.
2. Swap the field-name → env-var maps (`CLICKUP_FIELD_IDS`, the GHL
   `customFields` arrays) for the new project's own custom field IDs — these
   are never shared between GHL/ClickUp accounts, they must be re-fetched via
   each platform's API for the new account/list/location.
3. Re-point `client_notes`/`description` construction in the form component to
   whatever fields the new form actually collects — the server action doesn't
   care what's in them, it just forwards whatever `URLSearchParams` it's
   given.
4. Re-verify reCAPTCHA domain allowlist and (if deploying to AWS Amplify or
   similar) confirm the production compute has outbound internet access
   before assuming the integration is broken.
