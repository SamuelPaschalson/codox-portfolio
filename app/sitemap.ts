import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Main pages with enhanced SEO properties
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/skills`,
        },
      },
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/experience`,
        },
      },
    },
    {
      url: `${baseUrl}/contributions`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/contributions`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/resume`,
        },
      },
    },
  ];

  return routes;
}
