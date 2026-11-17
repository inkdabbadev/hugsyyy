/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  devIndicators: false,
  experimental: { cpus: 2 },
};
export default config;
