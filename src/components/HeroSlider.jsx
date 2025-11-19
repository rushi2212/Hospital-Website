import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { i18n } = useTranslation();

  const content =
    i18n.language === "mr"
      ? {
          title: "रामेष्ट आयुर्वेद & पंचकर्म केंद्र",
          subtitle: "पारंपारिक आयुर्वेदिक उपचार आणि निसर्गरम्य आरोग्य",
          tagline: "आरोग्याचा मार्ग, निसर्गाच्या मार्गदर्शनाने",
        }
      : {
          title: "RAMESHTA AYURVED & PANCHAKARMA KENDRA",
          subtitle: "Traditional Ayurvedic Treatments & Holistic Wellness",
          tagline: "Path to Health, Guided by Nature",
        };

  // Image paths - replace with your actual images
  const slideImages = [
    "https://img.freepik.com/premium-photo/table-with-candles-bowls-food-it-flowers-table-top-person_961147-41790.jpg",
    "https://th.bing.com/th/id/OIP.Wnnq_yqMfVYup5xOcE_B4wHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://media.istockphoto.com/id/606225852/photo/spa-treatment-and-massage-thailand-soft-and-select-focus.jpg?s=612x612&w=0&k=20&c=iBBvIEVjW99XQzxUUAOtNnXdF5E9SJluAi99sqAM6MA=",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen overflow-x-hidden overflow-y-hidden">
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

      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>

      {/* Hero Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl">
          {content.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-2 md:mb-3 drop-shadow-lg max-w-3xl">
          {content.subtitle}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-emerald-200 drop-shadow-lg font-medium">
          {content.tagline}
        </p>
      </div>

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
