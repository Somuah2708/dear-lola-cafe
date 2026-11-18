import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Josefin_Sans, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

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
  metadataBase: new URL("https://dearlolagh.com"),
  title: "Dear Lola Bakehouse | Bakehouse & Café in Osu, Accra",
  description:
    "Dear Lola Bakehouse is a neighbourhood bakehouse and café in the heart of Osu, Accra — small-batch bakes, great coffee and a garden courtyard made for slowing down.",
  keywords: ["Dear Lola", "Dear Lola Bakehouse", "bakehouse", "café", "Accra", "Ghana", "Osu", "croissants", "breakfast", "brunch", "coffee", "garden courtyard"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dear Lola Bakehouse",
    siteName: "Dear Lola Bakehouse",
    url: "/",
    locale: "en_GH",
    description: "A home for things made with care — small-batch bakes, coffee and a garden courtyard in Osu, Accra.",
    type: "website",
    images: ["/images/hero-courtyard-wide.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dear Lola Bakehouse",
    description: "Small-batch bakes, coffee and a garden courtyard in Osu, Accra.",
    images: ["/images/hero-courtyard-wide.jpg"],
  },
};

// Structured data so Google can show the café as a local business (hours, address, phone)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: site.name,
  url: "https://dearlolagh.com",
  image: "https://dearlolagh.com/images/hero-courtyard-wide.jpg",
  ...(site.phone ? { telephone: site.phone.tel } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Osu, Accra",
    addressCountry: "GH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  servesCuisine: ["Bakery", "Café", "Breakfast", "Brunch", "Coffee"],
  sameAs: [site.instagram.url],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#81b0d2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable} ${jost.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
