import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ReviewCard = ({ review, expanded, onToggle }) => {
  const isLong = review.text.length > 150;
  const displayText = expanded
    ? review.text
    : review.text.slice(0, 150) + (isLong ? "..." : "");

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-100 overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300 flex flex-col">
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

      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-2 flex-grow">
          <span className="text-emerald-500 text-2xl leading-none flex-shrink-0">
            "
          </span>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
            {displayText}
          </p>
        </div>
        {isLong && (
          <button
            onClick={onToggle}
            className="mt-3 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
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
  );
};

const Reviews = () => {
  const { i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [expandedReviews, setExpandedReviews] = useState({});

  const c =
    i18n.language === "mr"
      ? {
          title: "रुग्णांचे अनुभव",
          subtitle: "आमच्या रुग्णांनी सांगितलेले त्यांचे अनुभव",
          trustBadge: "1000+ समाधानी रुग्ण",
          reviewsData: [
            {
              name: "दिनेश देशमुख",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=dinesh&expression=smile",
              text: "डॉ. अनुराधा देशमुखांच्या कौशल्याने मी पूर्णपणे मोहित झालो! ५ वर्षे कटू सायाटिका वेदनेमुळे त्रस्त होऊन मी शेवटचा प्रयत्न म्हणून डॉ. अनुराधा देशमुखांकडे गेलो. त्यांचे सखोल विश्लेषण आणि व्यक्तिगत उपचारामुळे माझे वेदन नाटकीयरित्या कमी झाले - १० मधून १ किंवा २ पर्यंत! एक सल्ला पुरेसा होता. तीव्र वेदनामुक्तीसाठी अत्यंत शिफारस करते. धन्यवाद, डॉ. अनुराधा देशमुख!",
            },
            {
              name: "आदेश बोरहडे",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=adesh&expression=smile",
              text: "डॉक्टर खरोखरच छान होती आणि छान सल्ला दिला. डॉक्टरचे परिणाम अत्यंत उत्कृष्ट आहेत.",
            },
            {
              name: "श्वेता वासु",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=shweta&expression=smile",
              text: "सर्वप्रथम मी तिला ५ ताऱ्यापेक्षा जास्त रेटिंग देऊ शकलो असते. ती अनंत तारकांच्या योग्य आहे. ती आमच्या जीवनात एक देवदूत आहे. ती अत्यंत मैत्रीपूर्ण डॉक्टर आणि मी पाहिलेली सर्वोत्तम डॉक्टरांपैकी एक आहे. सर्व चिंता ऐकते आणि सर्वकाही समजण्यायोग्य भाषेत समजावून सांगते. ती अत्यंत प्रामाणिक आहे, रुग्णांसाठी करुणामय आणि महान विनम्रतेने भरलेली आहे! उत्तम डॉक्टर आणि उत्तम उपचार, स्टाफ देखील छान आहे. तुम्ही प्रदान केलेल्या असाधारण सहायतेबद्दल मी कृतज्ञ आहे. धन्यवाद रुग्ण काळजीसाठी तुमच्या निरंतर समर्पणासाठी. मी सर्वांना तिची शिफारस करते.",
            },
            {
              name: "गीता पाटील",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=geeta&expression=smile",
              text: "डॉ. अनुराधा मॅम अत्यंत मैत्रीपूर्ण आहेत आणि शांतीपूर्वक आमच्या समस्यांना ऐकतात. मी पंचकर्म उपचार बस्ती ८ दिवस केली आहे. आता मी अत्यंत आरामदायक अनुभव करत आहे. अत्यंत छान अनुभव. धन्यवाद मॅम.",
            },
            {
              name: "ज्योती चव्हाण",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=jyoti&expression=smile",
              text: "मी प्रसवानंतर केसांचे गिरणे समस्येसाठी डॉक्टरांकडे गेलो. मला मोठ्या प्रमाणात केस गळत आहेत. मी बरेच उपचार केले पण कोणताही परिणाम नाही. जेव्हा मी डॉक्टर अनुराधाकडे गेलो तेव्हा मी उपचारांसाठी माझा विश्वास पूर्णपणे गमावला, पण तिने माझा विश्वास परत केला. अत्यंत छान आणि शांतीपूर्वक ती मेरे सल्लामसलतीची केली. माझा उपचार सुरू केला आता मी तिच्या उपचारांचा आनंद घेत आहे. केस गिरणे समस्या नाही तसेच माझ्या केसांची रचना सुधारली आहे. धन्यवाद डॉक्टर. अत्यंत शिफारस करते.",
            },
            {
              name: "एन मोहोड",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=mohod&expression=smile",
              text: "अत्यंत अनुभवी आणि छान मानसिकतेची डॉक्टर.....",
            },
            {
              name: "गजानन देशमुख",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=gajanan&expression=smile",
              text: "सर्वोत्तम आयुर्वेद डॉक्टर, या लॉकडाउनवी काळात वृद्ध लोकांना खूप कष्ट होत आहेत, घरी बसले आहेत त्यांना पायांद्ये सूज समस्या येत आहे. डॉब. अनुराधा यांनी योग्य आहार आण औषध दिले, ते खरोखर काम करते आहे लॉकडाउनवी काळात आण माझ्या पित्यांडवी पूर्णपणे बरे ङले. अतिशय धन्यवाद. आम्लपित्त हा लॉकडाउनवी काळात एक मोठी समस्या आहे. डॉक्टरांनी योग्य आहार आण औषध दिले आण मला राहत मळली. खरोखरच हे सर्वोत्तम आहे आण आम्ही आम्लपित्त नियंत्रित केले आहे. अतिशय धन्यवाड.",
            },
            {
              name: "प्रीती सोनार",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=preeti&expression=smile",
              text: "सर्वोत्तम आयुर्वेद डॉक्टर, मी १३ वर्षे आहे, मला मागील १ वर्षत PCOD आण PCOS समस्या होत आहे. या १ वर्षांत मी अनेक डॉक्टरांकडे गेलो पण मला कोणताही सकारत्मक प्रतिक्रिया आण परिणाम मळले नाहीत. मी अत्यंत निराश, उदास होउन गेलो, त्या परिस्थीतीत मला काय करायचे हे समजले नाही. तेव्ही मी अनुराधा मॅरला भेतलो आण माझ्या समस्यांकुरुं सांगितले आण जा पड्धतीने ती मेरे सल्लामसलतीक केशली आण माझ्या समस्या समडते हे अत्यंत आश्चर्यकारक आहे, तिच्या सल्ल्यानंतर मी माझा निराशावाद, नकारात्मक विचार पूर्णपणे गमवला. मी २ महीने उपशिषण केले आण PCOD समस्येत द्रुत परिणाम दिसले. आता मला कोणताही मासिक समस्या नाही. आण मागील २ महीन्यांत माझे मासिक पाळी साधारण आण नल आहे. अतिशय धन्यवाड.....",
            },
          ],
        }
      : {
          title: "Patient Reviews",
          subtitle: "What our patients say about their experience",
          trustBadge: "1000+ Satisfied Patients",
          reviewsData: [
            {
              name: "Dinesh Deshmukh",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=dinesh&expression=smile",
              text: "I'm blown away by Dr. Anuradhaa Deshmukh's expertise! After suffering from excruciating sciatica pain for 5 years, I consulted Dr. Anuradhaa Deshmukh as a last resort. With a thorough analysis and personalized treatment, I'm thrilled to report that the pain has reduced dramatically - from a 10 to a 1 or 2! A single consultation was all it took. Highly recommended for natural and effective relief from chronic pain. Thank you, Dr. Anuradhaa Deshmukh 🙏💯",
            },
            {
              name: "Adesh Borhade",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=adesh&expression=smile",
              text: "Doctor was really nice and give good advice. And results of doctor is absolutely fantastic.",
            },
            {
              name: "Shweta Vasu",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=shweta&expression=smile",
              text: "First of all, I wish I could give her more than 5 stars. She is worth infinite stars⭐. She is an angel in our life. She is a very friendly doctor & one of the finest doctors I have seen. Hears all your concerns and explains you everything in understandable terms. She is very honest, full of compassion for her patients with great humility! Great doctor and great treatment, And Staff is also good. I am grateful for the exceptional support you provided during my time at your hospital. Thank you for your unwavering dedication to patient care. I highly recommend her to everyone.",
            },
            {
              name: "Geeta Patil",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=geeta&expression=smile",
              text: "Dr. Anuradha mam is very friendly and calmly listen our problems. I have undergone panchkarma treatment basti for 8 days. Now I am feeling very much relaxed. Very nice experience. Thank you mam.",
            },
            {
              name: "Jyoti Chavan",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=jyoti&expression=smile",
              text: "I visited doctor for my hair fall problem. I am facing lots of hair loss after delivery. I did lots of treatment but no results. When I visited to doctor anuradha I completely lost my faith for treatments, but she regaines my trust. Very nice and calmly she consult me. Started with my treatment now I am happy with her treatment. Not having hair loss problem also due to her oil therapies structure of my hairs are also improved. Thanks doctor. Highly recommended",
            },
            {
              name: "N Mohod",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=mohod&expression=smile",
              text: "Very well experienced and good nature doctor.....",
            },
            {
              name: "Gajanan Deshmukh",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=gajanan&expression=smile",
              text: "Best Ayurveda Doctor, during this lockdown old age people suffer lot, no movement sitting at home they face problem swell up at leg. Dr. Anuradha gave proper diet and medicine, it's really works during this lockdown and my father is really recovered from this. Thank u so much. Acidity is very big problem during this lockdown. Dr. gave proper diet and me find. Really it's best and we have controlled acidity. Thank u so much.",
            },
            {
              name: "Priti Sonar",
              image:
                "https://api.dicebear.com/7.x/avataaars/svg?seed=priti&expression=smile",
              text: "BEST AYURVEDA DOCTOR, i m 21 years old, i m suffering from pcod, pcos problem from last 2 year's, in this 2 years, i was going so many doctors for treatment but I don't have any positive response and result. I m so much frustrated, depressed in that situation I don't understand what should I do?? Then I meet anuradha mam talking about my problems and the way she talking with me and understand my problems is so amazing, after talking to her i understand my frustration, negative thinking actually gone..I started treatment for 6 months I see quick result in my pcod problem.. now I don't have any periods problem..And last 5 months my periods is normal and regular... Thank you so much.....",
            },
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
    <section
      id="reviews"
      className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16"
    >
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
            <svg
              className="w-6 h-6 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors -mr-5 md:block hidden"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {c.reviewsData.map((review, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / cardsPerView}% - ${
                      ((cardsPerView - 1) * 24) / cardsPerView
                    }px)`,
                  }}
                >
                  <ReviewCard
                    review={review}
                    expanded={expandedReviews[index] || false}
                    onToggle={() =>
                      setExpandedReviews((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                  />
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
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-emerald-50 transition-colors"
            >
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
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
