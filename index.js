import js from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import nodePlugin from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default [
	js.configs.recommended,
	...tseslint.configs.strictTypeChecked.map(config => ({
		files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
		...config,
	})),
	comments.recommended,
	nodePlugin.configs['flat/recommended'],
	pluginPromise.configs['flat/recommended'],
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		rules: {
			'promise/prefer-await-to-callbacks': 'error',
			'promise/prefer-await-to-then': 'error',
		},
	},
];
