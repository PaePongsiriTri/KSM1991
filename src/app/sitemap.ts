import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { blogs } from "@/lib/blogs";

export const dynamic = "force-static";

const SITE = "https://www.ksm1991.co.th";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/services/", "/projects/", "/blogs/", "/contact/"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${SITE}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: `${SITE}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogs.map((b) => ({
      url: `${SITE}/blogs/${b.slug}/`,
      lastModified: b.date ? new Date(b.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
