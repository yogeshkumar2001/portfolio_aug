/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "images.unsplash.com",
            }, {
              protocol: "https",
              hostname: "cdn4.iconfinder.com",
            }, {
              protocol: "https",
              hostname: "cdn-icons-png.flaticon.com",
            }, {
              protocol: "https",
              hostname: "upload.wikimedia.org",
            },
          ],
      },
};

export default nextConfig;
