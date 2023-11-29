/** @type {import('next').NextConfig} */

module.exports = {
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
	}
};;
