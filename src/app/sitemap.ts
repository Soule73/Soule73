import { MetadataRoute } from 'next'
import { personal } from '../lib/personal'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = personal.siteUrl

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/cv`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}