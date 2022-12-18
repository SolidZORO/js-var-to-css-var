// @ts-ignore
const path = require('path');

const jsVarToCssVar = require('../lib');

const CUR_DIR = path.resolve(__dirname);

console.log('CUR_DIR--JS-BY-TS-NODE', CUR_DIR);

jsVarToCssVar({
  inputPath: `${CUR_DIR}/styles/style--js-by-ts-node.ts`,
  outputCssPath: `${CUR_DIR}/_output--js-by-ts-node/theme.css`,
  outputLessPath: `${CUR_DIR}/_output--js-by-ts-node/theme.less`,
  //
  cssScopeTag: ':root',
  lessHeaderImport: `@import './variables.less';`,
});
