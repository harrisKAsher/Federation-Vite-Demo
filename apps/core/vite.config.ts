import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		federation({
			name: 'core',
			// filename: 'assets/remoteEntry.js',
			manifest: {
				fileName: 'mf-manifest.json'
			},
			remotes: {
				globalStore: 'globalStore@http://localhost:3110/mf-manifest.json'
				// globalStore: {
				// 	type: 'module',
				// 	name: 'globalStore',
				// 	entry: 'http://localhost:3110/assets/remoteEntry.js',
				// 	entryGlobalName: 'globalStore',
				// 	shareScope: 'default'
				// }
			},
			exposes: {
				'./App': './src/App.tsx'
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
