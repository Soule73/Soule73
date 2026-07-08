import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personal } from "../lib/personal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Soulé Soumaré - Frontend / Full Stack Engineer",
    template: "%s | Soulé Soumaré"
  },
  description: "Frontend Engineer chez Opensee (Fintech SaaS), spécialisé en React, TypeScript et Testing Automation - Paris, France.",
  keywords: [
    "frontend engineer",
    "full stack engineer",
    "react",
    "typescript",
    "testing automation",
    "playwright",
    "vitest",
    "jest",
    "nextjs",
    "nodejs",
    "nestjs",
    "portfolio",
    "soulé soumaré",
    "développeur paris",
    "saas fintech",
    "opensee"
  ],
  authors: [{ name: personal.name, url: personal.siteUrl }],
  creator: personal.name,
  publisher: personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(personal.siteUrl),
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
    url: personal.siteUrl,
    title: `${personal.name} - Frontend / Full Stack Engineer`,
    description: "Frontend Engineer chez Opensee (Fintech SaaS) · React · TypeScript · Testing Automation · Paris.",
    siteName: "Soulé Soumaré - Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Soulé Soumaré - Frontend / Full Stack Engineer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulé Soumaré - Frontend / Full Stack Engineer",
    description: "Frontend Engineer @ Opensee · React · TypeScript · Testing Automation",
    images: ["/opengraph-image"],
    creator: personal.twitterHandle,
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
    "jobTitle": "Frontend Engineer @ Opensee",
    "description": "Frontend Engineer chez Opensee (Fintech SaaS), spécialisé en React, TypeScript et Testing Automation - Paris, France.",
    "url": "https://soulesoumare.dev",
    "image": "https://soulesoumare.dev/sds.png",
    "sameAs": [
      "https://github.com/Soule73",
      "https://fr.linkedin.com/in/soulé-soumaré",
      "https://soulesoumare.dev"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Opensee"
    },
    "knowsAbout": [
      "React",
      "TypeScript",
      "Testing Automation",
      "Playwright",
      "Vitest",
      "Jest",
      "Node.js",
      "Nest.js",
      "JavaScript",
      "Frontend Development",
      "Full Stack Development",
      "CI/CD",
      "Software Quality"
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
