import axios, { Method } from 'axios';
import Obsfucator from "./obsfucator";

export default class Request {
    constructor(private readonly strategy: Obsfucator) {

    }

    async post<T>(url: string, payload: any): Promise<T> {
        return this._request<T>('post', url, payload);
    }

    private async _request<T>(method: string, url: string, payload: any): Promise<T> {
        const result = await axios({
            method: method as unknown as Method,
            url,
            data: {
                to: this.strategy.encode(payload)
            }
        });

        return this.strategy.decode<T>(result.data);
    }
}