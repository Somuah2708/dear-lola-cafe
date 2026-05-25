"use client";

import RevealOnScroll from "./RevealOnScroll";

const hours = [
  { day: "Monday – Sunday", time: "8:00 AM – 5:00 PM" },
];

export default function Visit() {
  const whatsappLink = "https://wa.me/233553714884?text=Hi%20Dear%20Lola!%20I%27d%20like%20to%20make%20a%20reservation.";

  return (
    <section id="visit" className="section-spacing section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
              Find Us
            </span>
            <h2 className="heading-lg mb-4">Visit Dear Lola</h2>
            <p className="body-md max-w-2xl mx-auto">
              We&apos;d love to have you. Drop in for a slow coffee, a handmade bite, or a quiet morning to yourself.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Map */}
          <RevealOnScroll>
            <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
              <iframe
                src="https://maps.google.com/maps?q=Nyaniba+Estates+Osu+Accra+Ghana&t=m&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dear Lola — Osu, Accra"
                className="absolute inset-0"
              />
            </div>
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll delay={0.15}>
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="heading-sm mb-3">Address</h3>
                <p className="body-md">
                  Osu Link, Nyaniba Estates
                  <br />
                  Osu, Accra, Ghana
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="heading-sm mb-3">Opening Hours</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2 border-b border-coffee-brown/5 last:border-0">
                      <span className="font-body text-sm text-dark/70">{h.day}</span>
                      <span className="font-body text-sm font-medium text-coffee-brown">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="heading-sm mb-3">Phone</h3>
                <a
                  href="tel:+233553714884"
                  className="font-body text-lg text-coffee-brown hover:text-sage transition-colors duration-300"
                >
                  +233 55 371 4884
                </a>
              </div>

              {/* CTA */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center gap-3 !py-4 !text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reserve a Table
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
