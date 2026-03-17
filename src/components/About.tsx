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
                About Theia
              </h2>
              <p className="font-body text-lg text-cream/70 leading-relaxed mb-6">
                THEIA is an Afro-Mediterranean inspired, family-owned café,
                bookstore, work hub, community, art &amp; events space tucked
                away in the Airport Residential Area of Accra, Ghana.
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-4">
                Intentional spaces nurture mindful living. Sustainability
                isn&apos;t just a trend to us — it&apos;s how we live, create, and share
                our space with you. Our glass and plastic waste is recycled
                weekly, our cushions are made from repurposed fabrics, and
                our multi-lingual library grows through community donations.
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-8">
                More than a café, Theia is about the people who walk through
                our doors — the readers, the dreamers, the creators, the
                community.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-cream/10">
                <p className="font-display text-xl italic text-cream/80">
                  &ldquo;Intentional spaces nurture mindful living.&rdquo;
                </p>
                <p className="font-body text-sm text-cream/50 mt-2 tracking-wider uppercase">
                  — The Theia Family
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
                  alt="The team at Theia Coffee House"
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
