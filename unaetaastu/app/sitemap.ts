import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://una-et-aastu.org"

  // Main pages
  const routes = [
    "",
    "/about",
    "/about/mission",
    "/about/excellence",
    "/about/leadership",
    "/about/history",
    "/about/values",
    "/initiatives",
    "/initiatives/sdg-hackathon",
    "/initiatives/environmental-awareness",
    "/initiatives/human-rights-seminar",
    "/initiatives/internship-forum",
    "/initiatives/model-un",
    "/initiatives/mun",
    "/membership",
    "/membership/student",
    "/membership/active",
    "/membership/leadership",
    "/membership/benefits",
    "/membership/professional-educators",
    "/membership/apply",
    "/events",
    "/events/upcoming",
    "/events/past",
    "/events/calendar",
    "/events/gallery",
    "/events/register",
    "/partnerships",
    "/partnerships/student",
    "/partnerships/embassies",
    "/partnerships/government",
    "/partnerships/foundations",
    "/partnerships/un-agencies",
    "/partnerships/university",
    "/partnerships/benefits",
    "/partnerships/join",
    "/resources",
    "/resources/sdg",
    "/resources/model-un",
    "/resources/educational",
    "/resources/publications",
    "/resources/media",
    "/get-involved",
    "/news",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))
}
