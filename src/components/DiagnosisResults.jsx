import React from "react";
import { useTranslation } from "react-i18next";

const DiagnosisResults = () => {
  const { i18n } = useTranslation();

  const content =
    i18n.language === "mr"
      ? {
          title: "आमचे निदान परिणाम",
          subtitle: "खालील प्रतिमांमध्ये आमचे निदान परिणाम पाहा",
        }
      : {
          title: "Our Diagnosis Results",
          subtitle: "Browse the detailed diagnosis outcomes below",
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-700 mb-3">
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
              className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 min-h-[360px] md:min-h-[420px] flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Diagnosis Result ${index + 1}`}
                className="w-full h-full object-contain border-3 border-emerald-300 rounded-lg"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x600?text=Diagnosis")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosisResults;
