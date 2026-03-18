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
                alt="Inside Theia House"
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
                Where Food Meets
                <br />
                Nature &amp; Culture
              </h2>
              <p className="body-lg mb-6">
                When food meets nature, and culture meets art, a space becomes
                an experience. At Theia, every corner is versatile — switching
                from a reading nook to a boardroom in the blink of an eye.
              </p>
              <p className="body-md mb-8">
                Whether you&apos;re here for an all-day breakfast, a focused work
                session with fast WiFi, or browsing our multi-lingual library —
                Theia is your space to pause, create, and connect.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-coffee-brown/10">
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">12K+</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Community</p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-coffee-brown">740+</p>
                  <p className="font-body text-sm text-dark/50 mt-1">Moments Shared</p>
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
