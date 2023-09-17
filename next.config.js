/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'standalone',
  images: {
    domains: ['via.placeholder.com'], // Add the domain here
  },
};

module.exports = nextConfig;
