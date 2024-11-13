import nodePlugin from 'eslint-plugin-n';

export default [
	nodePlugin.configs['flat/recommended'],
	{
		rules: {
			'n/no-missing-import': 'off',
			'n/prefer-global/buffer': ['error', 'never'],
			'n/prefer-global/process': ['error', 'never'],
			'n/prefer-node-protocol': 'error',
		},
	},
];
