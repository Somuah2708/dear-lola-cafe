"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const categories = ["Coffees & Teas", "Breakfast All Day", "Sandwiches & Wraps", "Comfort Food", "Thirst Quenchers"];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuData: Record<string, MenuItem[]> = {
  "Coffees & Teas": [
    { name: "Espresso", description: "Regular single or double shot of pure coffee", price: "GHS 30", image: "/images/menu/espresso.jpg" },
    { name: "Café Latte", description: "Smooth espresso with steamed milk", price: "GHS 60", image: "/images/menu/cortado.jpg" },
    { name: "Flat White", description: "Rich espresso topped with velvety micro-foam", price: "GHS 65", image: "/images/menu/flat-white.jpg" },
    { name: "Cappuccino", description: "Classic espresso with steamed milk and deep foam", price: "GHS 55", image: "/images/menu/iced-latte.jpg" },
    { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "GHS 55", image: "/images/menu/matcha.jpg" },
    { name: "Ginger Mix Tea", description: "Hot, soothing ginger infused tea", price: "GHS 60", image: "/images/menu/pour-over.jpg" },
  ],
  "Breakfast All Day": [
    { name: "The Bombastic", description: "Smashed avocado, poached eggs, bacon, mozzarella bite, tomato on sour dough toast", price: "GHS 150", image: "/images/menu/avocado-toast.jpg" },
    { name: "The Fantastique", description: "Smoked salmon on a bed of sour dough toast, slathered with cream cheese, sliced avocados, capers, pickles, herbs, onions", price: "GHS 200", image: "/images/menu/french-toast.jpg" },
    { name: "The American", description: "Eggs your way, sautéed mushrooms & potatoes, beef bacon, toast, baked beans, sausages", price: "GHS 170", image: "/images/menu/eggs-benedict.jpg" },
    { name: "Enjoyment", description: "Layered pancakes with cheese (mozzarella & cheddar), beef bacon, chicken strips, hash browns, mushroom", price: "GHS 150", image: "/images/menu/acai-bowl.jpg" },
    { name: "The Perfect Pancake Stack", description: "Classic stack with syrup or seasonal fruits", price: "GHS 100", image: "/images/menu/banana-bread.jpg" },
  ],
  "Sandwiches & Wraps": [
    { name: "Goat Cheese", description: "With tangy arugula & cranberries", price: "GHS 100", image: "/images/menu/chicken-wrap.jpg" },
    { name: "Oven Grilled Chicken", description: "In a cashew basil pesto", price: "GHS 110", image: "/images/menu/caprese.jpg" },
    { name: "Egg Club", description: "The classic way", price: "GHS 90", image: "/images/menu/soup.jpg" },
    { name: "Beef Shawarma", description: "With hummus & wedges", price: "GHS 125", image: "/images/menu/chicken-wrap.jpg" },
    { name: "Falafel Wrap", description: "With hummus & wedges", price: "GHS 110", image: "/images/menu/croissant.jpg" },
  ],
  "Comfort Food": [
    { name: "Chicken Escalope Love", description: "With wedge potatoes & coleslaw", price: "GHS 170", image: "/images/menu/soup.jpg" },
    { name: "Champion Jollof", description: "With oven baked chicken & chilli", price: "GHS 150", image: "/images/menu/avocado-toast.jpg" },
    { name: "Chicken Stir Fry Cravings", description: "With veggie fried rice", price: "GHS 160", image: "/images/menu/french-toast.jpg" },
    { name: "Fish & Chip Chop", description: "Pub grub revisited", price: "GHS 170", image: "/images/menu/acai-bowl.jpg" },
  ],
  "Thirst Quenchers": [
    { name: "Bananarama Smoothie", description: "Banana, strawberry, mango", price: "GHS 70", image: "/images/menu/iced-latte.jpg" },
    { name: "Theia Twist Mocktail", description: "Sugar cane, grenadine, lemon, iced tea", price: "GHS 80", image: "/images/menu/tiramisu.jpg" },
    { name: "Berry Lemonade", description: "Strawberry with vodka, syrup, fresh mint", price: "GHS 130", image: "/images/menu/cheesecake.jpg" },
    { name: "Piña Colada", description: "Fresh pineapple juice, coconut cream, rum", price: "GHS 120", image: "/images/menu/fondant.jpg" },
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
              Afro-Mediterranean inspired dishes crafted with wholesome, vibrant ingredients — from our signature sourdough creations to freshly baked favourites.
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
