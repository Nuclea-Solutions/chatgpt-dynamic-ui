/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.pngkit.com'
			}
		]
	}
};

module.exports = nextConfig;
