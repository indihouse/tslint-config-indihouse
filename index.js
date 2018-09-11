module.exports = {
  rulesDirectory: './rules',
  extends: ['tslint-eslint-rules', 'tslint-consistent-codestyle'],
  rules: {
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never',
        esSpecCompliant: true
      }
    ],
    'no-magic-numbers': false
  }
};
