export default {
	'**/*.{json,yaml,yml,md,js}': [
		'prettier --check',
		'cspell --no-progress --no-must-find-files',
	],
};
