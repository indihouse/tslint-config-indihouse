module.exports = {
  'trailing-comma': [true, { multiline: 'never', singleline: 'never' }],
  'no-extra-semi': true,
  'no-unexpected-multiline': true,
  curly: [true, 'ignore-same-line'],
  'no-multi-spaces': true,
  'array-bracket-spacing': [true, 'never'],
  'block-spacing': [true, 'always'],
  'brace-style': [true, '1tbs', { allowSingleLine: true }],
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-leading-underscore'
  ],
  eofline: true,
  'ter-func-call-spacing': [true, 'never'],
  'ter-indent': [
    true,
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
  ],
  'linebreak-style': [true, 'LF'],
  'ter-max-len': [
    true,
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
  ],
  'ter-newline-after-var': [true, 'always'],
  'ter-no-mixed-spaces-and-tabs': { type: 'spaces' },
  'no-consecutive-blank-lines': [true, 2],
  'no-trailing-whitespace': true,
  'object-curly-spacing': [true, 'always'],
  'one-variable-per-declaration': true,
  'ter-padded-blocks': [true, 'never'],
  'object-literal-key-quotes': [true, 'as-needed'],
  quotemark: [true, 'single', 'avoid-escape'],
  semicolon: [true, 'always'],
  'space-in-parens': [true, 'never'],
  'comment-format': [true, 'check-space'],
  'ter-no-tabs': true
};
