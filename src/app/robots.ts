import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://www.ksm1991.co.th";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
