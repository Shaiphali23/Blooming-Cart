/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.1800flowers.com",
        port: "",
        pathname: "/wcsstore/Flowers/images/catalog/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ["images.contentstack.io"],
  },
};

module.exports = nextConfig;
