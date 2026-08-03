import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.jbvexa.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://www.jbvexa.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://www.jbvexa.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://www.jbvexa.com/industries",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://www.jbvexa.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}