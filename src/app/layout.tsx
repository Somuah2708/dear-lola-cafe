import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAFÉ CLAIR | Pâtisserie, Restaurant & Bar in East Legon, Accra",
  description:
    "Café Clair — a refined concept blending pâtisserie, restaurant & bar, offering handcrafted pastries, meals and perfectly brewed coffee in East Legon, Accra, Ghana.",
  keywords: ["Café Clair", "café", "Accra", "Ghana", "patisserie", "East Legon", "brunch", "restaurant", "bar", "pastries", "coffee"],
  openGraph: {
    title: "CAFÉ CLAIR",
    description: "A refined pâtisserie, restaurant & bar in East Legon, Accra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
