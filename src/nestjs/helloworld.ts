/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "helloworld";

export interface HelloRequest {
  name: string;
}

export interface HelloResponse {
  message: string;
}

export const HELLOWORLD_PACKAGE_NAME = "helloworld";

export interface GreeterClient {
  sayHello(request: HelloRequest): Observable<HelloResponse>;
}

export interface GreeterController {
  sayHello(request: HelloRequest): Promise<HelloResponse> | Observable<HelloResponse> | HelloResponse;
}

export function GreeterControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["sayHello"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("Greeter", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("Greeter", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const GREETER_SERVICE_NAME = "Greeter";
