import js from '@eslint/js';
import {defineConfig} from 'eslint/config';

export default defineConfig([
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
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true,
				},
			],
			eqeqeq: ['error', 'always'],
		},
	},
]);
