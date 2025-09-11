import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soule73 - Développeur Full Stack | Portfolio",
  description: "Portfolio de Soule73, développeur full stack passionné par la création d'expériences web innovantes. Spécialisé en React, Next.js, TypeScript et bien plus.",
  keywords: ["développeur", "full stack", "react", "nextjs", "typescript", "portfolio", "web"],
  authors: [{ name: "Soule73" }],
  creator: "Soule73",
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
    title: "Soule73 - Développeur Full Stack",
    description: "Portfolio professionnel de Soule73, créateur d'expériences web innovantes",
    url: "https://soule73.vercel.app",
    siteName: "Soule73 Portfolio",
    images: [
      {
        url: "https://github.com/Soule73.png",
        width: 1200,
        height: 630,
        alt: "Soule73 - Développeur Full Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soule73 - Développeur Full Stack",
    description: "Portfolio professionnel de Soule73, créateur d'expériences web innovantes",
    creator: "@soule73",
    images: ["https://github.com/Soule73.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
