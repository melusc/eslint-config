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
		},
	},
];
