const fs = require('fs');
const path = require('path');

import { IJsKvObj, IJsVarToCssVarOpts } from './types';
import { __CODE_GEN_COMMENT__ } from './const';

export const genLess = async (jsKvObj: IJsKvObj, opts?: IJsVarToCssVarOpts) => {
  if (!opts?.outputLessPath) throw new Error('Missing opts.outputLessPath!');

  let HEADER = `${__CODE_GEN_COMMENT__}\n\n`;

  if (opts?.outputLessHeaderImport) {
    HEADER = `${__CODE_GEN_COMMENT__}\n${opts?.outputLessHeaderImport}\n\n`;
  }

  // clone kv
  const jsKv = { ...jsKvObj.jsKv };

  // ignoreCssDarkVar
  if (opts?.outputLessIgnoreCssDarkVar) {
    for (const k in jsKvObj.jsKvDark) {
      if (k in jsKv) {
        delete jsKv[k]
      }
    }
  }

  let CONTENT = '';

  for (const k in jsKv) {
    if (k) {
      const v = jsKvObj.jsKv[k];
      CONTENT += `${k.replace('--', '@')}: ${v};\n`;
    }
  }

  const FOOTER = ``;
  const RESULT = `${HEADER}${CONTENT}${FOOTER}`;

  await fs.mkdirSync(path.dirname(opts.outputLessPath), { recursive: true });
  await fs.writeFileSync(opts.outputLessPath, RESULT);
};
