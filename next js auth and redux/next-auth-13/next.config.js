/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI:
      'mongodb+srv://root:1234@demo.opycalj.mongodb.net/nextAuth?retryWrites=true&w=majority',
    authSec: 'CodingWithNaeem',
  },
};

module.exports = nextConfig;
