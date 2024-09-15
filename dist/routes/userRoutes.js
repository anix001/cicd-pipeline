"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const utils_1 = require("../utils");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    try {
        const user = {
            email,
            name,
        };
        const createUser = yield prisma.user.create({ data: user });
        return res.status(200).send({
            message: 'User created successfully',
            data: createUser
        });
    }
    catch (error) {
        (0, utils_1.handleError)(error, 'Error Creating User');
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        return res.status(200).send({
            message: 'Users fetched successfully',
            data: users
        });
    }
    catch (error) {
        (0, utils_1.handleError)(error, 'Error Fetching Users');
    }
}));
exports.default = router;
