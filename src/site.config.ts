import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Martín Stanicio',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'Martín Stanicio',
  // Meta property used as the default description meta property
  description: "Martín Stanicio's resume",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'en',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en',
}
