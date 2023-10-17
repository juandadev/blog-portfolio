/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-syntax-highlighter"],
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
