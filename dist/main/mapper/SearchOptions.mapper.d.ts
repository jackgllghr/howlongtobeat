import { SearchOptions } from "../model/SearchOptions";
import { HLTPSearchRequestBody } from "../model/HLTBSearchRequestBody";
export declare class SearchOptionsMapper {
    map(query: string, data?: SearchOptions): HLTPSearchRequestBody;
}
