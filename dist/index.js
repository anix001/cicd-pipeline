"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./utils");
const middleware_1 = require("./middleware");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = utils_1.config.port;
//[for json parse]
app.use(express_1.default.json());
//[for cors]
app.use((0, cors_1.default)(middleware_1.corsOptions));
//routes
app.use("/api", routes_1.default);
app.get('/', (req, res) => {
    res.send("Express + Typescript Boilerplate");
});
//[error middleware]
app.use(middleware_1.errorHandler);
app.listen(port, () => {
    console.log(`[server]: Server is running on port ${port}!!`);
});
