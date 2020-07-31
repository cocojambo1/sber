"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validInfo = function (req, res, next) {
    var _a = req.body, email = _a.email, name = _a.name, password = _a.password;
    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    if (req.path === "/register") {
        if (![email, name, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
        }
        else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    }
    else {
        if (req.path === "/login") {
            if (![email, password].every(Boolean)) {
                return res.status(401).json("Missing Credentials");
            }
            else if (!validEmail(email)) {
                return res.status(401).json("Invalid Email");
            }
        }
    }
    next();
};
exports.default = validInfo;
