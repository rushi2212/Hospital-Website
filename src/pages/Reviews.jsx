import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(4);

  const c =
    i18n.language === "mr"
      ? {
          title: "रुग्णांचे अनुभव",
          subtitle: "आमच्या रुग्णांनी सांगितलेले त्यांचे अनुभव",
          trustBadge: "1000+ समाधानी रुग्ण",
          reviewsData: [
            {
              name: "सीमा पाटील",
              image: "https://i.pravatar.cc/150?img=1",
              text: "मला गंभीर सांधेदुखीची समस्या होती. वैद्य अनुराधा देशमुख यांच्या पंचकर्म उपचारांनी माझ्या जीवनात मोठा बदल घडवला. आता मी पूर्णपणे वेदनामुक्त आहे!"
            },
            {
              name: "अमोल देशमुख",
              image: "https://i.pravatar.cc/150?img=12",
              text: "मधुमेह आणि रक्तदाब नियंत्रणासाठी मी येथे उपचार घेतले. डॉक्टरांच्या मार्गदर्शनाने माझी प्रकृती आश्चर्यकारकपणे सुधारली आहे."
            },
            {
              name: "रेणुका जोशी",
              image: "https://i.pravatar.cc/150?img=5",
              text: "PCOD च्या समस्येवर उत्तम उपचार मिळाले. डॉक्टर खूप काळजीपूर्वक सर्व गोष्टी समजावून सांगतात. संपूर्णपणे समाधानी आहे!"
            },
            {
              name: "राजेश कुलकर्णी",
              image: "https://i.pravatar.cc/150?img=13",
              text: "माझ्या मुलाला जुनाट खोकल्याची समस्या होती. येथील आयुर्वेदिक उपचारांमुळे त्याची प्रकृती पूर्णपणे बरी झाली."
            },
            {
              name: "प्रिया शर्मा",
              image: "https://i.pravatar.cc/150?img=9",
              text: "त्वचेच्या समस्यांसाठी अनेक ठिकाणी उपचार घेतले पण येथे मिळालेल्या आयुर्वेदिक उपचारांनी खरोखर चमत्कार केला!"
            },
            {
              name: "संदीप वाघमारे",
              image: "https://i.pravatar.cc/150?img=14",
              text: "मणक्याच्या दुखण्यावर स्नेहन आणि स्वेदन उपचार घेतले. परिणाम अप्रतिम आहेत. अतिशय व्यावसायिक सेवा!"
            },
            {
              name: "माया पवार",
              image: "https://i.pravatar.cc/150?img=20",
              text: "मासिक पाळीच्या अनियमिततेवर उत्कृष्ट उपचार मिळाले. डॉक्टर अत्यंत धैर्यवान आणि कुशल आहेत."
            },
            {
              name: "विक्रम जाधव",
              image: "https://i.pravatar.cc/150?img=15",
              text: "आम्लपित्ताच्या तक्रारीवर घरगुती उपचार आणि औषधांनी खूप आराम मिळाला. क्लिनिकची स्वच्छता उत्तम आहे!"
            }
          ],
        }
      : {
          title: "Patient Reviews",
          subtitle: "What our patients say about their experience",
          trustBadge: "1000+ Satisfied Patients",
          reviewsData: [
            {
              name: "Seema Patil",
              image: "https://i.pravatar.cc/150?img=1",
              text: "I was suffering from severe joint pain. Dr. Anuradha Deshmukh's Panchakarma therapy transformed my life. I'm completely pain-free now!"
            },
            {
              name: "Amol Deshmukh",
              image: "https://i.pravatar.cc/150?img=12",
              text: "I came here for diabetes and blood pressure management. Under the doctor's guidance, my health has improved remarkably."
            },
            {
              name: "Renuka Joshi",
              image: "https://i.pravatar.cc/150?img=5",
              text: "Received excellent treatment for PCOD. The doctor explains everything with great care. Completely satisfied with the service!"
            },
            {
              name: "Rajesh Kulkarni",
              image: "https://i.pravatar.cc/150?img=13",
              text: "My son had chronic cough issues. The Ayurvedic treatment here completely cured his condition. Highly recommended!"
            },
            {
              name: "Priya Sharma",
              image: "https://i.pravatar.cc/150?img=9",
              text: "Tried many places for skin problems but the Ayurvedic treatment here truly worked like magic! Amazing results."
            },
            {
              name: "Sandeep Waghamare",
              image: "https://i.pravatar.cc/150?img=14",
              text: "Underwent Snehana and Swedana therapy for spine pain. The results are outstanding. Very professional service!"
            },
            {
              name: "Maya Pawar",
              image: "https://i.pravatar.cc/150?img=20",
              text: "Got excellent treatment for menstrual irregularities. The doctor is extremely patient and skilled."
            },
            {
              name: "Vikram Jadhav",
              image: "https://i.pravatar.cc/150?img=15",
              text: "Home remedies and medicines for acidity gave me great relief. The clinic's cleanliness is excellent!"
            }
          ],
        };

  // Responsive card count
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else if (window.innerWidth < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= c.reviewsData.length - cardsPerView ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerView, c.reviewsData.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev <= 0 ? c.reviewsData.length - cardsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    const maxIndex = c.reviewsData.length - cardsPerView;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const totalDots = Math.max(1, c.reviewsData.length - cardsPerView + 1);

  return (
    <section id="reviews" className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-emerald-700 mb-4">
          {c.title}
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
          {c.subtitle}
        </p>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors -ml-5 md:block hidden"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors -mr-5 md:block hidden"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {c.reviewsData.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / cardsPerView}% - ${
                      (cardsPerView - 1) * 24 / cardsPerView
                    }px)`,
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-100 overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col items-center bg-gradient-to-br from-emerald-400 to-teal-500 p-4 md:p-6">
                      <div className="relative mb-3">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-md">
                          <svg
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-bold text-white text-base md:text-lg text-center">
                        {review.name}
                      </h4>
                    </div>

                    <div className="p-4 md:p-6">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-500 text-2xl leading-none flex-shrink-0">
                          "
                        </span>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                          {review.text}
                        </p>
                      </div>
                      <div className="flex gap-1 mt-4 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors"
            >
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors"
            >
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalDots)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-emerald-600 w-8"
                  : "bg-emerald-300 hover:bg-emerald-400"
              }`}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-emerald-100">
            <span className="text-2xl">✨</span>
            <span className="text-emerald-700 font-semibold text-sm md:text-base">
              {c.trustBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
