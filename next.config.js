const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
});

const nextConfig = {
    // output: 'export', //URI ends with /, Append index.html page to URI
    // images: {
    //     unoptimized: true //when export
    // },
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = withPWA(nextConfig);
