/** @type {import('next').NextConfig} */
// GitHub project pages are served from https://<user>.github.io/<repo>/,
// so every asset URL needs that prefix. The deploy workflow passes the real
// base path ("" for <user>.github.io or a custom domain).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static HTML export: the build produces a plain `out/` folder that can be
  // hosted on GitHub Pages, Netlify, Cloudflare Pages or any static hosting.
  output: "export",
  // Next.js image optimization needs a server, so it is disabled for a static
  // export. Images are served as-is from /public.
  images: {
    unoptimized: true,
  },
  // Emit `about/index.html` instead of `about.html`, which is what most static
  // hosts (GitHub Pages included) expect.
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
