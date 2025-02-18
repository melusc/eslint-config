import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs.recommended,
	{
		rules: {
			'unicorn/no-null': 'off',
			'unicorn/better-regex': [
				'error',
				{
					sortCharacterClasses: false,
				},
			],
			'unicorn/no-useless-undefined': [
				'error',
				{
					checkArguments: false,
				},
			],
		},
	},
];
