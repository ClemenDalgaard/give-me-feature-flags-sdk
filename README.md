1. Install the SDK from terminal

npm i give-me-feature-flags-sdk

---

2. Import the SDK at the top of your file

import { initFeatureFlagClient, fetchFeatureFlag } from "give-me-feature-flags-sdk";

---

3. Use the SDK

const apiDomain = process.env.FEATURE_FLAG_API_DOMAIN!;

const apiKey = process.env.FEATURE_FLAG_API_KEY!;

initFeatureFlagClient({ apiDomain, apiKey });

const kaffe = await fetchFeatureFlag("kaffe");

---

4. Store API domain and key in .env file:

FEATURE_FLAG_API_DOMAIN=http://cool-endpoint:3000

FEATURE_FLAG_API_KEY=contact_us_for_key
