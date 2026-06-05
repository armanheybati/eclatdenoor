import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Éclat de Noor | DSGVO-konforme MedAesthetic App";
const description =
  "Medical-Beauty-App für Botox, Filler und Hyaluron: Fotodokumentation, digitale Aufklärung, Reminder, Waitlist, DSGVO und Praxis-Workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eclatdenoor.vercel.app"),
  title,
  description,
  keywords: ["Medical Aesthetics", "Botox App", "Filler Dokumentation", "DSGVO", "Praxissoftware"],
  openGraph: {
    title,
    description,
    url: "https://eclatdenoor.vercel.app",
    siteName: "Éclat de Noor",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Éclat de Noor MedAesthetic Manager Vorschau",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
