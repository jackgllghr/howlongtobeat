import { SortType } from "./SortType.enum";
import { SortOrder } from "./SortOrder.enum";
import { GamePlatform } from "./GamePlatforms.enum";
import { LengthType } from "./LengthType.enum";
import { DetailType } from "./DetailType.enum";
export interface SearchOptions {
    page?: number;
    sortType?: SortType;
    sortOrder?: SortOrder;
    platform?: GamePlatform;
    lengthType?: LengthType;
    lengthMin?: number;
    lengthMax?: number;
    detailType?: DetailType;
}
