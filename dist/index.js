"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFeatureFlag = exports.initFeatureFlagClient = void 0;
var featureFlagApi_service_1 = require("./featureFlagApi.service");
Object.defineProperty(exports, "initFeatureFlagClient", { enumerable: true, get: function () { return featureFlagApi_service_1.initFeatureFlagClient; } });
Object.defineProperty(exports, "fetchFeatureFlag", { enumerable: true, get: function () { return featureFlagApi_service_1.fetchFeatureFlag; } });
