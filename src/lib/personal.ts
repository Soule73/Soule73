/**
 * Informations personnelles centralisées.
 * Toutes les valeurs sont chargées depuis les variables d'environnement (.env.local).
 * Modifier .env.local suffit pour mettre à jour l'ensemble du portfolio.
 */

export const personal = {
  name: process.env.NEXT_PUBLIC_PERSONAL_NAME ?? "Soulé Soumaré",
  title: process.env.NEXT_PUBLIC_PERSONAL_TITLE ?? "Frontend Engineer @ Opensee",

  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "Paris, France",

  github: {
    user: process.env.NEXT_PUBLIC_GITHUB_USER ?? "Soule73",
    url: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Soule73",
  },
  linkedin: {
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://fr.linkedin.com/in/soulé-soumaré",
    display: process.env.NEXT_PUBLIC_LINKEDIN_DISPLAY ?? "fr.linkedin.com/in/soulé-soumaré",
  },

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soulesoumare.dev",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "@soule73dev",
} as const
