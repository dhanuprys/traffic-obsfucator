export enum DataTypes {
    Object,
    Array,
    String,
    Number,
    Boolean,
}

export type DataConfig = {
    type: DataTypes,
    signature?: string,
    start_date: number,
    end_date: number
}

export type Metadata = {
    payload: any,
    config: DataConfig
}

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
    encode(payload: Metadata['payload'], config: Metadata['config']): string;
    decode<T>(payload: string): T;
}