import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs.recommended,
	{
		rules: {
			'unicorn/no-null': 'off',
			'unicorn/no-useless-undefined': [
				'error',
				{
					checkArguments: false,
				},
			],
			'unicorn/no-top-level-assignment-in-function': 'off',
			'unicorn/consistent-boolean-name': 'off',
			'unicorn/comment-content': 'off',
		},
	},
];
