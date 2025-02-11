/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "loctechsite-storage-f79d8bac111646-staging.s3.us-west-2.amazonaws.com",
      "loctech-app.s3.ca-central-1.amazonaws.com",
    ],
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  output: "export", // Enable static export mode
};

export default nextConfig;
