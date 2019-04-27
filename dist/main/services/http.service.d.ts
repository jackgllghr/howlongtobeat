/**
 * Takes care about the http connection and response handling
 */
export declare class HttpService {
    get(url: string): Promise<string>;
    post(url: string, body: any): Promise<string>;
}
