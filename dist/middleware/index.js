"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.corsOptions = void 0;
const cors_middleware_1 = __importDefault(require("./cors.middleware"));
exports.corsOptions = cors_middleware_1.default;
const error_middleware_1 = require("./error.middleware");
Object.defineProperty(exports, "errorHandler", { enumerable: true, get: function () { return error_middleware_1.errorHandler; } });
