import { IStrategy } from './strategy/interface';
export default class Obsfucator {
    private readonly strategy;
    constructor(strategy: IStrategy);
    encode(payload: any, expired?: number): string;
    decode<T>(payload: string): T;
}
