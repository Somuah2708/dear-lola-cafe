"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const galleryImages = [
  { src: "/images/gallery-latte-art.jpg", alt: "Coffee crafted with care at Café Clair", span: "col-span-1" },
  { src: "/images/ig-real-1.jpg", alt: "The beautiful Café Clair dining room", span: "col-span-1 md:row-span-2" },
  { src: "/images/menu-pastry-display.jpg", alt: "Freshly baked pastries and pain au chocolat", span: "col-span-1" },
  { src: "/images/gallery-coffee-art.jpg", alt: "Our signature brunch plate", span: "col-span-1" },
  { src: "/images/gallery-latte-2.jpg", alt: "Friends over coffee at Café Clair", span: "col-span-1" },
  { src: "/images/ig-sausage-croissant.jpg", alt: "Inside Café Clair — East Legon", span: "col-span-1" },
  { src: "/images/gallery-tart-fruit.jpg", alt: "Handcrafted macarons from our pâtisserie", span: "col-span-1" },
  { src: "/images/menu-eggs-brunch.jpg", alt: "Eggs Benedict — a brunch favourite", span: "col-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
              Gallery
            </span>
            <h2 className="heading-lg mb-4">A Glimpse Inside</h2>
            <p className="body-md max-w-2xl mx-auto">
              Moments captured at Café Clair — from golden pastries to sun-filled spaces.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <RevealOnScroll key={img.src} delay={i * 0.06}>
              <motion.div
                className={`relative overflow-hidden group cursor-pointer ${img.span} ${
                  img.span.includes("row-span-2") ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-square"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-sm text-cream tracking-wide">{img.alt}</p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
