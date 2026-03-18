"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between section-padding py-4 md:py-5">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-coffee-brown" : "text-cream"
            }`}
          >
            THEIA HOUSE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative font-body text-sm font-medium tracking-wider uppercase transition-colors duration-300 group ${
                  scrolled
                    ? "text-dark/70 hover:text-coffee-brown"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ${
                    scrolled ? "bg-coffee-brown" : "bg-cream"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6, backgroundColor: "#4B2E2B" }
                  : {
                      rotate: 0,
                      y: 0,
                      backgroundColor: scrolled ? "#4B2E2B" : "#F5F1EB",
                    }
              }
              className="block w-6 h-[1.5px] origin-center transition-colors"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0 }
                  : {
                      opacity: 1,
                      backgroundColor: scrolled ? "#4B2E2B" : "#F5F1EB",
                    }
              }
              className="block w-6 h-[1.5px] transition-colors"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6, backgroundColor: "#4B2E2B" }
                  : {
                      rotate: 0,
                      y: 0,
                      backgroundColor: scrolled ? "#4B2E2B" : "#F5F1EB",
                    }
              }
              className="block w-6 h-[1.5px] origin-center transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="font-display text-3xl font-bold text-coffee-brown hover:text-sage transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
