import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://petranusa.my.id";

  return [
    {
      url: base,
      priority: 1,
    },
    {
      url: `${base}/about`,
    },
    {
      url: `${base}/services`,
    },
    {
      url: `${base}/gallery`,
    },
    {
      url: `${base}/news`,
    },
    {
      url: `${base}/contact`,
    },
  ];
}
