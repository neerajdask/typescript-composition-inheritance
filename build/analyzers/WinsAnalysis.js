"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
        this.teamWins = 0;
    }
    WinsAnalysis.prototype.run = function (matches) {
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team &&
                match[5] === MatchResult_1.MatchResult.HomeWin) {
                this.teamWins++;
            }
            else if (match[2] === this.team &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                this.teamWins++;
            }
        }
        return this.team + ' won ' + this.teamWins + ' games.';
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
