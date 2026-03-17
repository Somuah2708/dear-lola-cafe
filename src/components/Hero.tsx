"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Fallback Image */}
      <Image
        src="/images/hero-fallback.jpg"
        alt="Theia Coffee House"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
      />

      {/* Background Video (loads on top of image when available) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fallback.jpg"
        className="absolute inset-0 z-[1] w-full h-full object-cover"
      >
        <source src="/videos/coffee-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col items-center justify-center text-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-16 h-[1px] bg-cream/50 mx-auto mb-8"
          />

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream tracking-wide leading-[1.1]">
            THEIA
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 md:mt-8 font-body text-lg md:text-xl text-cream/70 tracking-wide font-light max-w-xl mx-auto"
          >
            An Afro-Mediterranean inspired café, bookstore &amp; creative space in Accra.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#menu")}
              className="px-10 py-4 bg-cream text-coffee-brown font-body text-sm font-medium tracking-[0.2em] uppercase
              transition-all duration-300 hover:bg-cream-dark hover:shadow-lg hover:-translate-y-0.5"
            >
              View Menu
            </button>
            <button
              onClick={() => scrollTo("#visit")}
              className="px-10 py-4 border border-cream/50 text-cream font-body text-sm font-medium tracking-[0.2em] uppercase
              transition-all duration-300 hover:bg-cream/10 hover:border-cream hover:-translate-y-0.5"
            >
              Visit Us
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-cream/0 via-cream/60 to-cream/0"
          />
        </motion.div>
      </div>
    </section>
  );
}
