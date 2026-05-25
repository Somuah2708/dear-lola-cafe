"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-coffee-brown text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <RevealOnScroll>
            <div>
              <span className="font-body text-sm tracking-[0.3em] uppercase text-sage-light mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream mb-6">
                About Dear Lola
              </h2>
              <p className="font-body text-lg text-cream/70 leading-relaxed mb-6">
                Dear Lola is a beloved neighbourhood café tucked into the lush
                streets of Osu, Accra. Born from a love of handcrafted food and
                intimate spaces, we&apos;ve created a little corner of the city where
                everything is made with care — from our freshly baked croissants
                to our slowly brewed coffees.
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-4">
                Each morning, our small kitchen fills with the scent of buttered
                pastry and warm spice. Our space is adorned with lush plants and
                colourful blooms — a quiet sanctuary where time slows down and
                every detail feels personal.
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-8">
                Whether you&apos;re stopping by for a solo breakfast, a focused work
                session, or a long catch-up with a friend — Dear Lola welcomes
                you like a letter to someone you love.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-cream/10">
                <p className="font-display text-xl italic text-cream/80">
                  &ldquo;A little café made with a lot of love.&rdquo;
                </p>
                <p className="font-body text-sm text-cream/50 mt-2 tracking-wider uppercase">
                  — Lola
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/dl-interior.jpg"
                  alt="Inside Dear Lola Café"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-sage/30 -z-10" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
