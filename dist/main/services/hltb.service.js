"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const provider_1 = require("./provider");
const parser_1 = require("./parser");
class HowLongToBeatService {
    constructor() {
        this.provider = new provider_1.HowLongToBeatProvider();
    }
    /**
     * Get HowLongToBeatEntry from game id, by fetching the detail page like https://howlongtobeat.com/game.php?id=6974 and parsing it.
     * @param gameId the hltb internal gameid
     * @return Promise<HowLongToBeatEntry> the promise that, when fullfilled, returns the game
     */
    getDetail(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider
                .getGameDetailHtml(gameId)
                .then(detailPage => parser_1.HowLongToBeatParser.parseDetails(detailPage, gameId));
        });
    }
    search(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider
                .search(query, options)
                .then(searchPage => parser_1.HowLongToBeatParser.parseSearch(searchPage, query));
        });
    }
}
exports.HowLongToBeatService = HowLongToBeatService;
//# sourceMappingURL=hltb.service.js.map