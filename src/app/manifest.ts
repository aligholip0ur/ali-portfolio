import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AliFolio',
    short_name: 'AliFolio',
    description: 'Portfolio WebSite',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/faviconc.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}