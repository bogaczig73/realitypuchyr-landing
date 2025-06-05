const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['tiny-slider-react'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2ibq52z3bzi2i.cloudfront.net',
      }
    ],
  },
};

module.exports = withNextIntl(nextConfig); 