# tslint-config-indihouse

Indihouse's base TSLint config. Extends [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) and [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle).

- [tslint-config-indihouse](#tslint-config-indihouse)
  - [Usage](#Usage)
  - [Rules list](#Rules-list)
    - [ES6](#ES6)
    - [Code smell](#Code-smell)
    - [Code style](#Code-style)
    - [Best practices](#Best-practices)

## Usage

```
yarn add --dev tslint-config-indihouse
```

Add this to tslint config (e.g. in `tslint.json` file)

```json
{
  "extends": "tslint-config-indihouse"
}
```

## Rules list

Default severity : `error`

### ES6

In [es6.config.js](configs/es6.config.js)

<!-- rule configs/es6.config.js -->

**[ter-arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)**

```json
{
  "severity": "default",
  "options": [
    "as-needed",
    {
      "requireReturnForObjectLiteral": false
    }
  ]
}
```

**[ter-arrow-parens](https://eslint.org/docs/rules/arrow-parens)**

```json
{
  "severity": "default",
  "options": [
    "as-needed",
    {
      "requireForBlockBody": true
    }
  ]
}
```

**[ter-arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)**

```json
{
  "severity": "default",
  "options": [
    {
      "before": true,
      "after": true
    }
  ]
}
```

<!-- endrule -->

### Code smell

In [code-smell.config.js](configs/code-smell.config.js)

<!-- rule configs/code-smell.config.js -->

**[cyclomatic-complexity](https://palantir.github.io/tslint/rules/cyclomatic-complexity/)**

```json
{
  "severity": "default",
  "options": [11]
}
```

**[no-arg](https://palantir.github.io/tslint/rules/no-arg/)**

```json
{
  "severity": "default"
}
```

**[no-conditional-assignment](https://palantir.github.io/tslint/rules/no-conditional-assignment/)**

```json
{
  "severity": "default"
}
```

**[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)**

```json
{
  "severity": "default"
}
```

**[no-empty](https://palantir.github.io/tslint/rules/no-empty/)**

```json
{
  "severity": "default",
  "options": ["allow-empty-catch"]
}
```

**[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)**

```json
{
  "severity": "default"
}
```

**[no-eval](https://palantir.github.io/tslint/rules/no-eval/)**

```json
{
  "severity": "default"
}
```

**[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)**

```json
{
  "severity": "default"
}
```

**[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)**

```json
{
  "severity": "default"
}
```

**[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)**

```json
{
  "severity": "default"
}
```

**[no-shadowed-variable](https://palantir.github.io/tslint/rules/no-shadowed-variable/)**

```json
{
  "severity": "default"
}
```

**[no-unsafe-finally](https://palantir.github.io/tslint/rules/no-unsafe-finally/)**

```json
{
  "severity": "default"
}
```

**[no-use-before-declare](https://palantir.github.io/tslint/rules/no-use-before-declare/)**

```json
{
  "severity": "default"
}
```

**[static-this](https://palantir.github.io/tslint/rules/static-this/)**

```json
{
  "severity": "default"
}
```

**[ter-no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)**

```json
{
  "severity": "default"
}
```

**[ter-no-script-url](https://eslint.org/docs/rules/no-script-url)**

```json
{
  "severity": "default"
}
```

**[ter-no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)**

```json
{
  "severity": "default"
}
```

**[use-isnan](https://palantir.github.io/tslint/rules/use-isnan/)**

```json
{
  "severity": "default"
}
```

**[valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)**

```json
{
  "severity": "default",
  "options": [
    {
      "requireParamType": false,
      "requireReturn": false,
      "requireReturnType": false
    }
  ]
}
```

**[valid-typeof](https://eslint.org/docs/rules/valid-typeof)**

```json
{
  "severity": "default"
}
```

<!-- endrule -->

### Code style

In [code-style.config.js](configs/code-style.config.js)

<!-- rule configs/code-style.config.js -->

**[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[block-spacing](https://eslint.org/docs/rules/block-spacing)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[brace-style](https://eslint.org/docs/rules/brace-style)**

```json
{
  "severity": "default",
  "options": [
    "1tbs",
    {
      "allowSingleLine": true
    }
  ]
}
```

**[comment-format](https://palantir.github.io/tslint/rules/comment-format/)**

```json
{
  "severity": "default",
  "options": ["check-space"]
}
```

**[curly](https://palantir.github.io/tslint/rules/curly/)**

```json
{
  "severity": "default",
  "options": ["ignore-same-line"]
}
```

**[eofline](https://palantir.github.io/tslint/rules/eofline/)**

```json
{
  "severity": "default"
}
```

**[linebreak-style](https://palantir.github.io/tslint/rules/linebreak-style/)**

```json
{
  "severity": "default",
  "options": ["LF"]
}
```

**[no-consecutive-blank-lines](https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/)**

```json
{
  "severity": "default",
  "options": [2]
}
```

**[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)**

```json
{
  "severity": "default"
}
```

**[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)**

```json
{
  "severity": "default"
}
```

**[no-trailing-whitespace](https://palantir.github.io/tslint/rules/no-trailing-whitespace/)**

```json
{
  "severity": "default"
}
```

**[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)**

```json
{
  "severity": "default"
}
```

**[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[object-literal-key-quotes](https://palantir.github.io/tslint/rules/object-literal-key-quotes/)**

```json
{
  "severity": "default",
  "options": ["as-needed"]
}
```

**[one-variable-per-declaration](https://palantir.github.io/tslint/rules/one-variable-per-declaration/)**

```json
{
  "severity": "default"
}
```

**[quotemark](https://palantir.github.io/tslint/rules/quotemark/)**

```json
{
  "severity": "default",
  "options": ["single", "avoid-escape"]
}
```

**[semicolon](https://palantir.github.io/tslint/rules/semicolon/)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[space-in-parens](https://eslint.org/docs/rules/space-in-parens)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[ter-func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[ter-indent](https://eslint.org/docs/rules/indent)**

```json
{
  "severity": "default",
  "options": [
    2,
    {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "CallExpression": {
        "arguments": "first"
      },
      "ArrayExpression": "first",
      "ObjectExpression": "first",
      "ImportDeclaration": "first",
      "flatTernaryExpressions": false,
      "ignoredNodes": [
        "JSXAttribute",
        "JSXClosingElement",
        "JSXElement > *",
        "JSXElement",
        "JSXEmptyExpression",
        "JSXExpressionContainer",
        "JSXIdentifier",
        "JSXMemberExpression",
        "JSXNamespacedName",
        "JSXOpeningElement",
        "JSXSpreadAttribute",
        "JSXSpreadChild",
        "JSXText"
      ],
      "ignoreComments": false
    }
  ]
}
```

**[ter-max-len](https://eslint.org/docs/rules/max-len)**

```json
{
  "severity": "default",
  "options": [
    100,
    2,
    {
      "ignorePattern": false,
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreImports": false
    }
  ]
}
```

**[ter-newline-after-var](https://eslint.org/docs/rules/newline-after-var)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[ter-no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)**

```json
{
  "severity": "default",
  "options": [
    {
      "type": "spaces"
    }
  ]
}
```

**[ter-no-tabs](https://eslint.org/docs/rules/no-tabs)**

```json
{
  "severity": "default"
}
```

**[ter-padded-blocks](https://eslint.org/docs/rules/padded-blocks)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[trailing-comma](https://palantir.github.io/tslint/rules/trailing-comma/)**

```json
{
  "severity": "default",
  "options": [
    {
      "multiline": "never",
      "singleline": "never"
    }
  ]
}
```

**[variable-name](https://palantir.github.io/tslint/rules/variable-name/)**

```json
{
  "severity": "default",
  "options": ["ban-keywords", "check-format", "allow-leading-underscore"]
}
```

<!-- endrule -->

### Best practices

In [best-practices.config.js](configs/best-practices.config.js)

<!-- rule configs/code-style.config.js -->

**[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[block-spacing](https://eslint.org/docs/rules/block-spacing)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[brace-style](https://eslint.org/docs/rules/brace-style)**

```json
{
  "severity": "default",
  "options": [
    "1tbs",
    {
      "allowSingleLine": true
    }
  ]
}
```

**[comment-format](https://palantir.github.io/tslint/rules/comment-format/)**

```json
{
  "severity": "default",
  "options": ["check-space"]
}
```

**[curly](https://palantir.github.io/tslint/rules/curly/)**

```json
{
  "severity": "default",
  "options": ["ignore-same-line"]
}
```

**[eofline](https://palantir.github.io/tslint/rules/eofline/)**

```json
{
  "severity": "default"
}
```

**[linebreak-style](https://palantir.github.io/tslint/rules/linebreak-style/)**

```json
{
  "severity": "default",
  "options": ["LF"]
}
```

**[no-consecutive-blank-lines](https://palantir.github.io/tslint/rules/no-consecutive-blank-lines/)**

```json
{
  "severity": "default",
  "options": [2]
}
```

**[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)**

```json
{
  "severity": "default"
}
```

**[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)**

```json
{
  "severity": "default"
}
```

**[no-trailing-whitespace](https://palantir.github.io/tslint/rules/no-trailing-whitespace/)**

```json
{
  "severity": "default"
}
```

**[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)**

```json
{
  "severity": "default"
}
```

**[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[object-literal-key-quotes](https://palantir.github.io/tslint/rules/object-literal-key-quotes/)**

```json
{
  "severity": "default",
  "options": ["as-needed"]
}
```

**[one-variable-per-declaration](https://palantir.github.io/tslint/rules/one-variable-per-declaration/)**

```json
{
  "severity": "default"
}
```

**[quotemark](https://palantir.github.io/tslint/rules/quotemark/)**

```json
{
  "severity": "default",
  "options": ["single", "avoid-escape"]
}
```

**[semicolon](https://palantir.github.io/tslint/rules/semicolon/)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[space-in-parens](https://eslint.org/docs/rules/space-in-parens)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[ter-func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[ter-indent](https://eslint.org/docs/rules/indent)**

```json
{
  "severity": "default",
  "options": [
    2,
    {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "CallExpression": {
        "arguments": "first"
      },
      "ArrayExpression": "first",
      "ObjectExpression": "first",
      "ImportDeclaration": "first",
      "flatTernaryExpressions": false,
      "ignoredNodes": [
        "JSXAttribute",
        "JSXClosingElement",
        "JSXElement > *",
        "JSXElement",
        "JSXEmptyExpression",
        "JSXExpressionContainer",
        "JSXIdentifier",
        "JSXMemberExpression",
        "JSXNamespacedName",
        "JSXOpeningElement",
        "JSXSpreadAttribute",
        "JSXSpreadChild",
        "JSXText"
      ],
      "ignoreComments": false
    }
  ]
}
```

**[ter-max-len](https://eslint.org/docs/rules/max-len)**

```json
{
  "severity": "default",
  "options": [
    100,
    2,
    {
      "ignorePattern": false,
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreImports": false
    }
  ]
}
```

**[ter-newline-after-var](https://eslint.org/docs/rules/newline-after-var)**

```json
{
  "severity": "default",
  "options": ["always"]
}
```

**[ter-no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)**

```json
{
  "severity": "default",
  "options": [
    {
      "type": "spaces"
    }
  ]
}
```

**[ter-no-tabs](https://eslint.org/docs/rules/no-tabs)**

```json
{
  "severity": "default"
}
```

**[ter-padded-blocks](https://eslint.org/docs/rules/padded-blocks)**

```json
{
  "severity": "default",
  "options": ["never"]
}
```

**[trailing-comma](https://palantir.github.io/tslint/rules/trailing-comma/)**

```json
{
  "severity": "default",
  "options": [
    {
      "multiline": "never",
      "singleline": "never"
    }
  ]
}
```

**[variable-name](https://palantir.github.io/tslint/rules/variable-name/)**

```json
{
  "severity": "default",
  "options": ["ban-keywords", "check-format", "allow-leading-underscore"]
}
```

<!-- endrule -->
