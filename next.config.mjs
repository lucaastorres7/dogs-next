/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dogsapi.origami.dev",
      },
    ],
  },
};

export default nextConfig;
