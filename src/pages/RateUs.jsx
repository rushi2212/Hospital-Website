import React from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";

const RateUs = () => {
  const { i18n } = useTranslation();

  const content =
    i18n.language === "mr"
      ? {
          title: "आम्हाला रेट करा",
          subtitle: "तुमचा अभिप्राय आमच्यासाठी महत्त्वाचा आहे",
          googleLabel: "गूगल बिजनेस",
          googleButton: "आमचा रेव्यु करा",
          instagramLabel: "इन्स्टाग्राम",
          instagramButton: "आमला लाइक करा",
        }
      : {
          title: "Rate Us",
          subtitle: "Your feedback means everything to us",
          googleLabel: "Google Business",
          googleButton: "Review Us",
          instagramLabel: "Instagram",
          instagramButton: "Like Us",
        };

  const googleLink =
    "https://www.google.com/maps/place/Dnyanesh+Ayurvedic+Clinic+and+Panchakarma+Center/@18.6186856,73.8737273,17z/data=!4m8!3m7!1s0x3bc2c7ddfc0ae30f:0xccba766440240068!8m2!3d18.6186856!4d73.8737273!9m1!1b1!16s%2Fg%2F11kn8txr7k?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";
  const instagramLink =
    "https://www.instagram.com/dnyanesh_ayurveda_8850316740/?utm_source=qr&igsh=M25jbm5vb2czenA4#";

  return (
    <section
      id="rateus"
      className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-emerald-700 mb-4">
          {content.title}
        </h2>
        <p className="text-center text-gray-600 mb-12 md:mb-16 text-sm md:text-base">
          {content.subtitle}
        </p>

        {/* Rate Us Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
          {/* Google Business Card */}
          <a
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-100 p-5 md:p-6 hover:shadow-2xl transition-all duration-300 h-full transform hover:scale-105">
              <div className="flex flex-col items-center h-full">
                {/* Google Logo */}
                <div className="mb-3">
                  <svg
                    className="w-14 h-14 md:w-16 md:h-16 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>

                {/* Label */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 text-center">
                  {content.googleLabel}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-4 text-sm grow flex items-center justify-center">
                  {i18n.language === "mr"
                    ? "गूगल बिजनेसवर आमचा रेव्यु करा आणि इतरांना मदत करा"
                    : "Leave a review on Google Business and help others find us"}
                </p>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-semibold py-2 px-4 text-sm rounded-lg transition-all duration-300 transform hover:shadow-lg">
                  {content.googleButton}
                </button>
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-100 p-5 md:p-6 hover:shadow-2xl transition-all duration-300 h-full transform hover:scale-105">
              <div className="flex flex-col items-center h-full">
                {/* Instagram Logo with original gradient */}
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-14 h-14 md:w-16 md:h-16"
                    viewBox="0 0 24 24"
                    fill="url(#instagramGradient)"
                  >
                    <defs>
                      <linearGradient
                        id="instagramGradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="5%" stopColor="#fa7e1e" />
                        <stop offset="45%" stopColor="#d92e7f" />
                        <stop offset="60%" stopColor="#9b36b7" />
                        <stop offset="90%" stopColor="#515bd4" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </div>

                {/* Label */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 text-center">
                  {content.instagramLabel}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-4 text-sm grow flex items-center justify-center">
                  {i18n.language === "mr"
                    ? "आमच्या इन्स्टाग्राम पेजला लाइक करा आणि फॉलो करा"
                    : "Follow us on Instagram and like our page"}
                </p>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-semibold py-2 px-4 text-sm rounded-lg transition-all duration-300 transform hover:shadow-lg">
                  {content.instagramButton}
                </button>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-emerald-100">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm md:text-base">
              {i18n.language === "mr"
                ? "तुमचा प्रतिक्रिया आमचे सेवा सुधारण्यास मदत करते"
                : "Your feedback helps us improve our services"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateUs;
