const fs = require('fs');
const path = require('path');

const isConfigFile = file => file.endsWith('.config.js');

module.exports = fs
  .readdirSync(__dirname)
  .filter(isConfigFile)
  .reduce(
    /* eslint-disable-next-line global-require,import/no-dynamic-require */
    (memo, file) => Object.assign(memo, require(path.join(__dirname, file))),
    {}
  );
