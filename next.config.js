/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // trailingSlash: true,
    // reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
    eslint: {
        // ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
