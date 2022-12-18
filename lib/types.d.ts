export interface IJsKv {
    [key: string]: string | number;
}
export interface IJsVarToCssVarOpts {
    inputPath?: string;
    outputCssPath?: string;
    outputLessPath?: string;
    cssScopeTag?: string;
    lessHeaderImport?: string;
}
