const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	productionSourceMap: false,
	publicPath: '/spenxy-front/'
	// devServer: {
	// 	proxy: {
	// 		'^/api': {
	// 			target: 'https://api.demo.spenxy.com/',
	// 			ws: false,
	// 			changeOrigin: true
	// 		},
	// 	}
	// }
})
