/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "a0.muscache.com",
          protocol: "https",
        },
        {
          hostname: "grthgtsscarlbixrgyzm.supabase.co",
          protocol: "https",
        },
      ],
    },
  };
  
  export default nextConfig;
  