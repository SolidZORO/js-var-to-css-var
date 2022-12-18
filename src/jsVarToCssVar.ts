const path = require('path');

import { IJsKv, IJsVarToCssVarOpts } from './types';
import { genCss } from './genCss';
import { genLess } from './genLess';

export const jsVarToCssVar = (opts?: IJsVarToCssVarOpts) => {
  let inputPath = undefined;
  if (opts?.inputPath) inputPath = opts.inputPath;
  if (!inputPath) throw new Error('Missing opts.inputPath!');

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
    for (const [key, val] of Object.entries(fileValues as IJsKv)) {
      jsKv[key] = val;
    }
  }

  if (opts?.outputCssPath) genCss(jsKv, opts);
  if (opts?.outputLessPath) genLess(jsKv, opts);
};
