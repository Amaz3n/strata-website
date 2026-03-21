const DEFAULT_SITE_URL = "https://arcnaples.com"

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim().replace(/\/+$/, "")
  if (!trimmed) return DEFAULT_SITE_URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed
  }
  return `https://${trimmed}`
}

export const siteConfig = {
  name: "Arc",
  shortName: "Arc",
  title: "Arc | Residential Construction Software",
  description:
    "Arc is the connected construction system for residential builders, unifying pipeline, scheduling, financials, and warranty in one platform.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL),
  ogImage: "/opengraph-image",
}
