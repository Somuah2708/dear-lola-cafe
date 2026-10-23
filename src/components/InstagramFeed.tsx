"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/lib/site";

const IG_URL = site.instagram.url;

const posts = [
  { src: "/images/croissant-sandwich.jpg", alt: "Croissant sandwich" },
  { src: "/images/garden-path.jpg", alt: "The garden path" },
  { src: "/images/prawn-toast.jpg", alt: "Tiger prawn on toast" },
  { src: "/images/lounge-corner.jpg", alt: "Courtyard lounge" },
  { src: "/images/brunch-spread.jpg", alt: "Brunch spread" },
  { src: "/images/croissant-tray.jpg", alt: "Fresh croissants" },
];

export default function InstagramFeed() {
  return (
    <section className="section">
      <div className="container-x">
        <RevealOnScroll>
          <div className="ig-header">
            <div>
              <span className="label-script">On the &rsquo;Gram</span>
              <h2 className="section-title">
                Follow <em>along</em>
              </h2>
            </div>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="ig-handle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              {site.instagram.handle}
            </a>
          </div>
        </RevealOnScroll>

        <div className="ig-grid">
          {posts.map((post) => (
            <a key={post.src} href={IG_URL} target="_blank" rel="noopener noreferrer" className="ig-post" aria-label={`${post.alt} — view on Instagram`}>
              <Image src={post.src} alt={post.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 560px) 50vw, (max-width: 960px) 33vw, 17vw" />
              <span className="ig-overlay" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
