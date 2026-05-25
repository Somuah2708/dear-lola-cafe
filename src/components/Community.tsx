"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    title: "Indoor & Outdoor Dining",
    description: "Beautiful, thoughtfully designed indoor and outdoor spaces — perfect for intimate breakfasts, relaxed lunches, or breezy evening gatherings.",
    icon: "🌿",
  },
  {
    title: "Work-Friendly Space",
    description: "Charging stations, comfortable seating, and an inspiring ambiance make Café Clair the ideal spot for remote work or creative sessions.",
    icon: "💻",
  },
  {
    title: "All-Day Dining & Bar",
    description: "From morning pastries and brunch plates to lunch, dinner, and a full bar programme — we have something special for every part of your day.",
    icon: "🍷",
  },
  {
    title: "Private Events",
    description: "Host your special occasion with us. Curated menus, a refined setting, and attentive service make every event at Café Clair unforgettable.",
    icon: "🎉",
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
                alt="Dining at Café Clair"
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
                Why Café Clair
              </span>
              <h2 className="heading-lg mb-6">
                More Than
                <br />
                A Café
              </h2>
              <p className="body-lg mb-10">
                Café Clair is a destination — where pâtisserie, restaurant,
                and bar come together in one refined space for every mood and moment.
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
