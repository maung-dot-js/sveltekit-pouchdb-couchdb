import { sveltekit } from '@sveltejs/kit/vite';
import ViteCompression from 'vite-plugin-compression';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), Unocss(), ViteCompression()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
