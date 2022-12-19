const { COLOR_RED } = require('./style--js-1');

const THEME_JS_COLOR = {
  '--color-red': COLOR_RED,
  '--color-blue': '#1f9cff',
  '--theme-light': `~'theme-light'`,
  '--theme-dark': `~'theme-dark'`,
};

const THEME_JS_FONT = {
  '--font-size-xs': '12px',
  '--font-size-md': '18px',
  '--font-size-lg': '24px',
};

module.exports = { THEME_JS_COLOR, THEME_JS_FONT };
