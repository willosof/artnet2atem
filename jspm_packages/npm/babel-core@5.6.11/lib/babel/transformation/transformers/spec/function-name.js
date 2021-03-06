/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

var _helpersNameMethod = require("../../helpers/name-method");

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  group: "builtin-basic"
};

exports.metadata = metadata;
var visitor = {
  "ArrowFunctionExpression|FunctionExpression": {
    exit: _helpersNameMethod.bare
  }
};
exports.visitor = visitor;