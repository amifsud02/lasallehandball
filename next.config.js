/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig, 
  images: {
    domains: ['jcyieqmvxhldriyzfmdp.supabase.co'],
    formates: ['image/avif', 'image/webp', 'image/jpeg', 'image/png'],
  }
}