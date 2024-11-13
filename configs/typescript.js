import tsEslint from 'typescript-eslint';

export default [
	...tsEslint.configs.strictTypeChecked,
	{
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
].map(config => ({
	files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
	...config,
}));
