"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { site } from "@/lib/site";

interface MenuItem {
  name: string;
  description: string;
}

// Only dishes mentioned in public guest reviews — prices and the full menu still need the client's sign-off
const menuData: Record<string, MenuItem[]> = {
  "Bakes": [
    { name: "Croissants", description: "Buttery and freshly baked — the heart of the bakehouse" },
    { name: "Banana Cake", description: "A guest-favourite slice to have with coffee" },
    { name: "Seasonal Treats", description: "Small-batch sweet bakes that change with the season" },
  ],
  "Breakfast & Plates": [
    { name: "Avocado & Egg Sandwich", description: "A Dear Lola breakfast favourite" },
    { name: "Smoked Salmon Focaccia", description: "Smoked salmon on our focaccia" },
    { name: "Creamy Mushroom Prawn Pasta", description: "Prawns and mushrooms in a creamy sauce" },
    { name: "Prawn Salad", description: "A lighter plate for the courtyard" },
  ],
  "Drinks": [
    { name: "Coffee", description: "Carefully prepared cups, hot or iced" },
    { name: "Butterfly Pea Lemonade", description: "Violet-blue, floral and refreshing" },
    { name: "Mint Lemonade", description: "Fresh mint and lemon over ice" },
    { name: "Passion Sparkling", description: "Passion fruit with a sparkle" },
    { name: "Milkshakes & Juices", description: "Including fresh pineapple juice" },
  ],
};

const categories = Object.keys(menuData);

const highlights = [
  "Buttery, freshly baked croissants",
  "Signature breakfast plates",
  "Beautifully made coffee",
  "Seasonal treats",
  "A little shop in our courtyard garden",
];

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu">
      {/* Intro panel */}
      <div className="menu-cta-inner">
        <div className="media-panel">
          <Image
            src="/images/dl-food-2.jpg"
            alt="A freshly baked croissant at Dear Lola Bakehouse"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>
        <div className="menu-cta-text">
          <RevealOnScroll>
            <span className="sublabel">From our kitchen</span>
            <span className="label-script">What We Bake</span>
            <h2 className="section-title">
              Bakes, breakfast
              <br />
              <em>&amp; beautiful coffee</em>
            </h2>
            <div className="divider" />
            <p className="body-copy">
              Small-batch bakes, beautifully made coffee and a menu rooted in quality ingredients and honest
              craftsmanship — made with intention, so the ingredients can speak for themselves.
            </p>
            <ul className="highlights">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href="#menu-board" className="btn btn-wine">
                See the Menu
              </a>
              <a href="#visit" className="btn btn-outline-wine">
                Visit Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Menu board */}
      <div id="menu-board" className="menu-board section">
        <div className="container-x">
          <RevealOnScroll>
            <div style={{ textAlign: "center" }}>
              <span className="label-script">From the Menu</span>
              <h2 className="section-title">Guest favourites</h2>
              <div className="divider center" />
            </div>
          </RevealOnScroll>

          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`menu-tab ${active === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              className="menu-list"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {menuData[active].map((item) => (
                <div key={item.name} className="menu-item">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="menu-note">
            A taste of what we make — the full menu and prices are in store and change with the seasons.{" "}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              See today&apos;s bakes on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
