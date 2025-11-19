import React, { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const PostersGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { i18n } = useTranslation();

  const content =
    i18n.language === "mr"
      ? {
          title: "आमचे पोस्टर्स",
          subtitle: "संपूर्ण आकार पाहण्यासाठी कोणत्याही प्रतिमेवर क्लिक करा",
        }
      : {
          title: "Our Posters",
          subtitle: "Click on any image to view in full size",
        };

  // All posters including main image
  const allPosters = [
    "/posters/main-img.jpg",
    "/posters/img1.jpg",
    "/posters/img2.jpg",
    "/posters/img3.jpg",
    "/posters/img4.jpg",
    "/posters/img5.jpg",
    "/posters/img6.jpg",
    "/posters/img7.jpg",
    "/posters/img8.jpg",
    "/posters/img9.jpg",
    "/posters/img10.jpg",
    "/posters/img11.jpg",
    "/posters/img12.jpg",
    "/posters/img13.jpg",
    "/posters/img14.jpg",
    "/posters/img15.jpg",
    "/posters/img16.jpg",
    "/posters/img17.jpg",
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

        {/* Posters Grid - Mobile: 2 cols, Desktop: 5 cols */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
          {/* Main Image - Full width on mobile, 2x2 on desktop */}
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group col-span-2 md:row-span-2 h-[280px] md:h-[572px] p-2"
            onClick={() => setSelectedImage(allPosters[0])}
          >
            <img
              src={allPosters[0]}
              alt="Main Poster"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/350x656?text=Main")
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>

          {/* 3 Small Posters - Right side on desktop, 2 per row on mobile */}
          {allPosters.slice(1, 4).map((poster, index) => (
            <div
              key={index + 1}
              className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group col-span-1 h-[280px] p-2"
              onClick={() => setSelectedImage(poster)}
            >
              <img
                src={poster}
                alt={`Poster ${index + 2}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/280x320?text=Poster")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}

          {/* Remaining 14 Posters - 2 per row on mobile, 5 per row on desktop */}
          {allPosters.slice(4).map((poster, index) => (
            <div
              key={index + 4}
              className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group col-span-1 h-[280px] p-2"
              onClick={() => setSelectedImage(poster)}
            >
              <img
                src={poster}
                alt={`Poster ${index + 5}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/200x280?text=Poster")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Zoomed poster"
              className="w-full h-full object-contain max-h-[85vh]"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/800x600?text=Error+Loading")
              }
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full transition-colors duration-200 shadow-lg"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostersGallery;
