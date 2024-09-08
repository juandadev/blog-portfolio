/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-syntax-highlighter'],
  images: {
    domains: ['images.unsplash.com', 'media.licdn.com', 'scontent.fgdl10-1.fna.fbcdn.net', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
