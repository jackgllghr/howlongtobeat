/**
 * Encapsulates a game detail
 */
export class HowLongToBeatEntry {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly imageUrl: string,
    public readonly timeLabels: Array<string[]>,
    public readonly gameplayMain: number,
    public readonly gameplayMainExtra: number,
    public readonly gameplayCompletionist: number,
    public readonly similarity: number
  ) {}
}
