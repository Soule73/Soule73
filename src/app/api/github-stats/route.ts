import { NextResponse } from 'next/server'

interface GitHubRepo {
  stargazers_count: number
  language: string | null
  fork: boolean
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }
    // Token optionnel pour augmenter la limite de débit (5000 req/h au lieu de 60)
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/Soule73', { headers }),
      fetch('https://api.github.com/users/Soule73/repos?per_page=100&type=owner', { headers }),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(null, { status: 502 })
    }

    const user = await userRes.json()
    const repos: GitHubRepo[] = await reposRes.json()

    const ownRepos = repos.filter(r => !r.fork)
    const totalStars = ownRepos.reduce((acc, r) => acc + r.stargazers_count, 0)
    const langCounts: Record<string, number> = {}
    ownRepos.forEach(r => {
      if (r.language) langCounts[r.language] = (langCounts[r.language] ?? 0) + 1
    })
    const topLanguages = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang)

    const data = {
      repos: user.public_repos as number,
      stars: totalStars,
      followers: user.followers as number,
      topLanguages,
    }

    // Cache 1h côté CDN/navigateur
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' }
    })
  } catch {
    return NextResponse.json(null, { status: 500 })
  }
}
