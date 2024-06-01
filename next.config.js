const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
});

const nextConfig = {
    // output: 'export',   //URI ends with /, Append index.html page to URI
    // trailingSlash: true,
    // skipTrailingSlashRedirect: true,
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = withPWA(nextConfig);
