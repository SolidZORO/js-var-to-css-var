// @ts-ignore
const path = require('path');

const jsVarToCssVar = require('../lib');

const CUR_DIR = path.resolve(__dirname);

console.log('CUR_DIR--TS', CUR_DIR);

jsVarToCssVar([
  // {
  //   inputPath: `${CUR_DIR}/styles/style--ts-1.ts`,
  //   //
  //   outputCssPath: `${CUR_DIR}/_output--ts/style--css-1.css`,
  //   outputCssScopeTag: ':root',
  //   // outputCssDarkScopeTag: ':root.dark',
  //   //
  //   outputLessPath: `${CUR_DIR}/_output--ts/theme--less-1.less`,
  //   outputLessHeaderImport: `@import './variables.less';`,
  //   //
  //   outputTypePath: `${CUR_DIR}/_output--ts/style--type-1.ts`,
  //   outputTypeName: 'ITheme1',
  // },
  {
    inputPath: `${CUR_DIR}/styles/style--ts-2.ts`,
    //
    outputCssPath: `${CUR_DIR}/_output--ts/style--css-2.css`,
    outputCssScopeTag: ':root',
    outputCssDarkScopeTag: ':root.dark',
    outputCssDarkVarSuffix: '--dark',
    //
    outputLessPath: `${CUR_DIR}/_output--ts/theme--less-2.less`,
    outputLessHeaderImport: `@import './variables.less';`,
    //
    outputTypePath: `${CUR_DIR}/_output--ts/style--type-2.ts`,
    outputTypeName: 'ITheme2',
  }
]);
