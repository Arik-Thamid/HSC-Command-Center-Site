/** @type {import('next').NextConfig} */
const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      { source: "/img/:path*", headers: immutable },
      { source: "/media/:path*", headers: immutable },
      { source: "/icons/:path*", headers: immutable },
    ];
  },
};

export default nextConfig;
