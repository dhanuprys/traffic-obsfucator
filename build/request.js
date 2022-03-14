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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Request {
    constructor(strategy) {
        this.strategy = strategy;
    }
    post(url, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._request('post', url, payload);
        });
    }
    _request(method, url, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, axios_1.default)({
                method: method,
                url,
                data: {
                    to: this.strategy.encode(payload)
                }
            });
            return this.strategy.decode(result.data);
        });
    }
}
exports.default = Request;
