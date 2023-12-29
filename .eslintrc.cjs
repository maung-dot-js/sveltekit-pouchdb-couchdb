module.exports = {
	root: true,
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:security/recommended',
		'plugin:security-node/recommended',
		'plugin:sonarjs/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'security-node', 'sonarjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		// 'consistent-return': 'off',
		// 'no-underscore-dangle': 'off',
		// 'no-nested-ternary': 'off',
		// 'no-console': 'off',
		// 'import/prefer-default-export': 'off',
		// 'import/no-extraneous-dependencies': 'off',
		// 'no-return-await': 'off',
		// 'import/extensions': 'off',
		// 'no-useless-catch': 'off',
		// 'sonarjs/no-duplicate-string': 'off',
		// 'no-param-reassign': 0,
		// 'security-node/detect-crlf': 'off',
		// 'no-plusplus': [
		// 	'error',
		// 	{
		// 		allowForLoopAfterthoughts: true
		// 	}
		// ],
		// 'comma-dangle': ['error', 'always-multiline']
	}
};
