/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jcyieqmvxhldriyzfmdp.supabase.co'],
    formates: ['image/avif', 'image/webp', 'image/jpeg', 'image/png', 'image/svg'],
  }
}

module.exports = nextConfig
