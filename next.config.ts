import type { NextConfig } from 'next'
import { hostname } from 'os'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    authInterrupts: true,
  },

  images: {
    remotePatterns: [
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'lh3.googleusercontent.com' },
    ],
  },
}

export default nextConfig
