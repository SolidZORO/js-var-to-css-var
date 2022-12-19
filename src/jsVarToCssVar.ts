const path = require('path');

import { IJsKv, IJsVarToCssVarOpts } from './types';
import { genCss } from './genCss';
import { genLess } from './genLess';
import { genType } from './genType';

export const jsVarToCssVar = (optsList?: IJsVarToCssVarOpts[]) => {
  optsList?.forEach((opts) => {
    console.log(opts);

    let inputPath = undefined;
    if (opts?.inputPath) inputPath = opts.inputPath;
    if (!inputPath) throw new Error('Missing opts.inputPath!');

    console.log(inputPath);

    const fileExt: '.ts' | '.js' = path.extname(inputPath);
    if (!fileExt) throw new Error('Missing fileExt!');

    const handleJsFile = (file: string) => {
      return require(file);
    };

    const handleTsFile = (file: string) => {
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
    } else if (fileExt === '.ts') {
      inputFile = handleTsFile(inputPath);
    }

    if (!inputFile) throw new Error('Missing inputFile!');

    // mege all const vars
    const jsKv: IJsKv = {};

    for (const [, fileValues] of Object.entries(inputFile)) {
      // ignore string, only process object, MAYBE string is a export const var
      if (typeof fileValues === 'object') {
        for (const [key, val] of Object.entries(fileValues as IJsKv)) {
          jsKv[key] = val;
        }
      }
    }

    if (opts?.outputCssPath) genCss(jsKv, opts);
    if (opts?.outputLessPath) genLess(jsKv, opts);
    if (opts?.outputTypePath) genType(jsKv, opts);
  })
};
