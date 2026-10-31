import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'**/*.{json,yaml,yml,md,js}': ['prettier --check', 'cspell --no-progress --no-must-find-files'],
	},
});
