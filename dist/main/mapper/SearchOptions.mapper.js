"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LengthType_enum_1 = require("../model/LengthType.enum");
const DetailType_enum_1 = require("../model/DetailType.enum");
const SortOrder_enum_1 = require("../model/SortOrder.enum");
const SortType_enum_1 = require("../model/SortType.enum");
const GamePlatforms_enum_1 = require("../model/GamePlatforms.enum");
class SearchOptionsMapper {
    map(query, data) {
        return !!data
            ? {
                qs: {
                    page: !!data.page ? data.page : 1
                },
                form: {
                    detail: !!data.detailType ? data.detailType : DetailType_enum_1.DetailType.NONE,
                    queryString: query,
                    t: "games",
                    length_type: !!data.lengthType
                        ? data.lengthType
                        : LengthType_enum_1.LengthType.MAIN_STORY,
                    length_max: !!data.lengthMax ? data.lengthMax.toString() : "",
                    length_min: !!data.lengthMin ? data.lengthMin.toString() : "",
                    plat: !!data.platform ? data.platform : GamePlatforms_enum_1.GamePlatform.ALL,
                    sortd: !!data.sortOrder ? data.sortOrder : SortOrder_enum_1.SortOrder.NORMAL_ORDER,
                    sorthead: !!data.sortType ? data.sortType : SortType_enum_1.SortType.POPULAR
                }
            }
            : {
                qs: {
                    page: 1
                },
                form: {
                    detail: DetailType_enum_1.DetailType.NONE,
                    t: "games",
                    queryString: query,
                    length_max: "",
                    length_min: "",
                    plat: GamePlatforms_enum_1.GamePlatform.ALL,
                    length_type: LengthType_enum_1.LengthType.MAIN_STORY,
                    sortd: SortOrder_enum_1.SortOrder.NORMAL_ORDER,
                    sorthead: SortType_enum_1.SortType.POPULAR
                }
            };
    }
}
exports.SearchOptionsMapper = SearchOptionsMapper;
//# sourceMappingURL=SearchOptions.mapper.js.map