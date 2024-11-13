import eslintPluginImportX from 'eslint-plugin-import-x';

export default [
	eslintPluginImportX.flatConfigs.recommended,
	eslintPluginImportX.flatConfigs.typescript,
	{
		rules: {
			'import-x/no-useless-path-segments': 'error',
			'import-x/no-commonjs': 'error',
			'import-x/first': 'error',
			'import-x/newline-after-import': 'error',
			'import-x/order': [
				'error',
				{
					groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'import-x/no-named-as-default-member': 'off',
			'import-x/no-named-as-default': 'off',
			/* Typescript does these better */
			'import-x/no-unresolved': 'off',
			'import-x/default': 'off',
		},
	},
];
