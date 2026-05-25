"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  return (
    <section className="section-spacing section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <RevealOnScroll>
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/dl-mirrors.jpg"
                alt="The circular mirror wall at Dear Lola Café"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-cream/30 pointer-events-none" />
            </div>
          </RevealOnScroll>

          {/* Text */}
          <RevealOnScroll delay={0.2}>
            <div className="lg:pl-4">
              <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
                The Experience
              </span>
              <h2 className="heading-lg mb-6">
                Small Space,
                <br />
                Big Heart
              </h2>
              <p className="body-lg mb-6">
                At Dear Lola, everything is made from scratch. From the
                buttery croissants fresh out of the oven each morning to the
                creamy pastas and handcrafted cold drinks — this is food
                made with genuine care.
              </p>
              <p className="body-md mb-8">
                Nestled on Osu Link, our intimate café is filled with plants,
                natural light and a warmth that makes every visit feel like
                coming home. Small by design — special by nature.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-coffee-brown/10">
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">4.3★</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Rated</p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">100%</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Handmade</p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">7</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Days Open</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
