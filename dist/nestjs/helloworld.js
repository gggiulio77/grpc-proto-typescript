"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GREETER_SERVICE_NAME = exports.GreeterControllerMethods = exports.HELLOWORLD_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = 'helloworld';
exports.HELLOWORLD_PACKAGE_NAME = 'helloworld';
function GreeterControllerMethods() {
    return function (constructor) {
        const grpcMethods = ['sayHello'];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)('Greeter', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)('Greeter', method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.GreeterControllerMethods = GreeterControllerMethods;
exports.GREETER_SERVICE_NAME = 'Greeter';
//# sourceMappingURL=helloworld.js.map