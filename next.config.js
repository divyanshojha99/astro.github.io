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


  /** @type {import('next').NextConfig} */
const nextConfigg = {
  output: 'export', // enables static export
  basePath: '/<repo-name>', // GitHub repo name (important for routing)
  images: {
    unoptimized: true, // if using next/image
  },
};

module.exports = nextConfigg;

  