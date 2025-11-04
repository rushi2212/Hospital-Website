import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Image paths - replace with your actual images
  const slideImages = [
    "https://img.freepik.com/premium-photo/ayurveda-india-symbol-background_1342603-1005.jpg",
    "http://krishnaayurved.com/cdn/shop/articles/Ayurveda_in_Modern_Life.jpg?v=1711512483",
    "https://cdn.pixabay.com/photo/2023/08/29/18/29/ai-generated-8221937_1280.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen overflow-hidden">
      {/* Image Slides */}
      {slideImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Ayurvedic treatment scene ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 shadow-lg ${
              index === currentSlide
                ? "w-12 bg-white"
                : "w-3 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;