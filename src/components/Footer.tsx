"use client";

import { Logo, navLinks } from "./Navbar";
import { site, whatsappLink } from "@/lib/site";

const socialLinks = [
  {
    name: "Instagram",
    href: site.instagram.url,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  whatsappLink && {
    name: "WhatsApp",
    href: whatsappLink,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4.1-1.1z" />
      </svg>
    ),
  },
  site.phone && {
    name: "Call",
    href: `tel:${site.phone.tel}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
      </svg>
    ),
  },
].filter((s) => !!s) as { name: string; href: string; icon: JSX.Element }[];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-x">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="nav-logo" aria-label="Dear Lola Bakehouse — back to top">
              <Logo />
            </a>
            <p>A home for things made with care — an artisan small-batch bakery, café and shop in our courtyard garden in Osu.</p>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={s.name} className="social-btn">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li>{site.hours.days}</li>
              <li>{site.hours.time}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  {site.instagram.handle}
                </a>
              </li>
              {site.phone && (
                <li>
                  <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dear Lola Bakehouse. All rights reserved.</p>
          <p>Made with care in Accra</p>
        </div>
      </div>
    </footer>
  );
}
