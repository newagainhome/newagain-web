import type { MetadataRoute } from "next";

import { servicesContent } from "@/lib/service-content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const services = Object.values(servicesContent);

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/sobre-nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...services.map((service) => ({
      url: `${siteConfig.url}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}