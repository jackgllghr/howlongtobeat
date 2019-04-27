import Xhr from "xhr";
/**
 * Takes care about the http connection and response handling
 */
export class HttpService {
  async get(url: string): Promise<string> {
    let result: Promise<string> = new Promise<string>((resolve, reject) => {
      Xhr.get(url, (error, response, body) => {
        if (error) {
          reject(error);
        } else if (response.statusCode !== 200) {
          reject(new Error("Got non-200 status code from howlongtobeat.com"));
        } else {
          resolve(body);
        }
      });
    });
    return result;
  }

  async post(url: string, body: any): Promise<string> {
    let result: Promise<string> = new Promise<string>((resolve, reject) => {
      Xhr.post(url, body, (error, response, body) => {
        if (error) {
          reject(error);
        } else if (response.statusCode !== 200) {
          reject(new Error("Got non-200 status code from howlongtobeat.com"));
        } else {
          resolve(body);
        }
      });
    });
    return result;
  }
}
