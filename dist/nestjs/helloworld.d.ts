import { Observable } from "rxjs";
export declare const protobufPackage = "helloworld";
export interface HelloRequest {
    name: string;
}
export interface HelloResponse {
    message: string;
}
export declare const HELLOWORLD_PACKAGE_NAME = "helloworld";
export interface GreeterClient {
    sayHello(request: HelloRequest): Observable<HelloResponse>;
}
export interface GreeterController {
    sayHello(request: HelloRequest): Promise<HelloResponse> | Observable<HelloResponse> | HelloResponse;
}
export declare function GreeterControllerMethods(): (constructor: Function) => void;
export declare const GREETER_SERVICE_NAME = "Greeter";
