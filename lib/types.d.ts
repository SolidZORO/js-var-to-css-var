export interface IJsKv {
    [key: string]: string | number;
}
export interface IJsVarToCssVarOpts {
    inputPath?: string;
    outputCssPath?: string;
    outputCssScopeTag?: string;
    outputLessPath?: string;
    outputLessHeaderImport?: string;
    outputTypePath?: string;
    outputTypeName?: string;
}
