import { IStrategy, DataConfig, wrapResult } from './interface';

export default class Base64 implements IStrategy {
    encode(payload: any,  config: DataConfig): string {
        return Buffer.from(wrapResult(payload, config)).toString('base64');
    }

    decode<T>(payload: string): T {
        return JSON.parse(Buffer.from(payload, 'base64').toString());
    }
}