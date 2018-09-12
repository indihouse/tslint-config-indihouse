module.exports = {
  'no-console': true,
  'no-control-regex': true,
  'no-debugger': true,
  'no-duplicate-case': true,
  'no-inner-declarations': [true, 'functions'],
  'no-regex-spaces': true,
  'switch-default': true,
  'triple-equals': true,
  forin: true,
  ban: [
    true,
    {
      severity: 'warning'
    }
  ],
  'no-switch-case-fall-through': true,
  'no-invalid-this': false,
  'label-position': true,
  'no-magic-numbers': false,
  'no-unused-expression': [true, 'allow-fast-null-checks'],
  'no-construct': true,
  'ter-no-proto': true,
  'no-duplicate-variable': true,
  'ter-no-self-compare': true,
  'no-string-throw': true,
  radix: true,
  'no-unused-variable': true,
  'handle-callback-err': false,
  'new-parens': true,
  'no-bitwise': [true, { severity: 'warning' }],
  'ordered-imports': [
    true,
    {
      'import-sources-order': 'case-insensitive',
      'grouped-imports': true,
      'named-imports-order': 'case-insensitive'
    }
  ],
  'no-var-keyword': true,
  'object-literal-shorthand': true,
  'ter-prefer-arrow-callback': [
    true,
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  'prefer-const': [
    true,
    {
      destructuring: 'any'
    }
  ],
  'early-exit': true,
  'no-angle-bracket-type-assertion': true,
  'no-accessor-recursion': true,
  'no-collapsible-if': true,
  'no-unnecessary-else': [true, 'allow-else-if'],
  'no-return-undefined': true,
  'no-unused': true,
  'no-var-before-return': true,
  'object-shorthand-properties-first': true,
  'prefer-const-enum': true,
  'prefer-while': true
};
