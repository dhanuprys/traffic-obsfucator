import { NextFunction, Request, Response } from "express";
import Obsfucator from "./obsfucator";

export type ExpressModifiedRequest = Request & {
    payload: any
}

export type ExpressModifiedResponse = Response & {
    obsfucate: (payload: any) => void
}

export default class Middleware {
    constructor(private readonly obsfucator: Obsfucator) {
        
    }

    createHandler() {
        return (req: ExpressModifiedRequest, res: ExpressModifiedResponse, next: NextFunction) => {
            const { method, body } = req;

            res.obsfucate = (payload: any) => {
                return res.send(this.obsfucator.encode(payload));
            }

            if (method === 'GET' || body.to === undefined) {
                next();
            }

            try {
                req.payload = this.obsfucator.decode(body.to);
            } catch (error: any) {
                // return res.status(400).send(error.message);
            }

            // const encodedPayload = obsfucator.encode(payload);
            next();
        }
    }
}