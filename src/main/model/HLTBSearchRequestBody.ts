import { SortType } from "./SortType.enum";
import { SortOrder } from "./SortOrder.enum";
import { GamePlatform } from "./GamePlatforms.enum";
import { LengthType } from "./LengthType.enum";
import { DetailType } from "./DetailType.enum";

interface QueryQSRequestBody {
  page: number;
}
interface QueryParamsRequestBody {
  queryString: string;
  t: "games";
  sorthead: SortType;
  sortd: SortOrder;
  plat: GamePlatform;
  length_type: LengthType;
  length_min: string;
  length_max: string;
  detail: DetailType;
}
export interface HLTPSearchRequestBody {
  qs: QueryQSRequestBody;
  form: QueryParamsRequestBody;
}

