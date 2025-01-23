import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			'unicorn/no-null': 'off',
			// Math.min and max don't support bigint, so ternary is necessary there
			'unicorn/prefer-math-min-max': 'off',
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
