"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const galleryImages = [
  { src: "/images/garden-guests.jpg", alt: "Guests relaxing under the palms and bougainvillea" },
  { src: "/images/brunch-spread.jpg", alt: "A brunch spread with a sparkling drink and cappuccino" },
  { src: "/images/croissant-tray.jpg", alt: "A tray of freshly baked croissants in the garden" },
  { src: "/images/prawn-toast.jpg", alt: "Tiger prawn on toast with french fries" },
  { src: "/images/honey-chilli-wings.jpg", alt: "Honey chilli chicken wings" },
  { src: "/images/lounge-corner.jpg", alt: "A marble-topped table among the plants in the courtyard lounge" },
  { src: "/images/croissant-sandwich.jpg", alt: "A croissant sandwich with french fries" },
  { src: "/images/pantry-shelves.jpg", alt: "Wooden shelves of jams, jars and woven baskets in the shop" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const n = galleryImages.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % n));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + n) % n));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const step = (d: number) =>
    setOpen((i) => (i === null ? i : (i + d + galleryImages.length) % galleryImages.length));

  return (
    <section id="gallery" className="gallery">
      <div className="container-x">
        <RevealOnScroll>
          <div className="gallery-head">
            <div>
              <span className="label-script">Gallery</span>
              <h2 className="section-title">
                The look <em>&amp; feel</em>
              </h2>
            </div>
            <p className="body-copy">
              Golden bakes, quiet mornings and a whole lot of green — moments from our little bakehouse in Osu.
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`g-item g${i + 1}`}
            onClick={() => setOpen(i)}
            aria-label={`Open photo: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 960px) 50vw, 34vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setOpen(null)}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
            <button
              type="button"
              className="lightbox-nav prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M15 4l-8 8 8 8" />
              </svg>
            </button>
            <div className="lightbox-img" onClick={(e) => e.stopPropagation()}>
              <Image
                key={galleryImages[open].src}
                src={galleryImages[open].src}
                alt={galleryImages[open].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            </div>
            <button
              type="button"
              className="lightbox-nav next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M9 4l8 8-8 8" />
              </svg>
            </button>
            <p className="lightbox-caption">{galleryImages[open].alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
