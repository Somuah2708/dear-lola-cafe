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

// From the Dear Lola food & drink menu (October 2026). Prices in Ghana cedis.
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
      { name: "Lemonade", price: "70" },
      { name: "Mint Lemonade", price: "70" },
      { name: "Frozen Lemonade Slushie", price: "70" },
      { name: "Passion Sparkling", description: "Passion fruit syrup, ice, sparkling water", price: "80" },
      { name: "Orange Sparkling", description: "Orange syrup, ice, sparkling water", price: "80" },
      { name: "Lemon Sparkling", description: "Lemon syrup, ice, sparkling water", price: "80" },
      { name: "Strawberry Sparkling", description: "Strawberry syrup, ice, sparkling water", price: "80" },
      {
        name: "Seasonal Fruit Shake",
        description: "Fresh-cut seasonal fruit blended with crushed ice and your choice of milk, topped with fruit",
        price: "80",
      },
      {
        name: "Oreo Shake",
        description: "Broken Oreos blended with crushed ice and your choice of milk, topped with crushed Oreos",
        price: "110",
      },
      { name: "Seasonal Fresh Juices", price: "45" },
      { name: "Still Water", price: "20 / 30" },
      { name: "Sparkling Water", price: "45" },
    ],
  },
  "To Share": {
    items: [
      {
        name: "Crispy Sea Bites",
        description: "Golden calamari rings, lightly seasoned, served with tartar sauce and a side salad",
        price: "220",
      },
      {
        name: "Honey Chilli Chicken Wings",
        description: "Crispy wings in a sticky honey chilli glaze, served with garlic yoghurt sauce",
        price: "110",
      },
      {
        name: "Barbecue Chicken Wings",
        description: "Crispy wings in a sticky barbecue glaze — sweet, spicy and savoury",
        price: "110",
      },
      {
        name: "Cheesy Garlic Croissant Bites",
        description: "Flaky croissant bites filled with melted cheese, brushed with garlic butter, served with aioli",
        price: "120",
      },
    ],
  },
  "All Day Breakfast": {
    items: [
      {
        name: "Cinnamon Apple French Toast",
        description: "Pan-fried house-baked brioche, cinnamon apple coulis, chantilly cream, apple slices",
        price: "130",
      },
      {
        name: "Berry French Toast",
        description: "Pan-fried house-baked brioche, blueberry or strawberry coulis, chantilly cream, fresh berries",
        price: "130",
      },
      {
        name: "Tiramisu French Toast",
        description: "Pan-fried house-baked brioche, white chocolate chantilly cream, cocoa dusting, espresso cream",
      },
      {
        name: "Crème Brûlée French Toast",
        description: "Pan-fried house-baked brioche, vanilla crème pâtissière, berries and crème anglaise",
      },
      { name: "Berry Pancakes", description: "Fluffy golden pancakes with berry coulis and whipped cream", price: "150" },
      {
        name: "Chocolate Chip Pancakes",
        description: "Choc chip pancakes with maple syrup, whipped cream and butter",
        price: "150",
      },
      {
        name: "Honey Butter Pancakes",
        description: "Fluffy golden pancakes with a rich, silky honey butter",
        price: "150",
      },
      {
        name: "Big Breakkie",
        description:
          "Two eggs your way, garlic & herb potatoes, beef sausage, mushrooms, grilled tomatoes, croissant",
        price: "200",
      },
      {
        name: "Scandi Breakfast Plate",
        description: "Toasted house-baked sourdough, whipped butter, aged gouda, egg your way, berry compote",
        price: "200",
      },
      {
        name: "Granola Bowl",
        description: "House-made granola, creamy yoghurt, fresh berries, toasted nuts and chia seeds",
        price: "90",
      },
    ],
  },
  "Sandwiches": {
    note: "On sourdough or croissant, with a side of french fries",
    items: [
      {
        name: "Smoked Salmon",
        description: "Smoked salmon, cream cheese, pesto, eggs, blistered tomatoes",
        price: "180",
      },
      {
        name: "Avocado & Egg",
        description: "Mashed or sliced avocado, scrambled eggs, mayo, blistered tomatoes",
        price: "160",
      },
      {
        name: "Mushroom & Egg Scramble",
        description: "Soft scrambled eggs, mushrooms, tomatoes, chilli flakes, mayo",
        price: "140",
      },
      { name: "Tiger Prawn on Toast", description: "Pan-grilled tiger prawns, eggs, mayo", price: "180" },
      { name: "Spicy Chicken", description: "Sliced grilled chicken, eggs, spicy mayo or pesto", price: "150" },
      { name: "Creamy Tuna Coleslaw", description: "Tuna flakes and fresh veggies in mayo", price: "150" },
      {
        name: "Shakshuka on Sourdough",
        description: "Eggs gently baked in a rich tomato sauce, with toasted sourdough",
        price: "160",
      },
    ],
  },
  "Salads": {
    items: [
      {
        name: "House Salad",
        description:
          "Lettuce, tomatoes, olives, pickled cucumber, corn and honey vinaigrette — with tuna (150), chicken (180), or prawn or salmon (200)",
        price: "from 150",
      },
      {
        name: "Greek Salad",
        description:
          "Tomatoes, crisp cucumber, red onion, olives and creamy feta with extra virgin olive oil, oregano and lemon",
        price: "180",
      },
    ],
  },
  "Mains": {
    items: [
      {
        name: "Creamy Prawn Mushroom Pasta",
        description: "Lemony chilli pan-grilled prawns and mushrooms in a cream sauce with al dente pasta",
        price: "220",
      },
      {
        name: "Garlic Butter Salmon Pasta",
        description: "Salmon in garlic butter sauce with al dente pasta",
        price: "220",
      },
      {
        name: "Jollof Rice Bowl",
        description:
          "Jollof rice with kelewele and shito — chicken (190), lamb (210), or prawn or salmon (220)",
        price: "from 190",
      },
      {
        name: "Whole Butterflied Red Snapper",
        description:
          "Grilled snapper with harissa-style red pepper sauce and herby chermoula, with french fries or kelewele",
        price: "220",
      },
    ],
  },
  "Sides": {
    items: [
      {
        name: "Garlic Parmesan Fries",
        description: "Crispy fries tossed in garlic butter, topped with shaved parmesan",
        price: "100",
      },
      { name: "French Fries", price: "80" },
      { name: "Kelewele", description: "Spicy fried plantain", price: "30" },
      { name: "Eggs", price: "40" },
      { name: "Mushrooms", price: "40" },
      { name: "Avocado", price: "40" },
      { name: "Sausages", price: "40" },
      { name: "Smoked Salmon", price: "70" },
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
            Prices in Ghana cedis (GH₵) · seasonal items change with the market.{" "}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              See today&apos;s bakes on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
