import type { Metadata, Viewport } from "next";
import { Anton, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Crepearia das Meninas";
const siteTitle = "Crepearia das Meninas | Crepes e Buffet para Eventos em Torrinha - SP";
const siteDescription =
  "Crepearia em Torrinha - SP com crepes salgados, crepes doces, crepe suico, algodao doce e buffet para aniversarios, casamentos, confraternizacoes e eventos corporativos.";
const siteKeywords = [
  "crepearia em Torrinha",
  "crepe em Torrinha SP",
  "buffet de crepe para eventos",
  "crepes doces e salgados",
  "crepe suico para festa",
  "algodao doce para eventos",
  "batata no cone em Torrinha",
  "buffet para aniversario",
  "buffet para casamento",
  "buffet para evento corporativo",
  "crepe frances para eventos",
  "comida para festa em Torrinha",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "food",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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

export const viewport: Viewport = {
  themeColor: "#B63149",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${anton.variable} ${interTight.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
