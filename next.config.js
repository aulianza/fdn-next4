module.exports = {
	webpack(config, { dev }) {
		config.devServer = config.devServer || {};
		config.devServer = {
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		};
		return config;
	},
};
