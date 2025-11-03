import React from "react";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { i18n } = useTranslation();

  const c =
    i18n.language === "mr"
      ? {
          title: "गॅलरी",
          subtitle: "आमच्या क्लिनिकची एक झलक",
        }
      : {
          title: "Gallery",
          subtitle: "A Glimpse of Our Clinic",
        };

  return (
    <section
      id="gallery"
      className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-700 mb-4">
          {c.title}
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-10">
          {c.subtitle}
        </p>

        {/* Image Card */}
        <div className="relative group max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-emerald-100">
          <img
            src="/images/Untitled design.jpg"
            alt="Clinic Interior"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        </div>

        {/* Decorative Border */}
        <div className="mt-10 flex justify-center">
          <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
