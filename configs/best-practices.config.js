module.exports = {
  'no-console': { severity: 'default' },
  'no-control-regex': { severity: 'default' },
  'no-debugger': { severity: 'default' },
  'no-duplicate-case': { severity: 'default' },
  'no-inner-declarations': { severity: 'default', options: ['functions'] },
  'no-regex-spaces': { severity: 'default' },
  'switch-default': { severity: 'default' },
  'triple-equals': { severity: 'default' },
  forin: { severity: 'default' },
  ban: { severity: 'warning' },
  'no-switch-case-fall-through': { severity: 'default' },
  'no-invalid-this': { severity: 'off' },
  'label-position': { severity: 'default' },
  'no-magic-numbers': { severity: 'off' },
  'no-unused-expression': {
    severity: 'default',
    options: ['allow-fast-null-checks']
  },
  'no-construct': { severity: 'default' },
  'ter-no-proto': { severity: 'default' },
  'no-duplicate-variable': { severity: 'default' },
  'ter-no-self-compare': { severity: 'default' },
  'no-string-throw': { severity: 'default' },
  radix: { severity: 'default' },
  'no-unused-variable': { severity: 'default' },
  'handle-callback-err': { severity: 'off' },
  'new-parens': { severity: 'default' },
  'no-bitwise': { severity: 'warning' },
  'ordered-imports': {
    severity: 'default',
    options: [
      {
        'import-sources-order': 'case-insensitive',
        'grouped-imports': true,
        'named-imports-order': 'case-insensitive'
      }
    ]
  },
  'no-var-keyword': { severity: 'default' },
  'object-literal-shorthand': { severity: 'default' },
  'ter-prefer-arrow-callback': {
    severity: 'default',
    options: [
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ]
  },
  'prefer-const': { severity: 'default', options: [{ destructuring: 'any' }] },
  'early-exit': { severity: 'default' },
  'no-angle-bracket-type-assertion': { severity: 'default' },
  'no-accessor-recursion': { severity: 'default' },
  'no-collapsible-if': { severity: 'default' },
  'no-unnecessary-else': { severity: 'default', options: ['allow-else-if'] },
  'no-return-undefined': { severity: 'default' },
  'no-unused': { severity: 'default' },
  'no-var-before-return': { severity: 'default' },
  'object-shorthand-properties-first': { severity: 'default' },
  'prefer-const-enum': { severity: 'default' },
  'prefer-while': { severity: 'default' }
};
