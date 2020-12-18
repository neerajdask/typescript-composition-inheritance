import { MatchData } from './MatchData';

import { HTMLReport } from './report-tagets/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget
    ) {}

    static winsAnalysisWithHTMLReports(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HTMLReport());
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
