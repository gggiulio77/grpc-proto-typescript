"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeterClientImpl = exports.GreeterServiceName = exports.HelloResponse = exports.HelloRequest = exports.protobufPackage = void 0;
const _m0 = require("protobufjs/minimal");
exports.protobufPackage = "helloworld";
function createBaseHelloRequest() {
    return { name: "" };
}
exports.HelloRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHelloRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.HelloRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHelloRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseHelloResponse() {
    return { message: "" };
}
exports.HelloResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHelloResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.HelloResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHelloResponse();
        message.message = object.message ?? "";
        return message;
    },
};
exports.GreeterServiceName = "helloworld.Greeter";
class GreeterClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.GreeterServiceName;
        this.rpc = rpc;
        this.SayHello = this.SayHello.bind(this);
    }
    SayHello(request) {
        const data = exports.HelloRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SayHello", data);
        return promise.then((data) => exports.HelloResponse.decode(_m0.Reader.create(data)));
    }
}
exports.GreeterClientImpl = GreeterClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=helloworld.js.map