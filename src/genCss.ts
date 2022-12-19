const fs = require('fs');
const path = require('path');

import { IJsKv, IJsVarToCssVarOpts } from './types';
import { __CODE_GEN_COMMENT__ } from './const';

export const genCss = async (jsKv: IJsKv, opts?: IJsVarToCssVarOpts) => {
  if (!opts?.outputCssPath) throw new Error('Missing opts.outputCssPath!');
  if (!opts?.outputCssScopeTag) throw new Error('Missing opts.outputCssScopeTag!');

  let HEADER = `${__CODE_GEN_COMMENT__}\n${opts.outputCssScopeTag} {\n`;

  const FOOTER = `}\n`;
  let CONTENT = '';

  for (const k in jsKv) {
    if (!k) return;

    // filter less syntax
    const v = (jsKv[k] as string)?.replace('~', '');
    CONTENT += `  ${k}: ${v};\n`;
  }

  const RESULT = `${HEADER}${CONTENT}${FOOTER}`;

  await fs.mkdirSync(path.dirname(opts.outputCssPath), { recursive: true });
  await fs.writeFileSync(opts.outputCssPath, RESULT);
};
