"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
var jwtGenerator = function (user_id) {
    var payload = {
        user: user_id,
    };
    // @ts-ignore
    return jsonwebtoken_1.default.sign(payload, process.env.jwtSecret);
};
exports.default = jwtGenerator;
