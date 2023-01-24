/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.postimg.cc', 'thumbs2.imgbox.com'],
    formats: ["image/avif"],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI
  }
}

module.exports = nextConfig
