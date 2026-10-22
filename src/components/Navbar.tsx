"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

export const navLinks = [
  { name: "Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Courtyard", href: "#courtyard" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#visit" },
];

export function Logo() {
  return (
    <>
      <span className="logo-name">Dear Lola</span>
      <span className="logo-sub">Bakehouse</span>
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // Close the mobile menu if the screen is resized up to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 961px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${mobileOpen ? "menu-open" : ""}`} aria-label="Main">
        <a href="#home" className="nav-logo" onClick={() => setMobileOpen(false)} aria-label="Dear Lola Bakehouse — home">
          <Logo />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Plan a Visit
        </a>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="m-link"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn btn-wine"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              style={{ marginTop: 12 }}
            >
              Plan a Visit
            </motion.a>
            <p className="m-meta">
              Osu, Accra
              <br />
              {site.hours.short}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
