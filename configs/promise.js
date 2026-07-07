import {defineConfig} from 'eslint/config';
import pluginPromise from 'eslint-plugin-promise';

export default defineConfig([
	pluginPromise.configs['flat/recommended'],
	{
		rules: {
			'promise/prefer-await-to-then': 'error',
			'promise/always-return': 'off',
		},
	},
]);
