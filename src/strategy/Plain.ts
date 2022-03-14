import { IStrategy, DataConfig, wrapResult } from './interface';

export default class Plain implements IStrategy {
    encode(payload: any,  config: DataConfig): string {
        return wrapResult(payload, config);
    }

    decode<T>(payload: string): T {
        return JSON.parse(payload);
    }
}