export interface IJsKv {
  [key: string]: string | number;
}

export interface IJsKvObj {
  jsKv: IJsKv,
  jsKvDark?: IJsKv,
}

export interface IJsVarToCssVarOpts {
  inputPath?: string; // `${CUR_DIR}/styles/style--js.js`
  //
  outputCssPath?: string; // `${CUR_DIR}/_output--js/theme.css`
  outputCssScopeTag?: string; // ':root'
  outputCssDarkScopeTag?: string; // ':root.dark'
  outputCssDarkVarSuffix?: string; // '--dark'
  //
  outputLessPath?: string; // `${CUR_DIR}/_output--js/theme.less`    // [Optional]
  outputLessHeaderImport?: string; // `@import './variables.less';`  // [Optional]
  //
  outputTypePath?: string; // `${CUR_DIR}/_output--js/theme.ts`      // [Optional]
  outputTypeName?: string; // 'ITheme',                              // [Optional]
  //
}

