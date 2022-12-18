"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsVarToCssVar = void 0;
const path = require('path');
const genCss_1 = require("./genCss");
const genLess_1 = require("./genLess");
const jsVarToCssVar = (opts) => {
    let inputPath = undefined;
    if (opts === null || opts === void 0 ? void 0 : opts.inputPath)
        inputPath = opts.inputPath;
    if (!inputPath)
        throw new Error('Missing opts.inputPath!');
    const fileExt = path.extname(inputPath);
    if (!fileExt)
        throw new Error('Missing fileExt!');
    const handleJsFile = (file) => {
        return require(file);
    };
    const handleTsFile = (file) => {
        require('ts-node').register({
            compilerOptions: {
                module: 'commonjs',
                target: 'es5',
                lib: ['esnext', 'dom'],
            },
        });
        return handleJsFile(file);
    };
    let inputFile;
    if (fileExt === '.js') {
        inputFile = handleJsFile(inputPath);
    }
    else if (fileExt === '.ts') {
        inputFile = handleTsFile(inputPath);
    }
    if (!inputFile)
        throw new Error('Missing inputFile!');
    // mege all const vars
    const jsKv = {};
    for (const [, fileValues] of Object.entries(inputFile)) {
        for (const [key, val] of Object.entries(fileValues)) {
            jsKv[key] = val;
        }
    }
    if (opts === null || opts === void 0 ? void 0 : opts.outputCssPath)
        (0, genCss_1.genCss)(jsKv, opts);
    if (opts === null || opts === void 0 ? void 0 : opts.outputLessPath)
        (0, genLess_1.genLess)(jsKv, opts);
};
exports.jsVarToCssVar = jsVarToCssVar;
