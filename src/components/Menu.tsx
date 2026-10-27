"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import LazyVideo from "./LazyVideo";
import { site } from "@/lib/site";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuSection {
  note?: string;
  items: MenuItem[];
}

// From the Dear Lola food & drink menu (October 2026). Prices in Ghana cedis, tax inclusive.
const menuData: Record<string, MenuSection> = {
  "Coffee & Tea": {
    note: "Served hot or iced · oat, almond or soy milk +20",
    items: [
      { name: "Espresso", description: "Single / double", price: "35 / 40" },
      { name: "Americano", price: "40" },
      { name: "Cappuccino", price: "50" },
      { name: "Latte", price: "50" },
      { name: "Vanilla Latte", price: "60" },
      { name: "Caramel Latte", price: "60" },
      { name: "Soy / Almond Latte", price: "60" },
      { name: "Mocha", price: "50" },
      { name: "Matcha Latte", price: "60" },
      { name: "Black Tea", price: "40" },
      { name: "Chai", description: "Milk tea", price: "50" },
    ],
  },
  "Cold Drinks": {
    items: [
      { name: "Lemonade", price: "100" },
      { name: "Mint Lemonade", price: "100" },
      { name: "Frozen Lemonade Slushie", price: "100" },
      { name: "Passion Sparkling", description: "Passion fruit syrup, ice, sparkling water", price: "100" },
      { name: "Orange Sparkling", description: "Orange syrup, ice, sparkling water", price: "100" },
      { name: "Lemon Sparkling", description: "Lemon syrup, ice, sparkling water", price: "100" },
      { name: "Strawberry Sparkling", description: "Strawberry syrup, ice, sparkling water", price: "100" },
      {
        name: "Seasonal Fruit Shake",
        description: "Fresh-cut seasonal fruit blended with crushed ice and your choice of milk, topped with fruit",
        price: "100",
      },
      {
        name: "Oreo Shake",
        description: "Broken Oreos blended with crushed ice and your choice of milk, topped with crushed Oreos",
        price: "140",
      },
      { name: "Seasonal Fresh Juices", price: "55" },
      { name: "Still Water", price: "30 / 50" },
      { name: "Sparkling Water", price: "45 / 70" },
    ],
  },
  "To Share": {
    items: [
      {
        name: "Crispy Sea Bites",
        description: "Golden calamari rings, lightly seasoned, served with tartar sauce and a side salad",
        price: "272",
      },
      {
        name: "Honey Chilli Chicken Wings",
        description: "Crispy wings in a sticky honey chilli glaze, served with garlic yoghurt sauce",
        price: "130",
      },
      {
        name: "Barbecue Chicken Wings",
        description: "Crispy wings in a sticky barbecue glaze — sweet, spicy and savoury",
        price: "130",
      },
      {
        name: "Cheesy Garlic Croissant Bites",
        description: "Flaky croissant bites filled with melted cheese, brushed with garlic butter, served with aioli",
        price: "110",
      },
    ],
  },
  "All Day Breakfast": {
    items: [
      {
        name: "Cinnamon Apple French Toast",
        description: "Pan-fried house-baked brioche, cinnamon apple coulis, chantilly cream, apple slices",
        price: "180",
      },
      {
        name: "Berry French Toast",
        description: "Pan-fried house-baked brioche, blueberry or strawberry coulis, chantilly cream, fresh berries",
        price: "180",
      },
      {
        name: "Tiramisu French Toast",
        description: "Pan-fried house-baked brioche, white chocolate chantilly cream, cocoa dusting, espresso cream",
        price: "200",
      },
      {
        name: "Crème Brûlée French Toast",
        description: "Pan-fried house-baked brioche, vanilla crème pâtissière, berries and crème anglaise",
        price: "180",
      },
      { name: "Berry Pancakes", description: "Fluffy golden pancakes with berry coulis and whipped cream", price: "180" },
      {
        name: "Chocolate Chip Pancakes",
        description: "Choc chip pancakes with maple syrup, whipped cream and butter",
        price: "180",
      },
      {
        name: "Honey Butter Pancakes",
        description: "Fluffy golden pancakes with a rich, silky honey butter",
        price: "180",
      },
      {
        name: "Big Breakkie",
        description:
          "Two eggs your way, garlic & herb potatoes, beef sausage, mushrooms, grilled tomatoes, croissant",
        price: "240",
      },
      {
        name: "Scandi Breakfast Plate",
        description: "Toasted house-baked sourdough, whipped butter, aged gouda, egg your way, berry compote",
        price: "180",
      },
      {
        name: "Granola Bowl",
        description: "House-made granola, creamy yoghurt, fresh berries, toasted nuts and chia seeds",
        price: "120",
      },
    ],
  },
  "Sandwiches": {
    note: "On sourdough or croissant, with a side of french fries",
    items: [
      {
        name: "Smoked Salmon",
        description: "Smoked salmon, cream cheese, pesto, eggs, blistered tomatoes",
        price: "190",
      },
      {
        name: "Avocado & Egg",
        description: "Mashed or sliced avocado, scrambled eggs, mayo, blistered tomatoes",
        price: "170",
      },
      {
        name: "Mushroom & Egg Scramble",
        description: "Soft scrambled eggs, mushrooms, tomatoes, chilli flakes, mayo",
        price: "170",
      },
      { name: "Tiger Prawn on Toast", description: "Pan-grilled tiger prawns, eggs, mayo", price: "225" },
      { name: "Spicy Chicken", description: "Sliced grilled chicken, eggs, spicy mayo or pesto", price: "180" },
      { name: "Creamy Tuna Coleslaw", description: "Tuna flakes and fresh veggies in mayo", price: "170" },
      {
        name: "Shakshuka on Sourdough",
        description: "Eggs gently baked in a rich tomato sauce, with toasted sourdough",
        price: "195",
      },
    ],
  },
  "Salads": {
    items: [
      {
        name: "House Salad",
        description:
          "Lettuce, tomatoes, olives, pickled cucumber, corn and honey vinaigrette — with tuna (180), chicken (220), or prawn or salmon (250)",
        price: "from 180",
      },
      {
        name: "Greek Salad",
        description:
          "Tomatoes, crisp cucumber, red onion, olives and creamy feta with extra virgin olive oil, oregano and lemon",
        price: "225",
      },
    ],
  },
  "Mains": {
    items: [
      {
        name: "Creamy Prawn Mushroom Pasta",
        description: "Lemony chilli pan-grilled prawns and mushrooms in a cream sauce with al dente pasta",
        price: "275",
      },
      {
        name: "Garlic Butter Salmon Pasta",
        description: "Salmon in garlic butter sauce with al dente pasta",
        price: "275",
      },
      {
        name: "Jollof Rice Bowl",
        description:
          "Jollof rice with kelewele and shito — lamb (210), chicken (230), or prawn or salmon (275)",
        price: "from 210",
      },
      {
        name: "Whole Butterflied Red Snapper",
        description:
          "Grilled snapper with harissa-style red pepper sauce and herby chermoula, with french fries or kelewele",
        price: "280",
      },
    ],
  },
  "Sides": {
    items: [
      {
        name: "Garlic Parmesan Fries",
        description: "Crispy fries tossed in garlic butter, topped with shaved parmesan",
        price: "110",
      },
      { name: "French Fries", price: "100" },
      { name: "Kelewele", description: "Spicy fried plantain", price: "35" },
      { name: "Eggs", price: "50" },
      { name: "Mushrooms", price: "50" },
      { name: "Avocado", price: "50" },
      { name: "Sausages", price: "50" },
      { name: "Smoked Salmon", price: "85" },
    ],
  },
};

