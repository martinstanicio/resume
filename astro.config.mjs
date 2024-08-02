import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://resume-sandy-five.vercel.app/',
  base: '',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  prefetch: true,
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
})
