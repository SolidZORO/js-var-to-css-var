// @ts-ignore
const path = require('path');

const jsVarToCssVar = require('../lib');

const CUR_DIR = path.resolve(__dirname);

console.log('CUR_DIR--TS', CUR_DIR);

jsVarToCssVar({
  inputPath: `${CUR_DIR}/styles/style--ts.ts`,
  outputCssPath: `${CUR_DIR}/_output--ts/theme.css`,
  outputLessPath: `${CUR_DIR}/_output--ts/theme.less`,
  //
  cssScopeTag: ':root',
  lessHeaderImport: `@import './variables.less';`,
});
