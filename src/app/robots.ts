import { MetadataRoute } from 'next'
import { personal } from '../lib/personal'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = personal.siteUrl

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}