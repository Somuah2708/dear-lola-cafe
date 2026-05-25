"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const categories = ["Coffees & Hot Drinks", "Pastries & Bakes", "Sandwiches & Focaccia", "Mains", "Cold Drinks", "Desserts"];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuData: Record<string, MenuItem[]> = {
  "Coffees & Hot Drinks": [
    { name: "Americano", description: "Clean, bold espresso topped with hot water", price: "GHS 20", image: "/images/dl-latte.jpg" },
    { name: "Café Latte", description: "Double shot espresso with silky steamed milk", price: "GHS 30", image: "/images/dl-latte.jpg" },
    { name: "Flat White", description: "Rich espresso with velvety micro-foam", price: "GHS 30", image: "/images/dl-latte.jpg" },
    { name: "Cappuccino", description: "Classic espresso with steamed milk and thick foam", price: "GHS 28", image: "/images/dl-latte.jpg" },
    { name: "Ginger Infusion", description: "Warming ginger and lemon infused hot tea", price: "GHS 22", image: "/images/dl-food-3.jpg" },
    { name: "Chamomile Tea", description: "Soothing floral herbal tea, served hot", price: "GHS 20", image: "/images/dl-food-3.jpg" },
  ],
  "Pastries & Bakes": [
    { name: "Plain Croissant", description: "Buttery, hand-rolled croissant baked fresh each morning", price: "GHS 12", image: "/images/dl-food-2.jpg" },
    { name: "Pain au Chocolat", description: "Warm, flaky pastry filled with rich dark chocolate", price: "GHS 14", image: "/images/dl-food-2.jpg" },
    { name: "Sakura Pink Croissant", description: "Our signature rose-tinted croissant — delicate, beautiful and irresistible", price: "GHS 18", image: "/images/dl-food-2.jpg" },
    { name: "Nutella Crêpe", description: "Thin, golden crêpe with rich Nutella and a dusting of icing sugar", price: "GHS 24", image: "/images/dl-food-1.jpg" },
    { name: "Waffles", description: "Golden waffles with seasonal toppings and syrup — made to order", price: "GHS 25", image: "/images/dl-food-1.jpg" },
    { name: "French Toast", description: "Thick-cut brioche dipped in egg custard, served with fresh berries", price: "GHS 25", image: "/images/dl-food-1.jpg" },
  ],
  "Sandwiches & Focaccia": [
    { name: "Smoked Salmon Focaccia", description: "House-baked focaccia with smoked salmon, cream cheese, capers and herbs", price: "GHS 35", image: "/images/dl-food-4.png" },
    { name: "Avocado Toast", description: "Smashed avocado on toasted sourdough with a soft egg and chilli flakes", price: "GHS 28", image: "/images/dl-food-5.jpg" },
    { name: "Egg & Avo Focaccia", description: "Our house focaccia loaded with egg, avocado and fresh greens", price: "GHS 30", image: "/images/dl-food-6.png" },
    { name: "Chicken Pesto Sandwich", description: "Grilled chicken in cashew basil pesto on toasted sourdough", price: "GHS 32", image: "/images/dl-food-4.png" },
    { name: "Goat Cheese & Arugula", description: "Whipped goat cheese with peppery arugula and cranberries", price: "GHS 28", image: "/images/dl-food-4.png" },
  ],
  "Mains": [
    { name: "Creamy Mushroom Prawn Pasta", description: "Our signature — creamy sauce, king prawns, sautéed mushrooms and fresh pasta", price: "GHS 55", image: "/images/dl-food-4.png" },
    { name: "Prawn Salad", description: "Fresh garden leaves with seasoned prawns, cherry tomatoes and lemon dressing", price: "GHS 45", image: "/images/dl-food-3.jpg" },
    { name: "Chicken Focaccia Plate", description: "Herb-roasted chicken on house focaccia with garden salad and aioli", price: "GHS 50", image: "/images/dl-food-6.png" },
    { name: "Pasta Arrabbiata", description: "Hand-rolled pasta in a slow-cooked tomato and chilli sauce", price: "GHS 40", image: "/images/dl-food-4.png" },
  ],
  "Cold Drinks": [
    { name: "Butterfly Pea Lemonade", description: "Stunning violet-blue lemonade that changes colour — floral and refreshing", price: "GHS 30", image: "/images/dl-food-3.jpg" },
    { name: "Mint Lemonade", description: "Fresh mint steeped with lemon and a touch of honey, served over ice", price: "GHS 25", image: "/images/dl-food-3.jpg" },
    { name: "Strawberry Milkshake", description: "Creamy strawberry blend, thick and indulgent", price: "GHS 30", image: "/images/dl-food-3.jpg" },
    { name: "Iced Latte", description: "Chilled espresso poured over ice with cold milk", price: "GHS 28", image: "/images/dl-latte.jpg" },
    { name: "Hibiscus Cooler", description: "Floral hibiscus with ginger and a squeeze of lime, served tall", price: "GHS 25", image: "/images/dl-food-3.jpg" },
  ],
  "Desserts": [
    { name: "Classic Cheesecake", description: "Creamy cheesecake on a buttery biscuit base — rich and satisfying", price: "GHS 25", image: "/images/dl-food-1.jpg" },
    { name: "Seasonal Fruit Tart", description: "Crisp pastry shell with vanilla cream and fresh seasonal fruit", price: "GHS 22", image: "/images/dl-food-1.jpg" },
    { name: "Chocolate Brownie", description: "Dense, fudgy chocolate brownie served warm with cream", price: "GHS 20", image: "/images/dl-food-1.jpg" },
    { name: "Granola Yoghurt Cup", description: "House granola with thick yoghurt and tropical fruit compote", price: "GHS 18", image: "/images/dl-food-1.jpg" },
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
              Everything on our menu is handmade from scratch — from the croissants we roll each morning to the pasta we fold by hand. Made with love, served with joy.
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
