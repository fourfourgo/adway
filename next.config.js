/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nwllvhheepuafgifrtlu.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
