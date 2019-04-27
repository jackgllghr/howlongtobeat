import { SearchOptions } from "../model/SearchOptions";
import { HowLongToBeatEntry } from "../model/HowLongToBeatEntry";
export declare class HowLongToBeatService {
    private provider;
    /**
     * Get HowLongToBeatEntry from game id, by fetching the detail page like https://howlongtobeat.com/game.php?id=6974 and parsing it.
     * @param gameId the hltb internal gameid
     * @return Promise<HowLongToBeatEntry> the promise that, when fullfilled, returns the game
     */
    getDetail(gameId: string): Promise<HowLongToBeatEntry>;
    search(query: string, options?: SearchOptions): Promise<Array<HowLongToBeatEntry>>;
}
