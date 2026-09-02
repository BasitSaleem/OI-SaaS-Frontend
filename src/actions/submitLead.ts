"use server";

export async function submitLeadAction(paramsStr: string, recaptchaToken: string, clientData?: any) {
  try {
    // 1. Google reCAPTCHA validation
    const secretKey = (process.env.RECAPTCHA_SECRET_KEY || process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY)?.trim();
    if (!secretKey) {
      console.error("Missing RECAPTCHA_SECRET_KEY/NEXT_PUBLIC_RECAPTCHA_SECRET_KEY in environment variables");
      return { success: false, error: "Server configuration error: missing reCAPTCHA secret" };
    }
    if (!recaptchaToken) {
      return { success: false, error: "Please complete the reCAPTCHA challenge." };
    }
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const verifyRes = await fetch(verifyUrl, { method: "POST" });
    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      console.error("reCAPTCHA verification failed:", verifyJson);
      return { success: false, error: "reCAPTCHA verification failed. Please try again." };
    }

    // 2. Parse Incoming Lead Details
    const params = new URLSearchParams(paramsStr);
    const firstName = params.get("first_name") || "";
    const lastName = params.get("last_name") || "";
    const email = params.get("email") || "";
    const phone = params.get("phone_number") || "";
    const leadSource = params.get("lead_source") || "OI Website";
    const companyName = params.get("company_name") || "";
    const employeeCount = params.get("employee_count") || "";
    const servicesProposed = params.get("services_proposed") || "";
    const clientNotes = params.get("client_notes") || "";

    // 3. Send data to Primary CRM Webhook
    const response = await fetch(`https://vicidialwebhook.redstartechnologies.com/contact-lead?${paramsStr}`, {
      method: "GET",
    });
    
    let webhookResult = {
      success: response.ok,
      status: response.status,
      text: ""
    };
    try {
      webhookResult.text = await response.text();
    } catch (_) {}
    if (!response.ok) {
      console.error(`Webhook returned status: ${response.status}`);
    }

    // 3.5. Send data to Backend API (bypassing client-side CORS)
    if (clientData) {
      try {
        console.log("Sending lead to backend API from server...");
        const backendRes = await fetch("https://osbackend.ownersjungle.com/api/v1/oi/saas-leads", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(clientData),
        });
        if (!backendRes.ok) {
          console.error(`Backend API returned status: ${backendRes.status}`);
        } else {
          console.log("Successfully sent lead to backend API");
        }
      } catch (backendErr) {
        console.error("Error sending lead to backend API:", backendErr);
      }
    }

    // 4. GoHighLevel Integration Flow
    const ghlApiKey = process.env.NEXT_PUBLIC_GHL_API_KEY;
    const ghlLocationId = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;
    const ghlPipelineId = process.env.NEXT_PUBLIC_GHL_PIPELINE_ID;
    const ghlStageId = process.env.NEXT_PUBLIC_GHL_STAGE_ID;
    let ghlResult: {
      contactUpsert: { success: boolean; data?: any; error?: string };
      opportunityCreate: { success: boolean; data?: any; error?: string };
    } = {
      contactUpsert: { success: false },
      opportunityCreate: { success: false }
    };

    if (ghlApiKey && ghlLocationId) {
      try {
        let contactId = null;
        let matchedContactData = null;

        // Step A: Check duplicates by email
        if (email) {
          console.log(`Checking duplicate contact by email: ${email}`);
          const dupRes = await fetch(
            `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${ghlLocationId}&email=${encodeURIComponent(email)}`,
            {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${ghlApiKey}`,
                "Version": "2021-07-28",
                "Accept": "application/json"
              }
            }
          );
          if (dupRes.ok) {
            const dupData = await dupRes.json();
            if (dupData.contact && dupData.contact.id) {
              contactId = dupData.contact.id;
              matchedContactData = dupData;
              console.log(`Contact found by email. ID: ${contactId}`);
            }
          }
        }

        // Step B: Check duplicates by phone if not found by email
        if (!contactId && phone) {
          console.log(`Checking duplicate contact by phone number: ${phone}`);
          const dupRes = await fetch(
            `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${ghlLocationId}&number=${encodeURIComponent(phone)}`,
            {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${ghlApiKey}`,
                "Version": "2021-07-28",
                "Accept": "application/json"
              }
            }
          );
          if (dupRes.ok) {
            const dupData = await dupRes.json();
            if (dupData.contact && dupData.contact.id) {
              contactId = dupData.contact.id;
              matchedContactData = dupData;
              console.log(`Contact found by phone. ID: ${contactId}`);
            }
          }
        }

        // Step C: Create new contact if not found
        if (!contactId) {
          console.log("Contact not found. Creating new contact...");
          const contactResponse = await fetch("https://services.leadconnectorhq.com/contacts/", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${ghlApiKey}`,
              "Version": "2021-07-28",
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              locationId: ghlLocationId,
              firstName: firstName,
              lastName: lastName,
              email: email,
              phone: phone,
              companyName: companyName,
              source: leadSource,
              tags: ["website-lead"],
              customFields: []
            })
          });
          if (contactResponse.ok) {
            const contactData = await contactResponse.json();
            ghlResult.contactUpsert = { success: true, data: contactData };
            contactId = contactData.contact?.id;
            console.log(`New contact created successfully. Contact ID: ${contactId}`);
          } else {
            const errorText = await contactResponse.text();
            ghlResult.contactUpsert = { success: false, error: errorText };
            console.error("Failed to create contact in GHL:", errorText);
          }
        } else {
          // Contact already existed
          ghlResult.contactUpsert = { success: true, data: matchedContactData };
        }

        // Step D: Create Opportunity
        if (contactId && ghlPipelineId && ghlStageId) {
          console.log("Creating opportunity in GoHighLevel...");
          const oppResponse = await fetch("https://services.leadconnectorhq.com/opportunities/", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${ghlApiKey}`,
              "Version": "2021-07-28",
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              pipelineId: ghlPipelineId,
              pipelineStageId: ghlStageId,
              locationId: ghlLocationId,
              name: `${firstName} ${lastName} - Web Lead`,
              contactId: contactId,
              status: "open"
            })
          });
          if (oppResponse.ok) {
            const oppData = await oppResponse.json();
            ghlResult.opportunityCreate = { success: true, data: oppData };
            console.log("Successfully created opportunity in GHL");
          } else {
            const errorText = await oppResponse.text();
            ghlResult.opportunityCreate = { success: false, error: errorText };
            console.error("Failed to create opportunity in GHL:", errorText);
          }
        } else {
          if (!ghlResult.opportunityCreate.error) {
            ghlResult.opportunityCreate = { 
              success: false, 
              error: `Missing parameters: contactId=${contactId}, pipelineId=${ghlPipelineId}, stageId=${ghlStageId}` 
            };
          }
          console.error("Missing contactId, pipelineId, or stageId for opportunity creation");
        }
      } catch (ghlErr: any) {
        console.error("Error during GHL integration flow:", ghlErr);
        ghlResult.contactUpsert = { success: false, error: ghlErr?.message || "Unknown GHL Error" };
      }
    } else {
      console.warn("GHL credentials missing from environment, skipping GHL integration.");
      ghlResult.contactUpsert = { success: false, error: "GHL credentials missing from environment" };
    }

    // 5. Slack Notification
    const slackWebhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
    let slackResult: { success: boolean; error?: string } = { success: false };

    if (slackWebhookUrl) {
      try {
        const slackMessage = {
          text: `New website lead: ${firstName} ${lastName}`,
          blocks: [
            {
              type: "header",
              text: { type: "plain_text", text: "🔔 New Website Lead", emoji: true },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*Name:*\n${firstName} ${lastName}` },
                { type: "mrkdwn", text: `*Email:*\n${email || "-"}` },
                { type: "mrkdwn", text: `*Phone:*\n${phone || "-"}` },
                { type: "mrkdwn", text: `*Company:*\n${companyName || "-"}` },
                { type: "mrkdwn", text: `*Company Size:*\n${employeeCount || "-"}` },
                { type: "mrkdwn", text: `*Subject:*\n${servicesProposed || "-"}` },
                { type: "mrkdwn", text: `*Source:*\n${leadSource}` },
              ],
            },
            ...(clientNotes
              ? [{ type: "section", text: { type: "mrkdwn", text: `*Notes:*\n${clientNotes}` } }]
              : []),
          ],
        };

        const slackRes = await fetch(slackWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackMessage),
        });

        slackResult.success = slackRes.ok;
        if (!slackRes.ok) {
          const errText = await slackRes.text().catch(() => "");
          slackResult.error = errText || `Slack webhook returned status ${slackRes.status}`;
          console.error("Slack webhook error:", slackResult.error);
        }
      } catch (slackErr: any) {
        slackResult = { success: false, error: slackErr?.message || "Unknown Slack error" };
        console.error("Error sending lead to Slack:", slackErr);
      }
    } else {
      console.warn("NEXT_PUBLIC_SLACK_WEBHOOK_URL missing from environment, skipping Slack notification.");
      slackResult.error = "Slack webhook URL missing from environment";
    }

    return {
      success: response.ok,
      error: response.ok ? undefined : `Webhook returned status ${response.status}`,
      vicidial: webhookResult,
      ghl: ghlResult,
      slack: slackResult
    };
  } catch (error: any) {
    console.error("Server Action Error (Full):", error);
    return { success: false, error: error.message || "Server Action Error" };
  }
}
