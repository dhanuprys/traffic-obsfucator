"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./strategy/interface");
class Obsfucator {
    constructor(strategy) {
        this.strategy = strategy;
    }
    encode(payload) {
        let type = null;
        switch (typeof type) {
            case 'string':
                type = interface_1.DataTypes.String;
                break;
            case 'boolean':
                type = interface_1.DataTypes.Boolean;
                break;
            case 'number':
                type = interface_1.DataTypes.Number;
                break;
            case 'object':
                type = Array.isArray(payload)
                    ? interface_1.DataTypes.Array
                    : interface_1.DataTypes.Object;
                break;
        }
        const config = {
            type,
            signature: '',
            start_date: Date.now(),
            end_date: Date.now() + (1000 * 60 * 30)
        };
        return this.strategy.encode(payload, config);
    }
    decode(payload) {
        const decodedResult = this.strategy.decode(payload);
        const config = decodedResult.config;
        if (Date.now() - config.end_date > 0) {
            throw new Error('Payload expired');
        }
        return decodedResult.payload;
    }
}
exports.default = Obsfucator;
