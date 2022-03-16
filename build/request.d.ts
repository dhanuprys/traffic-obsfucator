import Obsfucator from "./obsfucator";
export default class Request {
    private readonly strategy;
    constructor(strategy: Obsfucator);
    post<T>(url: string, payload: any): Promise<T>;
    private _request;
}
