import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
	],
	// base: '/job-assign/',
	resolve: {
		// 配置路径别名
		alias: {
			'@': '/src',
			'@assets': '/assets',
			'@utils': '/utils'
		},
	},
	server: {
		proxy: {
			'/api': {
				target: process.env.VITE_BACKEND_HOST + '/api',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ''),
				headers: {
					'Content-Type': 'application/json'
				}
			},
		},
	},
})
