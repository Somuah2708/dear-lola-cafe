import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Josefin_Sans, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-josefin",
  display: "swap",
});

// Free stand-in for the Brandon Grotesque used on the reference design
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dear Lola Bakehouse | Bakehouse & Café in Osu, Accra",
  description:
    "Dear Lola Bakehouse is a neighbourhood bakehouse and café in the heart of Osu, Accra — small-batch bakes, beautifully made coffee and a garden courtyard made for slowing down.",
  keywords: ["Dear Lola", "Dear Lola Bakehouse", "bakehouse", "café", "Accra", "Ghana", "Osu", "croissants", "breakfast", "brunch", "coffee", "garden courtyard"],
  openGraph: {
    title: "Dear Lola Bakehouse",
    description: "A home for things made with care — small-batch bakes, coffee and a garden courtyard in Osu, Accra.",
    type: "website",
    images: ["/images/hero-courtyard-wide.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7a2533",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
