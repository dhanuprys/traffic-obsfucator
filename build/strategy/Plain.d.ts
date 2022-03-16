import { IStrategy, DataConfig } from './interface';
export default class Plain implements IStrategy {
    encode(payload: any, config: DataConfig): string;
    decode<T>(payload: string): T;
}
