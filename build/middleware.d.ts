import { NextFunction, Request, Response } from "express";
import Obsfucator from "./obsfucator";
export declare type ExpressModifiedRequest = Request & {
    payload: any;
};
export declare type ExpressModifiedResponse = Response & {
    obsfucate: (payload: any) => void;
};
export default class Middleware {
    private readonly obsfucator;
    constructor(obsfucator: Obsfucator);
    createHandler(): (req: ExpressModifiedRequest, res: ExpressModifiedResponse, next: NextFunction) => void;
}