const categories = Object.keys(menuData);

const highlights = [
  "Buttery, freshly baked croissants",
  "Signature breakfast plates",
  "Great coffee",
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
          <LazyVideo src="/videos/croissants-garden.mp4" poster="/images/croissants-garden-poster.jpg" />
        </div>
        <div className="menu-cta-text">
          <RevealOnScroll>
            <span className="sublabel">From our kitchen</span>
            <span className="label-script">What We Bake</span>
            <h2 className="section-title">
              Bakes, breakfast
              <br />
              <em>&amp; great coffee</em>
            </h2>
            <div className="divider" />
            <p className="body-copy">
              Small-batch bakes, great coffee and a menu rooted in quality ingredients and honest
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
              <h2 className="section-title">Food &amp; drink</h2>
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
              {menuData[active].note && <p className="menu-section-note">{menuData[active].note}</p>}
              {menuData[active].items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-head">
                    <h3 className="menu-item-name">{item.name}</h3>
                    {item.price && <span className="menu-item-price">{item.price}</span>}
                  </div>
                  {item.description && <p className="menu-item-desc">{item.description}</p>}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="menu-note">
            Prices in Ghana cedis (GH₵), tax inclusive · a discretionary 5% service charge will be added
            to the bill · seasonal items change with the market.{" "}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              See today&apos;s bakes on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
