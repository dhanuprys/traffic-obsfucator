export declare enum DataTypes {
    Object = 0,
    Array = 1,
    String = 2,
    Number = 3,
    Boolean = 4
}
export declare type DataConfig = {
    type: DataTypes;
    signature?: string;
    start_date: number;
    end_date: number;
};
export declare type Metadata = {
    payload: any;
    config: DataConfig;
};
export declare function wrapResult(payload: Metadata['payload'], config: Metadata['config']): string;
export interface IStrategy {
    encode(payload: Metadata['payload'], config: Metadata['config']): string;
    decode<T>(payload: string): T;
}
