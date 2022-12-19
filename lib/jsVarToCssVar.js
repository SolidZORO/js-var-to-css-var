"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsVarToCssVar = void 0;
const path = require('path');
const genCss_1 = require("./genCss");
const genLess_1 = require("./genLess");
const genType_1 = require("./genType");
const jsVarToCssVar = (optsList) => {
    optsList === null || optsList === void 0 ? void 0 : optsList.forEach((opts) => {
        console.log(opts);
        let inputPath = undefined;
        if (opts === null || opts === void 0 ? void 0 : opts.inputPath)
            inputPath = opts.inputPath;
        if (!inputPath)
            throw new Error('Missing opts.inputPath!');
        console.log(inputPath);
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
                    isolatedModules: false,
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
            // ignore string, only process object, MAYBE string is a export const var
            if (typeof fileValues === 'object') {
                for (const [key, val] of Object.entries(fileValues)) {
                    jsKv[key] = val;
                }
            }
        }
        if (opts === null || opts === void 0 ? void 0 : opts.outputCssPath)
            (0, genCss_1.genCss)(jsKv, opts);
        if (opts === null || opts === void 0 ? void 0 : opts.outputLessPath)
            (0, genLess_1.genLess)(jsKv, opts);
        if (opts === null || opts === void 0 ? void 0 : opts.outputTypePath)
            (0, genType_1.genType)(jsKv, opts);
    });
};
exports.jsVarToCssVar = jsVarToCssVar;
