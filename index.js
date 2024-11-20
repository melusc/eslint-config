import * as tsParser from '@typescript-eslint/parser';
import globals from 'globals';

import comments from './configs/comments.js';
import eslint from './configs/eslint.js';
import importConfig from './configs/import.js';
import n from './configs/n.js';
import promise from './configs/promise.js';
import regexp from './configs/regexp.js';
import typescript from './configs/typescript.js';
import unicorn from './configs/unicorn.js';

const ignores = ['**/dist/', '**/.svelte-kit/', '**/build/'];

export function withOptions({
	typescriptGlobs, 
}) {
	return [
		{
			ignores,
		},
		{
			languageOptions: {
				globals: {
					...globals.browser,
					...globals.nodeBuiltin,
				},
				parser: tsParser,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		eslint,
		comments,
		promise,
		unicorn,
		n,
		importConfig,
		regexp,
		typescript(typescriptGlobs),
	].flat()
}

export default withOptions({
	typescriptGlobs: [],
});
