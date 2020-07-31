"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = require('pg').Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});
exports.default = pool;
