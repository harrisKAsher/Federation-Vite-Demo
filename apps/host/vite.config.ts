import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		federation({
			name: 'host',
			filename: 'assets/remoteEntry.js',
			remotes: {
				core: {
					type: 'module',
					name: 'core',
					entry: 'http://localhost:3100/assets/remoteEntry.js',
					entryGlobalName: 'core',
					shareScope: 'default'
				},
				globalStore: {
					type: 'module',
					name: 'globalStore',
					entry: 'http://localhost:3110/assets/remoteEntry.js',
					entryGlobalName: 'globalStore',
					shareScope: 'default'
				}
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
				}
			}
		}),
		react(),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
});
