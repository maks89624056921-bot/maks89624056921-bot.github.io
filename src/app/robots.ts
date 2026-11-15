import type { MetadataRoute } from "next";
import site from "./site.json";

// Required for the route to be emitted by the static export.
export const dynamic = "force-static";

function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || site.url;
  return url ? url.replace(/\/$/, "") : "";
}

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(base ? { sitemap: `${base}/sitemap.xml` } : {}),
  };
}
