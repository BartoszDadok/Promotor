/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      styledComponents: true
    },
    images: {
        unoptimized: true,
    },
    // assetPrefix is used for correct paths during next export
    // assetPrefix: ".",
    
    
};

module.exports = nextConfig;