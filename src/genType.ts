const fs = require('fs');
const path = require('path');

import { IJsKvObj, IJsVarToCssVarOpts } from './types';
import { __CODE_GEN_COMMENT__ } from './const';

export const genType = async (jsKvObj: IJsKvObj, opts?: IJsVarToCssVarOpts) => {
  if (!opts?.outputTypePath) throw new Error('Missing opts.outputTypePath!');
  if (!opts?.outputTypeName) throw new Error('Missing opts.outputTypeName!');

  let HEADER = `${__CODE_GEN_COMMENT__}\n`;

  let CONTENT = `export type ${opts.outputTypeName} =\n`;

  // clone kv
  const jsKv = { ...jsKvObj.jsKv };

  // ignoreCssDarkVar
  if (opts?.outputTypeIgnoreCssDarkVar) {
    for (const k in jsKvObj.jsKvDark) {
      if (k in jsKv) {
        delete jsKv[k]
      }
    }
  }

  for (const k in jsKv) {
    if (k) {
      CONTENT += `  | '${k}'\n`;
    }
  }

  const FOOTER = `\n`;
  const RESULT = `${HEADER}${CONTENT}${FOOTER}`;

  await fs.mkdirSync(path.dirname(opts.outputTypePath), { recursive: true });
  await fs.writeFileSync(opts.outputTypePath, RESULT);
};
