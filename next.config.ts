import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: 'standalone',
	pageExtensions: ['ts', 'tsx'],
	logging: {
		fetches: {
			fullUrl: true
		}
	},
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

export default nextConfig;
