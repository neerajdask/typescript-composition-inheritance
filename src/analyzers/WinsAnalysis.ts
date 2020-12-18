import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}
    teamWins = 0;

    run(matches: MatchData[]): string {
        for (let match of matches) {
            if (
                match[1] === this.team &&
                match[5] === MatchResult.HomeWin
            ) {
                this.teamWins++;
            } else if (
                match[2] === this.team &&
                match[5] === MatchResult.AwayWin
            ) {
                this.teamWins++;
            }
        }
        return this.team + ' won ' + this.teamWins + ' games.';
    }
}
