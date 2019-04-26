import { HowLongToBeatProvider } from './services/provider';
import { SearchOptions } from './model/SearchOptions';
import { HowLongToBeatParser } from './services/parser';
import { HowLongToBeatEntry } from './model/HowLongToBeatEntry';

export class HowLongToBeatService {
  private provider: HowLongToBeatProvider = new HowLongToBeatProvider();
  
  /**
   * Get HowLongToBeatEntry from game id, by fetching the detail page like https://howlongtobeat.com/game.php?id=6974 and parsing it.
   * @param gameId the hltb internal gameid
   * @return Promise<HowLongToBeatEntry> the promise that, when fullfilled, returns the game
   */
  async getDetail(gameId: string): Promise<HowLongToBeatEntry> {
    return this.provider.getGameDetailHtml(gameId).then(detailPage => HowLongToBeatParser.parseDetails(detailPage, gameId));
  }

  async search(query: string, options?: SearchOptions): Promise<Array<HowLongToBeatEntry>> {
    return this.provider.search(query, options).then( searchPage => HowLongToBeatParser.parseSearch(searchPage, query));
  }
}


