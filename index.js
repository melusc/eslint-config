import js from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import nodePlugin from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const ignores = ['dist/**', '.svelte-kit/**', 'build/**'];

export default [
	{
		ignores,
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.nodeBuiltin,
			},
		},
	},
	js.configs.recommended,
	{
		rules: {
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: /^_/.source,
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: /^_/.source,
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: /^_$/.source,
				},
			],
		},
	},
	...tseslint.configs.strictTypeChecked.map(config => ({
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		...config,
	})),
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowNumber: true,
				},
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: /^_/.source,
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: /^_/.source,
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: /^_$/.source,
				},
			],
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksConditionals: true,
					// Useful for event handlers
					checksVoidReturn: false,
				},
			],
		},
	},
	comments.recommended,
	nodePlugin.configs['flat/recommended'],
	pluginPromise.configs['flat/recommended'],
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			'promise/prefer-await-to-then': 'error',
			'promise/always-return': 'off',
			'unicorn/no-null': 'off',
			// Math.min and max don't support bigint, so ternary is necessary there
			'unicorn/prefer-math-min-max': 'off',
			'n/no-missing-import': 'off',
			// Too many false positives
			'@typescript-eslint/unbound-method': 'off',
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true,
				},
			],
		},
	},
];
