import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apexfreight.co.tz";

  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/tracking",
    "/contact",
    "/terms-of-use",
    "/privacy-policy",
    "/cookie-policy",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : route.startsWith("/terms-") || route.startsWith("/privacy-") || route.startsWith("/cookie-") || route.startsWith("/accessibility") ? "yearly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/terms-") || route.startsWith("/privacy-") || route.startsWith("/cookie-") || route.startsWith("/accessibility") ? 0.3 : 0.8,
  }));
}
