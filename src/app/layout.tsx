import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
});

const siteUrl = "https://ainatiavina.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Aina Tiavina RAJOELISON | Frontend & Mobile Developer Portfolio",
    template: "%s | Aina Tiavina RAJOELISON",
  },
  description:
    "Portfolio of RAJOELISON Aina Tiavina — Frontend & Mobile Developer specializing in Flutter, Next.js, React, and TypeScript. Explore my projects, skills, and experience building modern web and mobile applications.",
  keywords: [
    "Aina Tiavina",
    "RAJOELISON",
    "Frontend Developer",
    "Mobile Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "NestJS",
    "Dart",
    "React Native",
  ],
  authors: [{ name: "RAJOELISON Aina Tiavina", url: siteUrl }],
  creator: "RAJOELISON Aina Tiavina",
  publisher: "RAJOELISON Aina Tiavina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aina Tiavina — Portfolio",
    title: "Aina Tiavina RAJOELISON | Frontend & Mobile Developer Portfolio",
    description:
      "Discover the work of RAJOELISON Aina Tiavina — a passionate Frontend & Mobile Developer crafting modern, performant, and user-friendly web and mobile experiences with Flutter, Next.js, and React.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aina Tiavina RAJOELISON — Frontend & Mobile Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aina Tiavina RAJOELISON | Frontend & Mobile Developer Portfolio",
    description:
      "Discover the work of RAJOELISON Aina Tiavina — a passionate Frontend & Mobile Developer crafting modern web and mobile experiences.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "RAJOELISON Aina Tiavina",
  url: siteUrl,
  jobTitle: "Frontend & Mobile Developer",
  knowsAbout: [
    "Flutter",
    "Dart",
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Firebase",
    "Docker",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/Poseidon1402",
    "https://www.linkedin.com/in/aina-tiavina",
  ],
  description:
    "Frontend & Mobile Developer specializing in Flutter, Next.js, React, and TypeScript. Building modern, performant, and user-friendly digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} bg-white text-black`}>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
