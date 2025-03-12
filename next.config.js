/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'png.pngtree.com',
        'upload.wikimedia.org',
        'via.placeholder.com',
        'user-images.githubusercontent.com'
      ], // List of allowed image domains
    },
  }
  
  module.exports = nextConfig;
  