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
                src="/images/experience.jpg"
                alt="Inside Café Clair"
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
                Where Craft Meets
                <br />
                Refined Taste
              </h2>
              <p className="body-lg mb-6">
                At Café Clair, every detail is considered. From the warm
                croissants that greet your morning to the perfectly pulled
                espresso and the elegant evening cocktails — this is dining
                as it should be.
              </p>
              <p className="body-md mb-8">
                With beautiful indoor and outdoor spaces, a stunning interior,
                and a menu that spans breakfast through dinner, Café Clair is
                the destination for those who appreciate the finer things in
                Accra&apos;s East Legon.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-coffee-brown/10">
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">8K+</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Followers</p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">5★</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Rated</p>
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
