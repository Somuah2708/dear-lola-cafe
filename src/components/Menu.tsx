"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const categories = ["Coffees & Teas", "Breakfast All Day", "Sandwiches & Wraps", "Comfort Food", "Desserts & Pastries", "Thirst Quenchers"];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuData: Record<string, MenuItem[]> = {
  "Coffees & Teas": [
    { name: "Espresso", description: "Regular single or double shot of pure coffee", price: "GHS 30", image: "/images/menu-espresso.jpg" },
    { name: "Café Latte", description: "Smooth espresso with steamed milk", price: "GHS 60", image: "/images/gallery-latte-art.jpg" },
    { name: "Flat White", description: "Rich espresso topped with velvety micro-foam", price: "GHS 65", image: "/images/gallery-latte-2.jpg" },
    { name: "Cappuccino", description: "Classic espresso with steamed milk and deep foam", price: "GHS 55", image: "/images/menu-espresso.jpg" },
    { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "GHS 55", image: "/images/gallery-latte-2.jpg" },
    { name: "Ginger Mix Tea", description: "Hot, soothing ginger-infused tea", price: "GHS 60", image: "/images/gallery-smoothie.jpg" },
  ],
  "Breakfast All Day": [
    { name: "The Bombastic", description: "Smashed avocado, poached eggs, bacon, mozzarella bite, tomato on sourdough toast", price: "GHS 150", image: "/images/menu-eggs-brunch.jpg" },
    { name: "The Fantastique", description: "Smoked salmon on sourdough with cream cheese, avocado, capers, pickles, herbs and onions", price: "GHS 200", image: "/images/menu-salmon.jpg" },
    { name: "The American", description: "Eggs your way, sautéed mushrooms & potatoes, beef bacon, toast, baked beans, sausages", price: "GHS 170", image: "/images/gallery-coffee-art.jpg" },
    { name: "Enjoyment", description: "Layered pancakes with cheese, beef bacon, chicken strips, hash browns and mushroom", price: "GHS 150", image: "/images/menu-latte.jpg" },
    { name: "The Perfect Pancake Stack", description: "Classic stack with syrup or seasonal fruits", price: "GHS 100", image: "/images/menu-pancakes-stack.jpg" },
  ],
  "Sandwiches & Wraps": [
    { name: "Goat Cheese", description: "With tangy arugula & cranberries", price: "GHS 100", image: "/images/menu-wrap.jpg" },
    { name: "Oven Grilled Chicken", description: "In a cashew basil pesto", price: "GHS 110", image: "/images/menu-brunch-plate.jpg" },
    { name: "Egg Club", description: "The classic way", price: "GHS 90", image: "/images/gallery-brunch-2.jpg" },
    { name: "Beef Shawarma", description: "With hummus & wedges", price: "GHS 125", image: "/images/menu-wrap.jpg" },
    { name: "Falafel Wrap", description: "With hummus & wedges", price: "GHS 110", image: "/images/menu-avocado-toast-new.jpg" },
  ],
  "Comfort Food": [
    { name: "Chicken Escalope Love", description: "With wedge potatoes & coleslaw", price: "GHS 170", image: "/images/menu-rice-comfort.jpg" },
    { name: "Champion Jollof", description: "With oven baked chicken & chilli", price: "GHS 150", image: "/images/menu-rice-comfort.jpg" },
    { name: "Chicken Stir Fry Cravings", description: "With veggie fried rice", price: "GHS 160", image: "/images/menu-brunch-plate.jpg" },
    { name: "Fish & Chip Chop", description: "Pub grub revisited", price: "GHS 170", image: "/images/menu-salmon.jpg" },
  ],
  "Desserts & Pastries": [
    { name: "Crab Mango Tart", description: "Signature tart with crab, fresh mango and herbs — a Café Clair showstopper", price: "GHS 75", image: "/images/menu-tart.jpg" },
    { name: "Classic Cheesecake", description: "Rich, velvety cheesecake on a buttery biscuit base", price: "GHS 75", image: "/images/menu-cheesecake-nice.jpg" },
    { name: "Ham Croquette", description: "Golden croquette with ham filling and aioli dipping sauce", price: "GHS 60", image: "/images/menu-croissant.jpg" },
    { name: "Sausage Croissant", description: "Buttery, flaky croissant filled with savoury sausage", price: "GHS 50", image: "/images/menu-pastry-display.jpg" },
    { name: "Pain au Chocolat", description: "Warm, golden pastry with rich dark chocolate filling", price: "GHS 45", image: "/images/menu-pain-chocolat.jpg" },
  ],
  "Thirst Quenchers": [
    { name: "Bananarama Smoothie", description: "Banana, strawberry, mango", price: "GHS 70", image: "/images/gallery-smoothie.jpg" },
    { name: "Café Clair Mocktail", description: "Sugar cane, grenadine, lemon, iced tea", price: "GHS 80", image: "/images/gallery-latte-2.jpg" },
    { name: "Berry Lemonade", description: "Strawberry with syrup, fresh mint and lemon", price: "GHS 80", image: "/images/gallery-smoothie.jpg" },
    { name: "Piña Colada", description: "Fresh pineapple juice, coconut cream, rum", price: "GHS 120", image: "/images/gallery-smoothie.jpg" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("Coffees & Teas");

  return (
    <section id="menu" className="section-spacing bg-cream-light">
      <div className="max-w-7xl mx-auto section-padding">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
              Our Menu
            </span>
            <h2 className="heading-lg mb-4">From Our Kitchen</h2>
            <p className="body-md max-w-2xl mx-auto">
              Handcrafted pastries, thoughtfully prepared meals and perfectly brewed coffee — every item made with care and intention.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Tabs */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 font-body text-sm tracking-wider uppercase transition-all duration-300 ${
                  active === cat
                    ? "bg-coffee-brown text-cream shadow-md"
                    : "bg-transparent text-dark/50 hover:text-coffee-brown hover:bg-coffee-brown/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {menuData[active]?.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group flex gap-5 p-5 bg-cream rounded-sm border border-coffee-brown/5 hover:border-coffee-brown/15 hover:shadow-lg hover:shadow-coffee-brown/5 transition-all duration-300"
              >
                {/* Item Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-coffee-brown group-hover:text-coffee-dark transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-body text-sm font-semibold text-coffee-brown whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-body text-sm text-dark/50 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
