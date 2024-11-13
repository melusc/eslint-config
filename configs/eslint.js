import js from '@eslint/js';

export default [
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
		},
	},
];
