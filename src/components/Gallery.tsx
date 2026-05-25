"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const galleryImages = [
  { src: "/images/dl-hero.jpg",    alt: "The garden entrance at Dear Lola, Osu",             aspect: "aspect-[4/5]" },
  { src: "/images/dl-latte.jpg",   alt: "A handcrafted latte with the Dear Lola logo",        aspect: "aspect-square" },
  { src: "/images/dl-mirrors.jpg", alt: "The signature circular mirror wall inside Dear Lola", aspect: "aspect-square" },
  { src: "/images/dl-food-3.jpg",  alt: "Garden table with butterfly pea lemonade",           aspect: "aspect-[4/5]" },
  { src: "/images/dl-interior.jpg",alt: "Warm wood interior and purple bench seating",        aspect: "aspect-[4/3]" },
  { src: "/images/dl-food-2.jpg",  alt: "A beautifully plated croissant — made fresh daily",  aspect: "aspect-square" },
  { src: "/images/dl-garden.jpg",  alt: "The lush garden seating area at Dear Lola",          aspect: "aspect-[4/3]" },
  { src: "/images/dl-food-5.jpg",  alt: "Egg avocado toast — a Dear Lola favourite",          aspect: "aspect-square" },
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
              Moments from our little café in Osu — golden pastries, quiet mornings and a whole lot of green.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryImages.map((img, i) => (
            <RevealOnScroll key={img.src} delay={i * 0.07}>
              <motion.div
                className={`relative overflow-hidden group cursor-pointer ${img.aspect}`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/30 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-sm text-cream tracking-wide leading-relaxed">{img.alt}</p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
