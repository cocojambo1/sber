"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var auth_1 = __importDefault(require("./routes/auth"));
var app = express_1.default();
var server = http_1.default.createServer(app);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
var allowedOrigins = ['http://localhost:3000'];
app.use(cors_1.default({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use('/user', auth_1.default);
server.listen(8000, function () {
    console.log('listening on *:8000');
});
