module.exports = {
  'no-conditional-assignment': { severity: 'default' },
  'no-constant-condition': { severity: 'default' },
  'no-empty': { severity: 'default', options: ['allow-empty-catch'] },
  'no-empty-character-class': { severity: 'default' },
  'no-ex-assign': { severity: 'default' },
  'no-extra-boolean-cast': { severity: 'default' },
  'no-invalid-regexp': { severity: 'default' },
  'ter-no-irregular-whitespace': { severity: 'default' },
  'ter-no-sparse-arrays': { severity: 'default' },
  'no-unsafe-finally': { severity: 'default' },
  'use-isnan': { severity: 'default' },
  'valid-jsdoc': {
    severity: 'default',
    options: [
      {
        requireParamType: false,
        requireReturn: false,
        requireReturnType: false
      }
    ]
  },
  'valid-typeof': { severity: 'default' },
  'cyclomatic-complexity': { severity: 'default', options: [11] },
  'no-arg': { severity: 'default' },
  'no-eval': { severity: 'default' },
  'ter-no-script-url': { severity: 'default' },
  'no-shadowed-variable': { severity: 'default' },
  'no-use-before-declare': { severity: 'default' },
  'static-this': { severity: 'default' }
};
