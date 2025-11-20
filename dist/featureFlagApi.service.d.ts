export type FeatureFlagServiceOptions = {
    apiDomain: string;
    apiKey: string;
};
export declare function initFeatureFlagClient(options: FeatureFlagServiceOptions): void;
export declare function fetchFeatureFlag(flagName: string): Promise<boolean>;
