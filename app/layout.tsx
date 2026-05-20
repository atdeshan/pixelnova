import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { STUDIO } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = `https://${STUDIO.website}`;
const TITLE = "PixelNova · From Imagination to Innovation";
const DESCRIPTION =
  "A creative-tech studio blending design, development, and AI automation to help businesses grow, scale, and stand out.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s · PixelNova",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  authors: STUDIO.founders.map((name) => ({ name })),
  creator: STUDIO.name,
  keywords: [
    "creative-tech studio",
    "AI business automation",
    "WhatsApp AI chatbot",
    "brand identity Sri Lanka",
    "web development",
    "video production",
    "3D design",
    "business website",
    "digital studio",
    "PixelNova",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: STUDIO.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#org`,
      name: STUDIO.name,
      url: SITE_URL,
      email: `mailto:${STUDIO.email}`,
      foundingDate: STUDIO.established,
      founder: STUDIO.founders.map((name) => ({ "@type": "Person", name })),
      address: { "@type": "PostalAddress", addressCountry: STUDIO.location },
      sameAs: Object.values(STUDIO.social).filter((u) => u && u !== "#"),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#site`,
      url: SITE_URL,
      name: TITLE,
      publisher: { "@id": `${SITE_URL}#org` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
