"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    title: "Work Hub",
    description: "Fast WiFi, peaceful surroundings, and great coffee — every corner doubles as a focused workspace or nature-immersed boardroom.",
    icon: "💻",
  },
  {
    title: "Bookstore & Library",
    description: "Browse our growing multi-lingual library built through community donations. Join our Just Read Book Club every Sunday.",
    icon: "📚",
  },
  {
    title: "Art & Events Space",
    description: "From corporate workshops to artisan markets and creative meetups — our versatile space transforms for every occasion.",
    icon: "🎨",
  },
  {
    title: "Community Gatherings",
    description: "A family-owned space where connection and focus coexist beautifully. Brunch with friends, network, or simply unwind.",
    icon: "🤝",
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
                src="/images/community.jpg"
                alt="Community gathering at Theia"
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
                Community
              </span>
              <h2 className="heading-lg mb-6">
                More Than
                <br />
                A Café
              </h2>
              <p className="body-lg mb-10">
                THEIA is a café, bookstore, work hub, community, art &amp;
                events space — where connection and focus coexist beautifully.
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
