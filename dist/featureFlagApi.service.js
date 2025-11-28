"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFeatureFlagClient = initFeatureFlagClient;
exports.fetchFeatureFlag = fetchFeatureFlag;
let config = null;
function initFeatureFlagClient(options) {
    config = options;
}
async function fetchFeatureFlag(flagName, userEmail) {
    var _a;
    if (!config) {
        throw new Error("Feature flags not initialized. Call initFeatureFlags({ apiDomain, apiKey }).");
    }
    const { apiDomain, apiKey } = config;
    try {
        const res = await fetch(`${apiDomain}/api/public/feature-flags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
            body: JSON.stringify({
                featureFlagName: flagName,
                ...(userEmail && { userEmail }),
            }),
            cache: "no-store",
        });
        if (!res.ok)
            return false;
        const data = await res.json();
        return (_a = data.enabled) !== null && _a !== void 0 ? _a : false;
    }
    catch (err) {
        console.error("Error fetching feature flag:", err);
        return false;
    }
}
