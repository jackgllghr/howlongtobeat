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
const SearchOptions_mapper_1 = require("../mapper/SearchOptions.mapper");
const http_service_1 = require("./http.service");
const constants_1 = require("../constants");
/**
 * Takes care about the http connection and response handling
 */
class HowLongToBeatProvider {
    constructor() {
        this.http = new http_service_1.HttpService();
        this.mapper = new SearchOptions_mapper_1.SearchOptionsMapper();
    }
    ;
    ;
    getGameDetailHtml(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(`${constants_1.Constants.DETAIL_URL}${gameId}`);
        });
    }
    search(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(constants_1.Constants.SEARCH_URL, this.mapper.map(query, options));
        });
    }
}
exports.HowLongToBeatProvider = HowLongToBeatProvider;
//# sourceMappingURL=provider.js.map