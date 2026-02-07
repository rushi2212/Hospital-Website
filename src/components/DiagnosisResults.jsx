import React, { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const DiagnosisResults = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { i18n } = useTranslation();

  const content =
    i18n.language === "mr"
      ? {
          title: "आमचे निदान परिणाम",
          subtitle: "संपूर्ण आकार पाहण्यासाठी कोणत्याही प्रतिमेवर क्लिक करा",
        }
      : {
          title: "Our Diagnosis Results",
          subtitle: "Click on any image to view in full size",
        };

  const diagnosisImages = [
    "/result/dg1.jpeg",
    "/result/dg2.jpeg",
    "/result/dg3.jpeg",
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-700 mb-3">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>

        {/* Diagnosis Results Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {diagnosisImages.map((image, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image}
                  alt={`Diagnosis Result ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x300?text=Diagnosis")
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors duration-200 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default DiagnosisResults;
