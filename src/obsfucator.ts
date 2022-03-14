import { IStrategy, DataConfig, DataTypes, Metadata } from './strategy/interface';

export default class Obsfucator {
    private readonly strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    encode(payload: any): string {
        let type = null;

        switch (typeof type) {
            case 'string':
                type = DataTypes.String;
                break;
            case 'boolean':
                type = DataTypes.Boolean;
                break;
            case 'number':
                type = DataTypes.Number;
                break;
            case 'object':
                type = Array.isArray(payload)
                        ? DataTypes.Array
                        : DataTypes.Object;
                break;
        }

        const config: DataConfig = {
            type,
            signature: '',
            start_date: Date.now(),
            end_date: Date.now() + (1000*60*30)
        }

        return this.strategy.encode(payload, config);
    }

    decode<T>(payload: string): T {
        const decodedResult: Metadata = this.strategy.decode(payload);
        const config = decodedResult.config;

        if (Date.now() - config.end_date > 0) {
            throw new Error('Payload expired');
        }

        return decodedResult.payload;
    }
}