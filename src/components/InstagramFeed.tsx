"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const posts = [
  { src: "/images/gallery-latte-2.jpg", alt: "Morning coffee", likes: 241 },
  { src: "/images/menu-cheesecake-nice.jpg", alt: "Pastry case", likes: 318 },
  { src: "/images/ig-brunch-reel.jpg", alt: "Brunch vibes", likes: 402 },
  { src: "/images/gallery-brunch-2.jpg", alt: "Brunch spread", likes: 275 },
  { src: "/images/gallery-tart-fruit.jpg", alt: "Macarons", likes: 347 },
  { src: "/images/menu-pastry-display.jpg", alt: "Pastry display", likes: 289 },
];

export default function InstagramFeed() {
  return (
    <section className="section-spacing section-padding bg-cream-light">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
              @cafeclairgh
            </span>
            <h2 className="heading-lg mb-4">Follow Along</h2>
            <p className="body-md max-w-2xl mx-auto">
              Join our community on Instagram for daily inspiration, new dishes and behind-the-scenes moments.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <RevealOnScroll key={post.src} delay={i * 0.06}>
              <a
                href="https://instagram.com/cafeclairgh"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group block"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/40 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-body text-sm text-cream font-medium">{post.likes}</span>
                  </div>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
