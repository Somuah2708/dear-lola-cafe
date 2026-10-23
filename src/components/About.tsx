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
            A little more room to breathe.
            <br />
            <em>A little more joy in the everyday.</em>
          </h2>
          <div className="divider" />
          <p className="story-lead">
            Dear Lola began with a love for baking, a few croissants, and the joy of making something that brings
            people happiness. What started as a personal experiment grew into something bigger: a place to share good
            food, bring people together, and make the everyday feel a little more special.
          </p>
          <p className="body-copy">
            Nestled in Osu, Accra, Dear Lola is our expression of what a neighbourhood café in the tropics can be. A
            space that works with the warmth of our climate, where greenery offers shade, natural materials bring a
            sense of grounding, and the boundary between indoors and outdoors feels beautifully open. Thoughtfully
            designed with local materials and the hands of local artisans, it is a celebration of our surroundings
            rather than an escape from them.
          </p>
          <p className="body-copy">
            The same philosophy guides our kitchen. We believe the best things take time, practice, and a little bit of
            love. From our buttery croissants to seasonal plates and carefully made coffee, we keep things simple, let
            good ingredients shine, and make everything with intention.
          </p>
          <p className="body-copy">
            But what makes Dear Lola truly special is what happens around the table. The conversations that run a
            little longer, the laughter shared over breakfast, the quiet moments spent in the garden. We wanted to
            create a space between home and work where people could feel at ease, feel cared for, and simply be.
          </p>
          <p className="body-copy">
            Because food has a wonderful way of bringing us back to one another. And being part of someone’s day, even
            in a small way, is a privilege we never take lightly.
          </p>
          <p className="story-sign">Come as you are. Stay a little longer. There’s always room at Dear Lola.</p>
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
              src="/images/garden-path.jpg"
              alt="The flagstone garden path lined with palms and blue pots"
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
