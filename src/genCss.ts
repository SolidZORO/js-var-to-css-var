const fs = require('fs');
const path = require('path');

import { IJsKvObj, IJsVarToCssVarOpts } from './types';
import { __CODE_GEN_COMMENT__ } from './const';

export const genCss = async (jsKvObj: IJsKvObj, opts?: IJsVarToCssVarOpts) => {
  if (!opts?.outputCssPath) throw new Error('Missing opts.outputCssPath!');
  if (!opts?.outputCssScopeTag) throw new Error('Missing opts.outputCssScopeTag!');

  let HEADER = `${__CODE_GEN_COMMENT__}\n`;
  let SCOPE = `${opts.outputCssScopeTag} {\n`;

  let CONTENT = '';

  for (const k in jsKvObj?.jsKv) {
    if (!k) return;

    let v = jsKvObj.jsKv[k];

    // filter less syntax
    if (typeof v === 'string') v = v.replace('~', '');

    CONTENT += `  ${k}: ${v};\n`;
  }

  const CONTENT_CLOSE = `}\n`;
  let RESULT = `${HEADER}${SCOPE}${CONTENT}${CONTENT_CLOSE}`;

  // Dark
  if (jsKvObj.jsKvDark && Object.keys(jsKvObj.jsKvDark).length !== 0) {
    let CONTENT_DARK = '';
    let SCOPE_DARK = `${opts.outputCssDarkScopeTag} {\n`;

    for (const k in jsKvObj?.jsKvDark) {
      if (!k) return;

      let v = jsKvObj.jsKvDark[k];

      // filter less syntax
      if (typeof v === 'string') v = v.replace('~', '');

      CONTENT_DARK += `  ${k}: ${v};\n`;
    }

    RESULT += `\n${SCOPE_DARK}${CONTENT_DARK}${CONTENT_CLOSE}`;
  }

  await fs.mkdirSync(path.dirname(opts.outputCssPath), { recursive: true });
  await fs.writeFileSync(opts.outputCssPath, RESULT);
};
