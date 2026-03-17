"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const reviews = [
  {
    name: "Ama K.",
    quote: "Hands down the best coffee in Accra. The ambiance is incredible — I come here every weekend.",
    stars: 5,
  },
  {
    name: "Kwame A.",
    quote: "Theia has become my go-to workspace. Great WiFi, amazing pastries, and the staff is so friendly.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    quote: "The brunch menu is divine. The French toast alone is worth the visit. Such a beautiful space.",
    stars: 5,
  },
  {
    name: "Daniel O.",
    quote: "I hosted a creative meetup here and it was perfect. The private area is well thought out.",
    stars: 4,
  },
  {
    name: "Efua B.",
    quote: "From the pour-over coffee to the tiramisu — everything is crafted with so much love and care.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-dark/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="bg-cream p-8 border border-coffee-brown/5 hover:border-coffee-brown/15 hover:shadow-lg hover:shadow-coffee-brown/5 transition-all duration-300 group"
    >
      <StarRating count={review.stars} />
      <p className="font-body text-base text-dark/70 leading-relaxed mt-4 mb-6 italic">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-coffee-brown/5">
        <div className="w-10 h-10 rounded-full bg-coffee-brown/10 flex items-center justify-center">
          <span className="font-display text-sm font-bold text-coffee-brown">
            {review.name.charAt(0)}
          </span>
        </div>
        <p className="font-body text-sm font-medium text-coffee-brown">
          {review.name}
        </p>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  return (
    <section className="section-spacing section-padding bg-cream-light">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4 block">
              Reviews
            </span>
            <h2 className="heading-lg mb-4">What People Say</h2>
            <p className="body-md max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from our community.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
