#!/usr/bin/env node
import { jsVarToCssVar } from './jsVarToCssVar';

const isExecOnCLI = require.main === module;

if (isExecOnCLI) jsVarToCssVar(); // for CIL

export default jsVarToCssVar;
module.exports = jsVarToCssVar;
