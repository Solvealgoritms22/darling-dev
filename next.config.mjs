/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    // Enable additional modern formats for automatic WebP/AVIF delivery
    formats: ['image/avif', 'image/webp'],
    // Define device sizes for responsive srcset generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Define image sizes for fixed-size image optimization
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Increase cache TTL to 30 days (default is 60s in dev, 1 day in prod)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Allow SVGs to be processed through the Next.js image pipeline
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  transpilePackages: ['@once-ui-system/core'],
};

export default nextConfig;
