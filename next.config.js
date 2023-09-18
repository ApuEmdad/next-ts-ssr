/** @type {import('next').NextConfig} */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'standalone',
  images: {
    domains: ['via.placeholder.com', 'api.slingacademy.com'], // Add the domain here
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Minify CSS for client-side bundles only
      config.optimization.minimize = true;
      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
