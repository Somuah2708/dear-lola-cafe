"use client";

import RevealOnScroll from "./RevealOnScroll";
import LazyVideo from "./LazyVideo";

const cards = [
  {
    title: "The Courtyard Garden",
    description: "Bougainvillea, palms and cobalt-blue pots — our open-air courtyard is the heart of Dear Lola.",
  },
  {
    title: "Linger Over Breakfast",
    description: "Settle in with our signature breakfast plates, a freshly baked croissant and a carefully made coffee.",
  },
  {
    title: "The Shop",
    description: "Take a little Dear Lola home — small-batch bakes and seasonal treats from the shop in our courtyard garden.",
  },
  {
    title: "A Moment for Yourself",
    description: "Meet a friend for coffee, or simply take a moment for yourself in a quiet corner of Osu.",
  },
];

export default function Experience() {
  return (
    <section id="courtyard" className="exp-grid">
      <div className="exp-text">
        <RevealOnScroll>
          <span className="sublabel">The Experience</span>
          <span className="label-script">The Courtyard</span>
          <h2 className="section-title">
            A garden made
            <br />
            <em>for slowing down</em>
          </h2>
          <div className="divider" />
          <p className="body-copy">
            Inspired by the warmth of a garden at home, our courtyard is a little corner of calm in busy Osu — shaded
            seating, flowering plants and the kind of mornings you won&apos;t want to rush.
          </p>
        </RevealOnScroll>
        <div className="exp-cards">
          {cards.map((c, i) => (
            <RevealOnScroll key={c.title} delay={0.08 * i}>
              <div className="exp-card">
                <span className="exp-num">0{i + 1}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="media-panel">
        <LazyVideo src="/videos/garden-courtyard.mp4" poster="/images/garden-courtyard-poster.jpg" />
        <span className="video-tag">Our garden courtyard</span>
      </div>
    </section>
  );
}
