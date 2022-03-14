"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
class Plain {
    encode(payload, config) {
        return (0, interface_1.wrapResult)(payload, config);
    }
    decode(payload) {
        return JSON.parse(payload);
    }
}
exports.default = Plain;
