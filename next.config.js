
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'standalone',
  images: {
    domains: ['via.placeholder.com', 'api.slingacademy.com'], // Add the domain here
  },
  webpack: (
    config,
    server
  ) => {
    console.log('isDev:', server.dev)
    if (server.dev) {
      return config
    }
    else {
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');
      const TerserPlugin = require('terser-webpack-plugin');
      const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'static/style',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true
            }
          }
        },
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
      };
      config.plugins.push(new MiniCssExtractPlugin());
      config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css', linkType: 'text/css' }));
      config.module.rules.push({
        test: [/\.css$/i, /\.scss$/, /\.s[ac]ss$/i],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      });

      return config;
    }

  }
};

module.exports = nextConfig;
