/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.js',
		coverage: {
			include: ['src/**/*'],
			exclude: [
				'src/stories/',
				'src/**/*.stories.*',
				'src/App.tsx',
				'src/ThemeToggle.tsx',
				'src/index.ts',
				'src/main.tsx',
			],
		},
	},
});
