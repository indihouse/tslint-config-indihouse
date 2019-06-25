module.exports = {
  'trailing-comma': {
    severity: 'default',
    options: [{ multiline: 'never', singleline: 'never' }]
  },
  'no-extra-semi': { severity: 'default' },
  'no-unexpected-multiline': { severity: 'default' },
  curly: { severity: 'default', options: ['ignore-same-line'] },
  'no-multi-spaces': { severity: 'default' },
  'array-bracket-spacing': { severity: 'default', options: ['never'] },
  'block-spacing': { severity: 'default', options: ['always'] },
  'brace-style': {
    severity: 'default',
    options: ['1tbs', { allowSingleLine: true }]
  },
  'variable-name': {
    severity: 'default',
    options: ['ban-keywords', 'check-format', 'allow-leading-underscore']
  },
  eofline: { severity: 'default' },
  'ter-func-call-spacing': { severity: 'default', options: ['never'] },
  'ter-indent': {
    severity: 'default',
    options: [
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 'first'
        },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ImportDeclaration: 'first',
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXAttribute',
          'JSXClosingElement',
          'JSXElement > *',
          'JSXElement',
          'JSXEmptyExpression',
          'JSXExpressionContainer',
          'JSXIdentifier',
          'JSXMemberExpression',
          'JSXNamespacedName',
          'JSXOpeningElement',
          'JSXSpreadAttribute',
          'JSXSpreadChild',
          'JSXText'
        ],
        ignoreComments: false
      }
    ]
  },
  'linebreak-style': { severity: 'default', options: ['LF'] },
  'ter-max-len': {
    severity: 'default',
    options: [
      100,
      2,
      {
        ignorePattern: false,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreImports: false
      }
    ]
  },
  'ter-newline-after-var': { severity: 'default', options: ['always'] },
  'ter-no-mixed-spaces-and-tabs': {
    severity: 'default',
    options: [{ type: 'spaces' }]
  },
  'no-consecutive-blank-lines': { severity: 'default', options: [2] },
  'no-trailing-whitespace': { severity: 'default' },
  'object-curly-spacing': { severity: 'default', options: ['always'] },
  'one-variable-per-declaration': { severity: 'default' },
  'ter-padded-blocks': { severity: 'default', options: ['never'] },
  'object-literal-key-quotes': { severity: 'default', options: ['as-needed'] },
  quotemark: { severity: 'default', options: ['single', 'avoid-escape'] },
  semicolon: { severity: 'default', options: ['always'] },
  'space-in-parens': { severity: 'default', options: ['never'] },
  'comment-format': { severity: 'default', options: ['check-space'] },
  'ter-no-tabs': { severity: 'default' }
};
