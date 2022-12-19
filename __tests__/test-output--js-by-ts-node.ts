// @ts-ignore
const path = require('path');

const jsVarToCssVar = require('../lib');

const CUR_DIR = path.resolve(__dirname);

console.log('CUR_DIR--JS-BY-TS-NODE', CUR_DIR);

jsVarToCssVar([
  {
    inputPath: `${CUR_DIR}/styles/style--js-by-ts-node-1.ts`,
    //
    outputCssPath: `${CUR_DIR}/_output--js-by-ts-node/style--css-1.css`,
    outputCssScopeTag: ':root',
    //
    outputLessPath: `${CUR_DIR}/_output--js-by-ts-node/style--less-1.less`,
    outputLessHeaderImport: `@import './variables.less';`,
    //
    outputTypePath: `${CUR_DIR}/_output--js-by-ts-node/style--type-1.ts`,
    outputTypeName: 'ITheme1',
  },
  {
    inputPath: `${CUR_DIR}/styles/style--js-by-ts-node-2.ts`,
    //
    outputCssPath: `${CUR_DIR}/_output--js-by-ts-node/style--css-2.css`,
    outputCssScopeTag: ':root',
    //
    outputLessPath: `${CUR_DIR}/_output--js-by-ts-node/style--less-2.less`,
    outputLessHeaderImport: `@import './variables.less';`,
    //
    outputTypePath: `${CUR_DIR}/_output--js-by-ts-node/style--type-2.ts`,
    outputTypeName: 'ITheme2',
  }
]);
