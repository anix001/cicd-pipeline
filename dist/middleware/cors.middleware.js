"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { config } from '../utils';
const corsOptions = {
    origin: '*', // allowed origin lists
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], //allowed Http methods
    allowedHeaders: ['Content-Type', 'Authorization'], //allowed headers
    credentials: true, //allow credentials(cookies, authorization headers, etc.)
    optionsSuccessStatus: 200 //Status for successful OPTIONS requests
};
exports.default = corsOptions;
