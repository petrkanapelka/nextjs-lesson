/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
                port: '',
                pathname: '/api/character/avatar/**',
            },
        ],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
