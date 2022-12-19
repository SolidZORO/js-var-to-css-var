const path = require('path');

const jsVarToCssVar = require('../lib');

const CUR_DIR = path.resolve(__dirname);

console.log('CUR_DIR--JS', CUR_DIR);

jsVarToCssVar([
  {
    inputPath: `${CUR_DIR}/styles/style--js-1.js`,
    //
    outputCssPath: `${CUR_DIR}/_output--js/style--css-1.css`,
    outputCssScopeTag: ':root',
    //
    outputLessPath: `${CUR_DIR}/_output--js/style--less-1.less`,
    outputLessHeaderImport: `@import './variables.less';`,
    //
    outputTypePath: `${CUR_DIR}/_output--js/style--type-1.ts`,
    outputTypeName: 'ITheme1',
  },
  {
    inputPath: `${CUR_DIR}/styles/style--js-2.js`,
    //
    outputCssPath: `${CUR_DIR}/_output--js/style--css-2.css`,
    outputCssScopeTag: ':root',
    //
    outputLessPath: `${CUR_DIR}/_output--js/style--less-2.less`,
    outputLessHeaderImport: `@import './variables.less';`,
    //
    outputTypePath: `${CUR_DIR}/_output--js/style--type-2.ts`,
    outputTypeName: 'ITheme2',
  }
]);
