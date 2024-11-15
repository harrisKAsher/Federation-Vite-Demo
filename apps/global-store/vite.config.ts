import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		federation({
			name: 'globalStore',
			filename: 'assets/remoteEntry.js',
			manifest: {
				fileName: 'mf-manifest.json'
			},
			exposes: {
				'./Store': './src/store.tsx'
			},
			shared: {
				react: {
					singleton: true
				},
				'react-dom': {
					singleton: true
				},
				'react-refresh': {
					singleton: true
				},
				'react-router-dom': {
					singleton: true
				},
			}
		}),
		react()
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
});
