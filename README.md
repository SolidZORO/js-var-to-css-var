# js-var-to-css-var

Convert Js Var To CSS Var (Less Var)

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

## Installation

```sh
yarn add js-var-to-css-var
```


## Usage


### for Node Cil

```bash
N/A
```

### for Js


```js
const jsVarToCssVar = require('js-var-to-css-var');

jsVarToCssVar({
  inputPath: `${CUR_DIR}/styles/style--ts.ts`,
  outputCssPath: `${CUR_DIR}/_output--ts/theme.css`,
  outputLessPath: `${CUR_DIR}/_output--ts/theme.less`, // [Optional]
  //
  cssScopeTag: ':root',
  lessHeaderImport: `@import './variables.less';`, // [Optional]
});

```

## Result

Input

```js
export const THEME_JS_COLOR = {
  '--color-red': '#f99',
  '--color-blue': '#1f9cff',
};

export const THEME_JS_FONT = {
  '--font-size-xs': '12px',
  '--font-size-md': '18px',
  '--font-size-lg': '24px',
};
```

Output

```css
:root {
  --color-red: #f99;
  --color-blue: #1f9cff;
  --font-size-xs: 12px;
  --font-size-md: 18px;
  --font-size-lg: 24px;
}
```

```less
@import './variables.less';

@color-red: #f99;
@color-blue: #1f9cff;
@font-size-xs: 12px;
@font-size-md: 18px;
@font-size-lg: 24px;

```


## License

MIT © [Jason Feng][author-url]

<!-- badges -->

[author-url]: https://github.com/SolidZORO


[mit-img]: https://img.shields.io/npm/l/js-var-to-css-var.svg?style=flat&colorA=000000&colorB=000000

[mit-url]: ./LICENSE


[npm-img]: https://img.shields.io/npm/v/js-var-to-css-var?style=flat&colorA=000000&colorB=000000

[npm-url]: https://www.npmjs.com/package/js-var-to-css-var


[size-img]: https://img.shields.io/bundlephobia/minzip/js-var-to-css-var?label=bundle&style=flat&colorA=000000&colorB=000000

[size-url]: https://www.npmjs.com/package/js-var-to-css-var


[download-img]: https://img.shields.io/npm/dt/js-var-to-css-var.svg?style=flat&colorA=000000&colorB=000000

[download-url]: https://www.npmjs.com/package/js-var-to-css-var


[build-img]: https://github.com/SolidZORO/js-var-to-css-var/workflows/badge.svg

[build-url]: https://github.com/SolidZORO/js-var-to-css-var/actions
