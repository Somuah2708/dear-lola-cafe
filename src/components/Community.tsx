"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    title: "Handmade Every Morning",
    description: "Every croissant, tart and pastry is made from scratch in our kitchen daily — no shortcuts, just honest baking with quality ingredients.",
    icon: "🥐",
  },
  {
    title: "A Plant-Filled Sanctuary",
    description: "Settle into our lush, green-filled space adorned with colourful blooms. A quiet corner of Osu where the outside world slows down.",
    icon: "🌿",
  },
  {
    title: "Work-Friendly Nook",
    description: "A calm, inspiring space perfect for solo work sessions, creative thinking, or simply a good read over a slow coffee.",
    icon: "✏️",
  },
  {
    title: "Intimate Garden Seating",
    description: "With limited indoor and outdoor seating, every visit to Dear Lola feels personal, unhurried and completely yours.",
    icon: "🪴",
  },
];

export default function Community() {
  return (
    <section className="section-spacing section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <RevealOnScroll delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/dl-counter.jpg"
                alt="Dear Lola Café counter and menu board"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>

          {/* Content */}
          <RevealOnScroll className="order-1 lg:order-2">
            <div>
              <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
                Why Dear Lola
              </span>
              <h2 className="heading-lg mb-6">
                More Than
                <br />
                A Café
              </h2>
              <p className="body-lg mb-10">
                Dear Lola is a feeling — a little oasis in Osu where handmade
                food, good coffee and a beautiful space come together just for you.
              </p>

              <div className="space-y-8">
                {features.map((f, i) => (
                  <RevealOnScroll key={f.title} delay={0.2 + i * 0.1}>
                    <div className="flex gap-5 items-start group">
                      <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        {f.icon}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-coffee-brown mb-1">
                          {f.title}
                        </h3>
                        <p className="font-body text-sm text-dark/60 leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
