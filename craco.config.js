/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@routes': path.resolve(__dirname, './src/routes/index'),
			'@components': path.resolve(__dirname, './src/components'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@utils': path.resolve(__dirname, './src/utils')
		}
	}
};
