/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@components': path.resolve(__dirname, './src/components'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@handlers': path.resolve(__dirname, './src/handlers'),
			'@typings': path.resolve(__dirname, './src/typings.d.ts')
		}
	}
};
