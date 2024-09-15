"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
//[Load environment from .env files]
dotenv_1.default.config();
;
const config = {
    port: parseInt(process.env.PORT) || 8000,
    databaseUrl: process.env.DATABASE_URL,
    // allowedOrigins : process.env.ALLOWED_ORIGINS?.split(',') || []
};
exports.default = config;
