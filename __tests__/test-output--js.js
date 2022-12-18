const path = require('path');

const jsVarToCssVar = require('../lib');

const CUR_DIR = path.resolve(__dirname);

console.log('CUR_DIR--JS', CUR_DIR);

jsVarToCssVar({
  inputPath: `${CUR_DIR}/styles/style--js.js`,
  outputCssPath: `${CUR_DIR}/_output--js/theme.css`,
  outputLessPath: `${CUR_DIR}/_output--js/theme.less`,
  //
  cssScopeTag: ':root',
  lessHeaderImport: `@import './variables.less';`,
});
