/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  rewrites: async () => {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
    ];
  },
  publicRuntimeConfig: {
    name: process.env.NAME,
    description: process.env.DESCRIPTION,
  },
}

module.exports = nextConfig
