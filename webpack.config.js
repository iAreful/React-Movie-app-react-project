/** @format */
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = function (webpackEnv) {
	module.exports = {
		plugins: [
			new CompressionPlugin({
				algorithm: "gzip",
				test: /\.js$|\.css$|\.html$/,
				threshold: 10240,
				minRatio: 0.8,
			}),
		],
	};
};
