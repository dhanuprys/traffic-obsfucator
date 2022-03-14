"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
class Base64 {
    encode(payload, config) {
        return Buffer.from((0, interface_1.wrapResult)(payload, config)).toString('base64');
    }
    decode(payload) {
        return JSON.parse(Buffer.from(payload, 'base64').toString());
    }
}
exports.default = Base64;
