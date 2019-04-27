import { SearchOptions } from "../model/SearchOptions";
import { SearchOptionsMapper } from "../mapper/SearchOptions.mapper";
import { HttpService } from "./http.service";
import { HowLongToBeatParser } from "./parser";
import { Constants } from "../constants";

/**
 * Takes care about the http connection and response handling
 */
export class HowLongToBeatProvider {
  http: HttpService = new HttpService();
  mapper: SearchOptionsMapper = new SearchOptionsMapper();

  async getGameDetailHtml(gameId: string): Promise<string> {
    return this.http.get(`${Constants.DETAIL_URL}${gameId}`);
  }

  async search(query: string, options?: SearchOptions): Promise<string> {
    return this.http.post(
      Constants.SEARCH_URL,
      this.mapper.map(query, options)
    );
  }
}
