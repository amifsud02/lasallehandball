/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['i.postimg.cc', 'thumbs2.imgbox.com'],
    formates: ['image/avif', 'image/webp', 'image/jpeg', 'image/png', 'image/svg'],
  },

  'fontawesome-svg-core': {
    'license': 'free'
  }
}

module.exports = nextConfig
