"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const chips = ["Small-batch bakes", "Garden courtyard", "Made with intention"];

export default function About() {
  return (
    <section id="story" className="section">
      <div className="container-x story-grid">
        {/* Text */}
        <RevealOnScroll>
          <span className="label-script">Our Story</span>
          <h2 className="section-title">
            A home for things
            <br />
            <em>made with care.</em>
          </h2>
          <div className="divider" />
          <p className="story-lead">
            Dear Lola Bakehouse is a little corner of calm in the heart of Osu, Accra — a neighbourhood bakehouse
            and café built around the simple pleasure of good food, thoughtful details, and the joy of slowing down.
          </p>
          <p className="body-copy">
            Inspired by the charm of European bakehouses and the warmth of a garden at home, we bring together{" "}
            <strong>small-batch bakes, beautifully made coffee</strong>, and a menu rooted in quality ingredients and
            honest craftsmanship.
          </p>
          <p className="body-copy">
            From buttery, freshly baked croissants to our signature breakfast plates, seasonal treats, and carefully
            prepared cups of coffee, everything we do is guided by a love for the little things. We believe food should
            be made with intention, ingredients should speak for themselves, and even an ordinary morning can feel
            special.
          </p>
          <p className="body-copy">
            Settle into our garden courtyard, linger over breakfast, meet a friend for coffee, or simply take a moment
            for yourself.
          </p>
          <p className="body-copy">
            At Dear Lola, there is always room to slow down, savour something lovely, and feel at home.
          </p>
          <p className="story-sign">Welcome to Dear Lola Bakehouse.</p>
          <div className="chips">
            {chips.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Image */}
        <RevealOnScroll delay={0.15} className="story-img-wrap">
          <div className="story-img">
            <Image
              src="/images/courtyard-evening.jpg"
              alt="Cushioned armchairs and palms in the Dear Lola garden courtyard"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
          <div className="story-badge">
            <span className="big">Osu</span>
            <span className="small">Accra, Ghana</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
