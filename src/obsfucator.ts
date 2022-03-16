import { IStrategy, DataConfig, DataTypes, Metadata } from './strategy/interface';

export default class Obsfucator {
    constructor(private readonly strategy: IStrategy) {
    }

    /**
     * 
     * @param payload Data yang akan di enskripsi
     * @param expired Waktu hidup data
     * @returns 
     */
    encode(payload: any, expired: number = 1800000): string {
        let type = null;

        // Mendeteksi tipe data yang akan digunakan
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
            end_date: Date.now() + expired
        }

        return this.strategy.encode(payload, config);
    }

    decode<T>(payload: string): T {
        const decodedResult: Metadata = this.strategy.decode(payload);
        const config = decodedResult.config;

        // Validasi kedaluwarsa data: 30 menit
        if (Date.now() - config.end_date > 0) {
            throw new Error('Payload expired');
        }

        return decodedResult.payload;
    }
}