/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: { ignoreDuringBuilds: true },
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
