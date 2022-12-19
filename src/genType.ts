const fs = require('fs');
const path = require('path');

import { IJsKv, IJsVarToCssVarOpts } from './types';
import { __CODE_GEN_COMMENT__ } from './const';

export const genType = async (jsKv: IJsKv, opts?: IJsVarToCssVarOpts) => {
  if (!opts?.outputTypePath) throw new Error('Missing opts.outputTypePath!');
  if (!opts?.outputTypeName) throw new Error('Missing opts.outputTypeName!');

  let HEADER = `${__CODE_GEN_COMMENT__}\n`;

  const FOOTER = `\n`;
  let CONTENT = `export type ${opts.outputTypeName} =\n`;

  for (const k in jsKv) {
    if (!k) return;

    CONTENT += `  | '${k}'\n`;
  }

  const RESULT = `${HEADER}${CONTENT}${FOOTER}`;

  await fs.mkdirSync(path.dirname(opts.outputTypePath), { recursive: true });
  await fs.writeFileSync(opts.outputTypePath, RESULT);
};
