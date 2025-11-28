export type FeatureFlagServiceOptions = {
    apiDomain: string;
    apiKey: string;
};

let config: FeatureFlagServiceOptions | null = null;

export function initFeatureFlagClient(options: FeatureFlagServiceOptions) {
    config = options;
}

export async function fetchFeatureFlag(
    flagName: string,
    userEmail?: string
): Promise<boolean> {
    if (!config) {
        throw new Error(
            "Feature flags not initialized. Call initFeatureFlags({ apiDomain, apiKey })."
        );
    }

    const { apiDomain, apiKey } = config;

    try {
        const res = await fetch(
            `${apiDomain}/api/public/feature-flags`,
            {
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
            }
        );

        if (!res.ok) return false;

        const data = await res.json();
        return data.enabled ?? false;
    } catch (err) {
        console.error("Error fetching feature flag:", err);
        return false;
    }
}