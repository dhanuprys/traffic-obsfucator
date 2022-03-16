export enum DataTypes {
    Object,
    Array,
    String,
    Number,
    Boolean,
}

/**
 * Konfigurasi yang akan dibawa pada setiap traffic
 */
export type DataConfig = {
    type: DataTypes,
    signature?: string,
    start_date: number,
    end_date: number
}

/**
 * Tipe data vital yang akan dibaca oleh program
 */
export type Metadata = {
    payload: any,
    config: DataConfig
}

/**
 * Digunakan untuk mengikat data sesuai dengan standar program
 */
export function wrapResult(
    payload: Metadata['payload'],
    config: Metadata['config']
): string {
    return JSON.stringify({
        payload,
        config
    });
}

export interface IStrategy {
    /**
     * Melakukan enskripsi data dengan proses yang berbeda-beda tergantung dengan
     * instansinya
     * 
     * @param payload 
     * @param config 
     */
    encode(payload: Metadata['payload'], config: Metadata['config']): string;

    /**
     * Melakukan deskripsi data dengan proses yang berbeda-beda tergantung dengan
     * instansinya
     * @param payload 
     */
    decode<T>(payload: string): T;
}