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
  title: "THEIA | Afro-Mediterranean Café, Bookstore & Creative Space in Accra",
  description:
    "THEIA — an Afro-Mediterranean inspired, family-owned café, bookstore, work hub, community, art & events space in Airport Residential Area, Accra, Ghana.",
  keywords: ["THEIA", "café", "Accra", "Ghana", "bookstore", "coworking", "creative space", "Afro-Mediterranean", "brunch", "events"],
  openGraph: {
    title: "THEIA",
    description: "An Afro-Mediterranean inspired café, bookstore & creative space in Accra.",
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
