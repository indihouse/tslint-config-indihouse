const fs = require('fs');
const os = require('os');
const util = require('util');
const got = require('got');

const PALENTIR_RULES_BASE_URL = 'https://palantir.github.io/tslint/rules/';
const ESLINT_RULES_BASE_URL = 'https://eslint.org/docs/rules/';
const ESLINT_RULE_PREFIX = 'ter-';

String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

const checkUrlExists = async uri => {
  try {
    await got.head(uri);
    return true;
  } catch (err) {
    return false;
  }
};

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

const START_MARKER = '<!-- rule';
const END_MARKER = '<!-- endrule -->';
const FILE_MARKER = '-->';

const readReadme = async () => readAsync('README.md', 'utf8');
const writeReadme = async content => writeAsync('README.md', content);

const findPlaceHolder = async str => {
  const res = [];

  let index = 0;
  while ((index = str.indexOf(START_MARKER, index)) > -1) {
    let start = index + START_MARKER.length;
    const afterFile = str.indexOf(FILE_MARKER, start);
    const file = str.substring(start, afterFile).trim();
    start = afterFile + FILE_MARKER.length;

    const endIndex = str.indexOf(END_MARKER, index);
    res.push({ file, start, end: endIndex });
    index = endIndex;
  }

  return res;
};

const findUrl = async rule => {
  if (rule.startsWith(ESLINT_RULE_PREFIX))
    return ESLINT_RULES_BASE_URL + rule.substring(ESLINT_RULE_PREFIX.length);

  const palentirUrl = `${PALENTIR_RULES_BASE_URL + rule}/`;
  if (await checkUrlExists(palentirUrl)) return palentirUrl;

  const eslintUrl = ESLINT_RULES_BASE_URL + rule;
  if (await checkUrlExists(eslintUrl)) return eslintUrl;
};

const replace = async desc => {
  const rules = require(`../${desc.file}`);
  const contents = Object.keys(rules)
    .sort()
    .map(async k => {
      const url = await findUrl(k);
      return `**[${k}](${url})**    ${os.EOL}\`\`\`json${
        os.EOL
      }${JSON.stringify(rules[k], null, 2)}${os.EOL}\`\`\`    ${os.EOL}`;
    });

  desc.content = os.EOL + (await Promise.all(contents)).join(os.EOL);
  return desc;
};

const main = async () => {
  const readme = await readReadme();
  const ph = await findPlaceHolder(readme);
  const replaces = await Promise.all(ph.map(async p => replace(p)));

  let newReadme = '';
  let start = 0;
  let current;
  while ((current = replaces.shift())) {
    newReadme += readme.slice(start, current.start) + current.content;
    start = current.end;
  }

  newReadme += readme.slice(start);

  return writeReadme(newReadme);
};

main()
  .then(console.log)
  .catch(console.error);
