module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'prettier'
	],
	plugins: ['@tanstack/query'],
	rules: {
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_+$' }],
		'@typescript-eslint/no-unused-expressions': [
			'warn',
			{
				allowShortCircuit: true
			}
		],
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/semi': ['warn', 'always'],
		'@typescript-eslint/type-annotation-spacing': 'warn',
		'arrow-parens': ['warn', 'as-needed'],
		'comma-dangle': ['warn', 'never'],
		'eol-last': 'warn',
		eqeqeq: ['warn', 'smart'],
		'no-multiple-empty-lines': 'warn',
		'no-redeclare': 'error',
		'no-var': 'error',
		'one-var': ['warn', 'never'],
		'prefer-const': [
			'warn',
			{
				destructuring: 'all'
			}
		],
		'quote-props': ['warn', 'as-needed'],
		radix: 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/no-danger': 'warn',
		'react/prop-types': 'off',
		'react/no-this-in-sfc': 'error',
		'react/no-unused-state': 'warn',
		'react/react-in-jsx-scope': 'off',
		'comma-spacing': ['warn', { before: false, after: true }],
		'key-spacing': ['warn', { afterColon: true }],
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/prefer-query-object-syntax': 'error'
	},
	globals: {
		React: 'writable'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		browser: true,
		node: true
	}
};
