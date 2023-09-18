/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'standalone',
  images: {
    domains: ['via.placeholder.com', 'api.slingacademy.com'], // Add the domain here
  },
};

module.exports = nextConfig;
