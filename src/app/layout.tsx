import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Soulé Soumaré - Développeur Full Stack",
    template: "%s | Soulé Soumaré"
  },
  description: "Développeur Full Stack passionné spécialisé en React, Next.js, TypeScript et technologies modernes. Créateur d'expériences digitales innovantes et solutions web performantes.",
  keywords: [
    "développeur full stack",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "nodejs",
    "web développeur",
    "frontend",
    "backend",
    "portfolio",
    "soule soumaré",
    "développeur paris",
    "freelance",
    "création site web",
    "application web"
  ],
  authors: [{ name: "Soulé Soumaré", url: "https://soulesoumare.dev" }],
  creator: "Soulé Soumaré",
  publisher: "Soulé Soumaré",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://soulesoumare.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://soulesoumare.dev",
    title: "Soulé Soumaré - Développeur Full Stack",
    description: "Développeur Full Stack passionné spécialisé en React, Next.js, TypeScript et technologies modernes. Créateur d'expériences digitales innovantes et solutions web performantes.",
    siteName: "Soulé Soumaré Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soulé Soumaré - Développeur Full Stack Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulé Soumaré - Développeur Full Stack",
    description: "Développeur Full Stack passionné spécialisé en React, Next.js, TypeScript et technologies modernes.",
    images: ["/og-image.jpg"],
    creator: "@soule73dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-google-verification", // À remplacer par votre code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Soulé Soumaré",
    "jobTitle": "Développeur Full Stack",
    "description": "Développeur Full Stack passionné spécialisé en React, Next.js, TypeScript et technologies modernes.",
    "url": "https://soulesoumare.dev",
    "image": "https://soulesoumare.dev/og-image.jpg",
    "sameAs": [
      "https://github.com/Soule73",
      "https://fr.linkedin.com/in/soulé-soumaré",
      "https://soulesoumare.dev"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  }

  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
