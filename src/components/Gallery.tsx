"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const galleryImages = [
  { src: "/images/gallery/coffee-1.jpg", alt: "Latte art in a ceramic cup", span: "col-span-1" },
  { src: "/images/gallery/interior-1.jpg", alt: "Sunny café interior", span: "col-span-1 md:row-span-2" },
  { src: "/images/gallery/pastry-1.jpg", alt: "Fresh croissants on a wooden board", span: "col-span-1" },
  { src: "/images/gallery/brunch-1.jpg", alt: "Beautiful brunch plate", span: "col-span-1" },
  { src: "/images/gallery/coffee-2.jpg", alt: "Pour over brewing", span: "col-span-1" },
  { src: "/images/gallery/interior-2.jpg", alt: "Cozy corner seating", span: "col-span-1" },
  { src: "/images/gallery/pastry-2.jpg", alt: "Chocolate cake slice", span: "col-span-1" },
  { src: "/images/gallery/brunch-2.jpg", alt: "Avocado toast close up", span: "col-span-1" },
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
              Moments captured at Theia — from golden lattes to sun-filled corners.
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
