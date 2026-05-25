import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEAR LOLA | Artisan Café in Osu, Accra",
  description:
    "Dear Lola — a beloved artisan café in the heart of Osu, Accra. Handmade croissants, focaccia, pasta, milkshakes and carefully brewed coffee in a lush, intimate setting.",
  keywords: ["Dear Lola", "café", "Accra", "Ghana", "Osu", "artisan", "croissants", "brunch", "coffee", "pastries", "focaccia"],
  openGraph: {
    title: "DEAR LOLA",
    description: "Artisan bakes & handcrafted drinks in the heart of Osu, Accra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
