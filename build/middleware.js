"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Middleware {
    constructor(obsfucator) {
        this.obsfucator = obsfucator;
    }
    createHandler() {
        return (req, res, next) => {
            const { method, body } = req;
            res.obsfucate = (payload) => {
                return res.send(this.obsfucator.encode(payload));
            };
            if (method === 'GET' || body.to === undefined) {
                next();
            }
            try {
                req.payload = this.obsfucator.decode(body.to);
            }
            catch (error) {
            }
            next();
        };
    }
}
exports.default = Middleware;
