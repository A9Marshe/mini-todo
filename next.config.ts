import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: {
      exclude:
        process.env.NODE_ENV === "production"
          ? ["error"]
          : ["error", "log", "warn"],
    },
  },
};

export default nextConfig;
