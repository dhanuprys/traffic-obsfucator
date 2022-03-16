import { IStrategy, DataConfig } from './interface';
export default class Passwordable implements IStrategy {
    private readonly encryptor;
    constructor(key: string);
    encode(payload: any, config: DataConfig): string;
    decode<T>(payload: string): T;
}
