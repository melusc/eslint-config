import css from '@eslint/css';

const {rules, plugins} = css.configs.recommended;

export default [
	{
		files: ["**/*.css"],
		plugins,
		language: "css/css",
		rules: {
			...rules,
			'css/require-baseline': [
				'warn',
				{
					available: 'newly',
				},
			],
		}
	},
];
