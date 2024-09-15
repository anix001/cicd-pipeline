"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.config = void 0;
const configuration_utils_1 = __importDefault(require("./configuration.utils"));
exports.config = configuration_utils_1.default;
const handleError_utils_1 = require("./handleError.utils");
Object.defineProperty(exports, "handleError", { enumerable: true, get: function () { return handleError_utils_1.handleError; } });
