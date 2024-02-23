/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.pngkit.com'
			}
		]
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	webpack(config) {
		/* eslint-disable */
		config.experiments = { ...config.experiments, topLevelAwait: true }
		return config
	}
};

module.exports = nextConfig;
