#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsVarToCssVar_1 = require("./jsVarToCssVar");
const isExecOnCLI = require.main === module;
if (isExecOnCLI)
    (0, jsVarToCssVar_1.jsVarToCssVar)(); // for CIL
exports.default = jsVarToCssVar_1.jsVarToCssVar;
module.exports = jsVarToCssVar_1.jsVarToCssVar;
