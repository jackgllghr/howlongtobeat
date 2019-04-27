import { SearchOptions } from "../model/SearchOptions";
import { SearchOptionsMapper } from "../mapper/SearchOptions.mapper";
import { HttpService } from "./http.service";
/**
 * Takes care about the http connection and response handling
 */
export declare class HowLongToBeatProvider {
    http: HttpService;
    mapper: SearchOptionsMapper;
    getGameDetailHtml(gameId: string): Promise<string>;
    search(query: string, options?: SearchOptions): Promise<string>;
}
