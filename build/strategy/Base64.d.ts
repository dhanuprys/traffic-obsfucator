import { IStrategy, DataConfig } from './interface';
export default class Base64 implements IStrategy {
    encode(payload: any, config: DataConfig): string;
    decode<T>(payload: string): T;
}
