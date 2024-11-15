module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'prettier', 'plugin:prettier/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
	plugins: ['react-refresh', 'prettier'],
	parser: '@typescript-eslint/parser',
	rules: {
		'no-console': [
			'error',
			'info',
			{
				allow: ['error', 'info']
			}
		],
		'semi-spacing': 'error',
		'no-template-curly-in-string': 'error',
		curly: 'error',
		'default-case-last': 'error',
		'dot-location': ['error', 'property'],
		eqeqeq: 'error',
		'grouped-accessor-pairs': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-extra-bind': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-self-compare': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-useless-call': 'error',
		'no-useless-return': 'error',
		'prefer-regex-literals': 'error',
		'no-label-var': 'error',
		'prefer-const': 'error',
		'no-var': 'error',
		'arrow-parens': 'error',
		'arrow-spacing': 'error',
		'no-unreachable-loop': 'error',
		'array-callback-return': 'error',
		'no-constructor-return': 'error',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-extra-label': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal-escape': 'error',
		'no-script-url': 'error',
		'no-sequences': 'error',
		yoda: 'error',
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'eol-last': 'error',
		'function-call-argument-newline': ['error', 'consistent'],
		'key-spacing': 'error',
		'linebreak-style': 'error',
		'new-parens': 'error',
		'no-lonely-if': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'quote-props': 'off',
		'semi-style': 'error',
		'space-before-blocks': 'error',
		'space-in-parens': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-rename': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true
			}
		],
		'template-curly-spacing': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array'
			}
		],

		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: ['signature', ['field', 'get', 'set'], 'static-initialization', 'constructor', 'method']
			}
		],
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': 'error',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': 'error',
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'error',
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': 'error',
		indent: 'off',
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'error',
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': 'error',
		'@typescript-eslint/no-array-constructor': 'off',
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'no-duplicate-imports': 'off',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': [
			'error',
			{
				allow: ['constructors']
			}
		],
		'no-extra-parens': 'off',
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'error',
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'require-await': 'off',
		'@typescript-eslint/require-await': 'off',
		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'error',
		semi: 'off',
		'@typescript-eslint/semi': 'error',
		'space-before-function-paren': 'off',
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': [
			'error',
			{
				int32Hint: false
			}
		]
	}
};
