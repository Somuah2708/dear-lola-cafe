"use client";

import RevealOnScroll from "./RevealOnScroll";
import { site, whatsappLink } from "@/lib/site";

export default function Reserve() {
  return (
    <section id="contact" className="reserve">
      <div className="container-x">
        <RevealOnScroll className="reserve-inner">
          <span className="sublabel">Plan your visit</span>
          <span className="label-script">Come Say Hello</span>
          <h2 className="section-title">A seat in the garden</h2>
          <div className="divider center" />
          <p className="lead">
            Our courtyard is small and much loved — come early for the freshest bakes. For questions or larger groups,
            send us a message and we&apos;ll get back to you.
          </p>
          <div className="reserve-btns">
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              Message us on Instagram
            </a>
            {whatsappLink && (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                WhatsApp Us
              </a>
            )}
            {site.phone && (
              <a href={`tel:${site.phone.tel}`} className="btn btn-outline-white">
                Call Us
              </a>
            )}
          </div>
          <p className="reserve-note">Open daily, {site.hours.time.replace(" – ", " to ")}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
