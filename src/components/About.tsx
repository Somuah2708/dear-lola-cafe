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
                About Café Clair
              </h2>
              <p className="font-body text-lg text-cream/70 leading-relaxed mb-6">
                Café Clair is a refined new concept in the heart of East Legon,
                thoughtfully managed by District Management. We blend the best of
                pâtisserie, restaurant, and bar into one beautifully curated space.
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-4">
                Every detail at Café Clair is intentional — from our handcrafted
                pastries baked fresh each morning to our perfectly brewed coffees
                and an evening bar programme designed for meaningful moments. We
                believe a great space feeds more than just hunger.
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-8">
                Whether you&apos;re joining us for a leisurely brunch, a focused work
                session, or a special evening out — Café Clair is your home away
                from home in East Legon.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-cream/10">
                <p className="font-display text-xl italic text-cream/80">
                  &ldquo;Where every visit is an experience worth savouring.&rdquo;
                </p>
                <p className="font-body text-sm text-cream/50 mt-2 tracking-wider uppercase">
                  — The Café Clair Team
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Inside Café Clair"
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
