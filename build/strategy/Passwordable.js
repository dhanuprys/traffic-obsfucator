"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_encryptor_1 = require("simple-encryptor");
const interface_1 = require("./interface");
class Passwordable {
    constructor(key) {
        this.encryptor = (0, simple_encryptor_1.createEncryptor)(key);
    }
    encode(payload, config) {
        return this.encryptor.encrypt((0, interface_1.wrapResult)(payload, config));
    }
    decode(payload) {
        return JSON.parse(this.encryptor.decrypt(payload));
    }
}
exports.default = Passwordable;
