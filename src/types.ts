export interface IJsKv {
  [key: string]: string | number;
}

export interface IJsVarToCssVarOpts {
  inputPath?: string; // `${CUR_DIR}/variables.ts`,
  outputCssPath?: string; // `${CUR_DIR}/variables.css`,
  outputLessPath?: string; // `${CUR_DIR}/variables.less`,
  //
  cssScopeTag?: string; // ':root',
  lessHeaderImport?: string; // '@import './variables.less';',
}

