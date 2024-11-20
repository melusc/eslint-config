import type {Linter} from 'eslint';
declare const config: readonly Linter.Config[];
export default config;

type Options = {
	typescriptGlobs: readonly string[],
}

export function withOptions(options: Options): readonly Linter.Config[];
