import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'd2ibq52z3bzi2i.cloudfront.net',
    ],
  },
};

export default withNextIntl(nextConfig);
