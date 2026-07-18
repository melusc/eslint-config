import * as tsParser from '@typescript-eslint/parser';
import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';

import comments from './configs/comments.js';
import eslint from './configs/eslint.js';
import importConfig from './configs/import.js';
import n from './configs/n.js';
// eslint-disable-next-line node-test/no-import-test-files
import nodeTest from './configs/node-test.js';
import promise from './configs/promise.js';
import regexp from './configs/regexp.js';
import typescript from './configs/typescript.js';
import unicorn from './configs/unicorn.js';

const ignores = [
	'**/dist/',
	'**/.svelte-kit/',
	'**/build/',
	'**/.yarn/',
	'**/.git/',
	'**/node_modules/',
];

export function withOptions({typescriptGlobs}) {
	const options = defineConfig([
		globalIgnores(ignores, '@lusc/eslint-config global ignores'),
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
	]);

	return [
		...options,
		eslint,
		comments,
		promise,
		unicorn,
		n,
		importConfig,
		regexp,
		nodeTest,
		typescript(typescriptGlobs),
	].flat();
}

export default withOptions({
	typescriptGlobs: [],
});
