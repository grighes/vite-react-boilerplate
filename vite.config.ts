import { defineConfig, UserConfigExport } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
const config: UserConfigExport = defineConfig({
	plugins: [react()],
	server: {
		host: true,
		strictPort: true,
	},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		css: true,
	},
});

export default config;
