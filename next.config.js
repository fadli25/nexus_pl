/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "img.icons8.com",
      "cryptologos.cc",
      "media.discordapp.net",
      "figma.com",
    ],
  },
};

module.exports = nextConfig;
