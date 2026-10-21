import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The Jakarta preschools article was consolidated into the
        // preschool directory; 308-redirect the old URL to keep SEO equity.
        source: "/en/articles/preschools-kindergartens-jakarta",
        destination: "/en/preschools/jakarta",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
