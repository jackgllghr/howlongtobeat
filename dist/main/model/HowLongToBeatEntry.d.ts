/**
 * Encapsulates a game detail
 */
export declare class HowLongToBeatEntry {
    readonly id: string;
    readonly name: string;
    readonly imageUrl: string;
    readonly timeLabels: Array<string[]>;
    readonly gameplayMain: number;
    readonly gameplayMainExtra: number;
    readonly gameplayCompletionist: number;
    readonly similarity: number;
    constructor(id: string, name: string, imageUrl: string, timeLabels: Array<string[]>, gameplayMain: number, gameplayMainExtra: number, gameplayCompletionist: number, similarity: number);
}
