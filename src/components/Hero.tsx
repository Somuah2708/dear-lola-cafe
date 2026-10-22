"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  // The courtyard clip is portrait, so it only replaces the photo on portrait screens
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(orientation: portrait)");
    const update = () => setPortrait(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <Image
          src="/images/courtyard-pathway-wide.jpg"
          alt="The garden courtyard path at Dear Lola Bakehouse"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        {portrait && (
          <video
            className="absolute inset-0"
            src="/videos/courtyard-bougainvillea.mp4"
            poster="/images/courtyard-bougainvillea-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">Osu &nbsp;·&nbsp; Accra &nbsp;·&nbsp; Ghana</span>
        <h1 className="hero-title">Dear Lola</h1>
        <span className="hero-script">Bakehouse</span>
        <span className="hero-sans">A home for things made with care</span>
        <p className="hero-sub">Small-batch bakes &nbsp;·&nbsp; Beautiful coffee &nbsp;·&nbsp; Garden courtyard</p>
        <div className="hero-btns">
          <a href="#menu" className="btn btn-wine">
            View Menu
          </a>
          <a href="#visit" className="btn btn-outline-white">
            Visit Us
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
