import js from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import * as tsParser from '@typescript-eslint/parser';
import eslintPluginImportX from 'eslint-plugin-import-x';
import nodePlugin from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import {configs as tsConfigs} from 'typescript-eslint';

const ignores = ['dist/**', '.svelte-kit/**', 'build/**'];

export default [
	{
		ignores,
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.nodeBuiltin,
			},
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	js.configs.recommended,
	...tsConfigs.strictTypeChecked.map(config => ({
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		...config,
	})),
	comments.recommended,
	nodePlugin.configs['flat/recommended'],
	pluginPromise.configs['flat/recommended'],
	eslintPluginUnicorn.configs['flat/recommended'],
	eslintPluginImportX.flatConfigs.recommended,
	eslintPluginImportX.flatConfigs.typescript,
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
			'promise/prefer-await-to-then': 'error',
			'promise/always-return': 'off',
			'unicorn/no-null': 'off',
			// Math.min and max don't support bigint, so ternary is necessary there
			'unicorn/prefer-math-min-max': 'off',
			'n/no-missing-import': 'off',
			// Too many false positives
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true,
				},
			],
			'n/prefer-global/buffer': ['error', 'never'],
			'n/prefer-global/process': ['error', 'never'],
			'n/prefer-node-protocol': 'error',
			'import-x/no-useless-path-segments': 'error',
			'import-x/no-commonjs': 'error',
			'import-x/first': 'error',
			'import-x/newline-after-import': 'error',
			'import-x/order': [
				'error',
				{
					groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
					warnOnUnassignedImports: true,
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},
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
			'@typescript-eslint/unbound-method': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'no-unused-vars': 'off',
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
];
