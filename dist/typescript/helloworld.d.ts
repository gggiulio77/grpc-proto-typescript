import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "helloworld";
export interface HelloRequest {
    name: string;
}
export interface HelloResponse {
    message: string;
}
export declare const HelloRequest: {
    encode(message: HelloRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest;
    fromJSON(object: any): HelloRequest;
    toJSON(message: HelloRequest): unknown;
    create<I extends {
        name?: string;
    } & {
        name?: string;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I): HelloRequest;
    fromPartial<I_1 extends {
        name?: string;
    } & {
        name?: string;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): HelloRequest;
};
export declare const HelloResponse: {
    encode(message: HelloResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HelloResponse;
    fromJSON(object: any): HelloResponse;
    toJSON(message: HelloResponse): unknown;
    create<I extends {
        message?: string;
    } & {
        message?: string;
    } & { [K in Exclude<keyof I, "message">]: never; }>(base?: I): HelloResponse;
    fromPartial<I_1 extends {
        message?: string;
    } & {
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): HelloResponse;
};
export interface Greeter {
    SayHello(request: HelloRequest): Promise<HelloResponse>;
}
export declare const GreeterServiceName = "helloworld.Greeter";
export declare class GreeterClientImpl implements Greeter {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SayHello(request: HelloRequest): Promise<HelloResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
