import { createEncryptor, SimpleEncryptor } from 'simple-encryptor';
import { IStrategy, DataConfig, wrapResult } from './interface';

export default class Passwordable implements IStrategy {
    private readonly encryptor: SimpleEncryptor;
    constructor(key: string) {
        this.encryptor = createEncryptor(key);
    }
    encode(payload: any,  config: DataConfig): string {
        return this.encryptor.encrypt(wrapResult(payload, config));
    }

    decode<T>(payload: string): T {
        return JSON.parse(this.encryptor.decrypt(payload) as string);
    }
}