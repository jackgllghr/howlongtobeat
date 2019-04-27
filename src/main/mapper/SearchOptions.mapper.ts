import { SearchOptions } from "../model/SearchOptions";
import { HLTPSearchRequestBody } from "../model/HLTBSearchRequestBody";
import { LengthType } from "../model/LengthType.enum";
import { DetailType } from "../model/DetailType.enum";
import { SortOrder } from "../model/SortOrder.enum";
import { SortType } from "../model/SortType.enum";
import { GamePlatform } from "../model/GamePlatforms.enum";

export class SearchOptionsMapper {
  map(query: string, data?: SearchOptions): HLTPSearchRequestBody {
    return !!data
      ? {
          qs: {
            page: !!data.page ? data.page : 1
          },
          form: {
            detail: !!data.detailType ? data.detailType : DetailType.NONE,
            queryString: query,
            t: "games",
            length_type: !!data.lengthType
              ? data.lengthType
              : LengthType.MAIN_STORY,
            length_max: !!data.lengthMax ? data.lengthMax.toString() : "",
            length_min: !!data.lengthMin ? data.lengthMin.toString() : "",
            plat: !!data.platform ? data.platform : GamePlatform.ALL,
            sortd: !!data.sortOrder ? data.sortOrder : SortOrder.NORMAL_ORDER,
            sorthead: !!data.sortType ? data.sortType : SortType.POPULAR
          }
        }
      : {
          qs: {
            page: 1
          },
          form: {
            detail: DetailType.NONE,
            t: "games",
            queryString: query,
            length_max: "",
            length_min: "",
            plat: GamePlatform.ALL,
            length_type: LengthType.MAIN_STORY,
            sortd: SortOrder.NORMAL_ORDER,
            sorthead: SortType.POPULAR
          }
        };
  }
}
