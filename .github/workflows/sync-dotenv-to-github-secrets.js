/* eslint-disable max-len */
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const __ROOT_DIR__ = path.resolve(__dirname, '../../');

const DOTENV_FILE = `${__ROOT_DIR__}/.env`;
const DOTENV_CONTENT = fs.readFileSync(DOTENV_FILE, 'utf8');

let dotenvVariables = '';

//
//
//
// 01 sync `.env`
DOTENV_CONTENT.split('\n').forEach((line) => {
  if (!line || /^(#|\n\r\s)/.test(line)) return;
  const kv = line.split('=');

  const k = kv[0];
  const v = kv[1];

  if (!v) return; // filte empty value

  // e.g. gh secret set PORT -b "8080"
  const execStr = `gh secret set ${k} -b "${v}"`;

  exec(execStr, (err, stdout) => {
    if (err) console.log('⚠️ ERR', err);

    console.log(execStr);
  });

  // e.g. echo PORT=${{ secrets.PORT }} >> .env
  dotenvVariables += `echo ${k}=\${{ secrets.${k} }} >> .env\n`;
});

//
//
//
// 02 write `.env` to deploy.yml
const DEPLOY_FILE = `${__ROOT_DIR__}/.github/workflows/build-and-deploy.yml`;
const DEPLOY_CONTENT = fs.readFileSync(DEPLOY_FILE, 'utf8');

const REGEX_S = `echo "---- DOTENV-PLACEHOLDER-S ----"`;
const REGEX_E = 'echo "---- DOTENV-PLACEHOLDER-E ----"';

const REGEX = new RegExp(String.raw`${REGEX_S}[\s\S]*?${REGEX_E}`, 'ig');

const REPLACE_CONTENT = `${REGEX_S}\n${dotenvVariables}${REGEX_E}`
  .split('\n')
  .map((line) => {
    // skip 1st line
    if (line === REGEX_S) return line;

    return `${' '.padEnd(10)}${line}`;
  })
  .join('\n');

const NEXT_DEPLOY_CONTENT = DEPLOY_CONTENT.replace(REGEX, REPLACE_CONTENT);

fs.writeFileSync(DEPLOY_FILE, NEXT_DEPLOY_CONTENT, 'utf8');
