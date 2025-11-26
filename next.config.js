const withOffline = require('next-offline');

const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = withOffline(nextConfig);
