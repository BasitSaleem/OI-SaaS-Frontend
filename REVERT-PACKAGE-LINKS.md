# Revert Guide: Package Link Mapper

## What Was Changed

A package link mapper utility was added to resolve staging/production URLs dynamically based on environment. Below are all the changes made and how to revert them.

---

## Files to DELETE

Remove these two new files entirely:

```
src/utils/package-links.config.ts
src/utils/getPackageLink.ts
```

Remove the production env file:

```
.env.production
```

---

## Files to REVERT

### 1. `.env.local`

Remove the last line:

```
NEXT_PUBLIC_APP_ENV=staging
```

Final `.env.local` should look like:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY= 6LfgMSAtAAAAAEpINyeGapMPVo1V4jWj2S16iy_v
RECAPTCHA_SECRET_KEY= 6LfgMSAtAAAAAE643oj0OwFoRM4O-knwxzYBCQsx
```

---

### 2. `src/components/pages/Pricings/data/retailData.ts`

Remove the import line:
```ts
import { getPackageLink } from "../../../../utils/getPackageLink";
```

Replace the three link fields back to hardcoded URLs:

| Field | Restore to |
|---|---|
| `retail-basic` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=d755fe7d-4372-426c-af33-e63b71a6521f"` |
| `retail-pro` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=8e773346-3c38-4e76-9c1e-7f293a40d81c"` |
| `retail-premium` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=d63271f4-1978-47af-b573-ba4a5516d8f8"` |

---

### 3. `src/components/pages/Pricings/data/manufacturingData.ts`

Remove the import line:
```ts
import { getPackageLink } from "../../../../utils/getPackageLink";
```

Replace the three link fields:

| Field | Restore to |
|---|---|
| `manufacturing-basic` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=bb2e676e-6b10-40a9-83be-c0c660dc8ad2"` |
| `manufacturing-pro` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=4cb8ef12-08a5-48bb-8d48-4c738f0848bf"` |
| `manufacturing-premium` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=fd06bfbc-5de7-4457-bad5-0c073c5ee98e"` |

---

### 4. `src/components/pages/Pricings/data/ecommerceData.ts`

Remove the import line:
```ts
import { getPackageLink } from "../../../../utils/getPackageLink";
```

Replace the three link fields:

| Field | Restore to |
|---|---|
| `ecommerce-basic` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=b5b40c3b-7123-41f8-9e70-1d6eb5af76b1"` |
| `ecommerce-pro` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=b61801dc-658e-4ff1-83b2-8921e65bf410"` |
| `ecommerce-premium` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=90e3d803-80a2-40e0-8e38-7f0ec66e931c"` |

---

### 5. `src/components/pages/Pricings/data/hybridData.ts`

Remove the import line:
```ts
import { getPackageLink } from "../../../../utils/getPackageLink";
```

Replace the two link fields:

| Field | Restore to |
|---|---|
| `hybrid-pro` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=98d8f68b-6b0c-43e2-aa6b-f0594e505cbe"` |
| `hybrid-enterprise` | `"https://osglobal.ownersjungle.com/create-organization?product=OI&pkgId=51dfa210-cd5a-4943-ba46-ee106f854f80"` |

---

## AWS Amplify

If you added `NEXT_PUBLIC_APP_ENV=production` in the Amplify dashboard:

1. Go to **Amplify Console** → your app → **Hosting** → **Environment variables**
2. Delete the `NEXT_PUBLIC_APP_ENV` variable
3. Redeploy
