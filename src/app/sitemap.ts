import type { MetadataRoute } from "next";
import site from "./site.json";

// Required for the route to be emitted by the static export.
export const dynamic = "force-static";

function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || site.url;
  return url ? url.replace(/\/$/, "") : "";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  // Without a known public URL the sitemap would contain relative links that
  // search engines reject, so emit nothing until the site is published.
  if (!base) {
    return [];
  }

  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/privacy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
