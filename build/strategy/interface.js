"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapResult = exports.DataTypes = void 0;
var DataTypes;
(function (DataTypes) {
    DataTypes[DataTypes["Object"] = 0] = "Object";
    DataTypes[DataTypes["Array"] = 1] = "Array";
    DataTypes[DataTypes["String"] = 2] = "String";
    DataTypes[DataTypes["Number"] = 3] = "Number";
    DataTypes[DataTypes["Boolean"] = 4] = "Boolean";
})(DataTypes = exports.DataTypes || (exports.DataTypes = {}));
function wrapResult(payload, config) {
    return JSON.stringify({
        payload,
        config
    });
}
exports.wrapResult = wrapResult;
