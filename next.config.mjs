/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dvd6ljcj7w3pj.cloudfront.net',
        port: '',
        // pathname: '/static/main_banner/**',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
