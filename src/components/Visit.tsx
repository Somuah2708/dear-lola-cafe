"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { site, mapsLink, mapsEmbed, whatsappLink } from "@/lib/site";

export default function Visit() {
  return (
    <section id="visit" className="section">
      <div className="container-x location-grid">
        {/* Street photo */}
        <RevealOnScroll>
          <div className="street-img">
            <Image
              src="/images/street-palms.jpg"
              alt="The quiet, palm-lined street leading to Dear Lola in Osu"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 960px) 100vw, 45vw"
            />
            <p className="street-caption">Follow the palm-lined street — you&apos;ll know you&apos;re close.</p>
          </div>
        </RevealOnScroll>

        {/* Info */}
        <RevealOnScroll delay={0.15}>
          <span className="sublabel">Find us</span>
          <span className="label-script">Visit Dear Lola</span>
          <h2 className="section-title">
            In the heart
            <br />
            <em>of Osu, Accra</em>
          </h2>
          <div className="divider" />

          <div className="info-blocks">
            <div className="info-block">
              <h3>Address</h3>
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
            </div>
            <div className="info-block">
              <h3>Opening Hours</h3>
              <p>
                {site.hours.days}
                <br />
                {site.hours.time}
              </p>
            </div>
            <div className="info-block">
              <h3>{whatsappLink ? "Call or WhatsApp" : "Get in Touch"}</h3>
              {site.phone && <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>}
              {whatsappLink && (
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp →
                </a>
              )}
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                {site.instagram.handle}
              </a>
            </div>
            <div className="info-block">
              <h3>Directions</h3>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <iframe
            className="map-embed"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map — Dear Lola Bakehouse, Osu, Accra"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
