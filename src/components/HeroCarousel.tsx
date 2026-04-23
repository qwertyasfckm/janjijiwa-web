"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  color: string;
}

const slides = [
  { id: 1, image: "/slide-1.webp" },
  { id: 2, image: "/slide-2.webp" },
  { id: 3, image: "/slide-3.webp" },
  { id: 4, image: "/slide-4.webp" },
];

export default function HeroCarousel() {
  // Add double clones for a perfectly seamless peek effect: [3, 4, 1, 2, 3, 4, 1, 2]
  const extendedSlides = [
    slides[slides.length - 2],
    slides[slides.length - 1],
    ...slides,
    slides[0],
    slides[1],
  ];

  const [current, setCurrent] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  }, [isTransitioning]);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  // Handle seamless loop after transition ends
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Jump if we reach the double-cloned boundaries
    if (current <= 1) {
      setCurrent(current + slides.length);
    } else if (current >= slides.length + 2) {
      setCurrent(current - slides.length);
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section className="relative w-full h-[160px] sm:h-[240px] md:h-[320px] lg:h-[380px] overflow-hidden bg-white py-2 md:py-4">
      {/* Slides Container */}
      <div 
        className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-out" : ""}`}
        style={{ 
          transform: `translateX(calc(-${current * 75}% + 12.5%))`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => {
          const realIndex = ((current - 2) % slides.length + slides.length) % slides.length;
          const slideRealIndex = ((index - 2) % slides.length + slides.length) % slides.length;
          const isActive = realIndex === slideRealIndex;
          
          return (
            <div 
              key={`${slide.id}-${index}`} 
              className="min-w-[75%] md:min-w-[75%] h-full relative px-1 md:px-3 transition-opacity duration-500 overflow-hidden"
              style={{ opacity: isActive ? 1 : 0.4 }}
            >
              <img 
                src={slide.image} 
                alt={`Slide ${slide.id}`} 
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-[2%] md:px-[6%] pointer-events-none">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-white shadow-xl text-[#222222] hover:bg-[#FF3548] hover:text-white transition-all pointer-events-auto border border-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full bg-white shadow-xl text-[#222222] hover:bg-[#FF3548] hover:text-white transition-all pointer-events-auto border border-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => {
          const realIndex = ((current - 2) % slides.length + slides.length) % slides.length;
          const isActive = realIndex === i;
          return (
            <button
              key={i}
              onClick={() => {
                if (isTransitioning || isActive) return;
                setIsTransitioning(true);
                setCurrent(i + 2);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "bg-[#FF3548] w-10" : "bg-[#222222]/20 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
