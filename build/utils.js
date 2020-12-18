"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    var date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    return date;
};
exports.dateStringToDate = dateStringToDate;
