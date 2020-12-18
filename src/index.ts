import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHTMLReports('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
