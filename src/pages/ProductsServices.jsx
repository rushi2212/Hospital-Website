// ProductsServices.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Waves,
  Droplet,
  Wind,
  Leaf,
  Zap,
  Eye,
  Activity,
  Heart,
  Brain,
  Pill,
  MousePointerClick,
} from "lucide-react";

const ProductsServices = ({ language = "en" }) => {
  const { i18n } = useTranslation();
  // Prefer i18n language (so global toggle works). Fallback to language prop.
  const lang = i18n?.language || language;

  const [selectedService, setSelectedService] = useState(null);

  const content =
    lang === "mr"
      ? {
          title: "आमचे उपचार व फायदे",
          subtitle:
            "ज्ञानेश आयुर्वेद व पंचकर्म केंद्रच्या पारंपारिक आयुर्वेदिक उपचार",
          services: [
            {
              id: 1,
              title: "अभ्यंग किंवा स्नेहन",
              image:
                "https://tse1.mm.bing.net/th/id/OIP.lQD3-p2EVcLqFjbbKYp_9wHaEK?pid=Api&P=0&h=180",
              icon: Waves,
              benefitsTitle: "अभ्यंगाचे फायदे :",
              benefits: [
                "मन आणि शरीराचे पोषण करते",
                "संपूर्ण शरीराला नवसंजीवनी देते",
                "दीर्घायुष्य वाढते",
                "आयुष्या मधे वाढ होऊ शकते",
                "थकवा दूर होतो",
                "कार्य क्षमतेत वाढ",
                "शांत झोपेला प्रोत्साहन देते",
                "त्वचेचा रंग आणि चमक वाढवते",
                "शरीर स्वच्छ करते (डिटॉक्सिफिकेशन)",
                "तणाव टाळण्यास मदत करते",
                "स्नायूंची लवचिकता वाढवते",
                "पचन संस्था सुधारते",
              ],
            },
            {
              id: 2,
              title: "स्वेदन",
              image:
                "https://tse4.mm.bing.net/th/id/OIP.maa5laxO7ThYSafQH5XDpAHaDw?pid=Api&P=0&h=180",
              icon: Droplet,
              benefitsTitle: "स्वेदन चे फायदे:",
              benefits: [
                "शरीरातील वात आणि कफ संतुलित करते",
                "शरिरातील टाॅक्सिक द्रव्य काढून टाकते",
                "रक्ताभिसरण वाढवते; जळजळ कमी करते",
                "पेशींना पुनर्जीवन देण्यासाठी",
                "अन्नपचन सुधारते",
                "मांसपेशीच्या तक्रारी करीता",
                "लठ्ठपणा व PCOD करिता",
                "तणाव कमी होतो",
                "घसा स्नायू सुलभ करते",
              ],
            },
            {
              id: 3,
              title: "वमन",
              image:
                "https://tse3.mm.bing.net/th/id/OIP.qTtt5gsKIvBm0B0ZideorQHaDp?pid=Api&P=0&h=180",
              icon: Wind,
              benefitsTitle: "वमन चे फायदे :",
              benefits: [
                "मासिक पाळीच्या तक्रारी व वंध्यत्वासाठी",
                "बीजशुद्धी करिता",
                "कफाचे आजार, अस्थमा",
                "त्वचा विकार",
                "अनुवांशिक आजार पुढच्या पिढीत जाऊ नये याकरिता",
                "थायरॉईड चे आजार इत्यादी",
              ],
            },
            {
              id: 4,
              title: "विरेचन",
              image:
                "https://tse1.mm.bing.net/th/id/OIP.tQEHalyXga9hJFIc6l1U3gHaEe?pid=Api&P=0&h=180",
              icon: Leaf,
              benefitsTitle: "विरेचन च फायदे :",
              benefits: [
                "अनियमीत मासिक पाळी",
                "अतिस्त्राव",
                "पाळी लवकर येणे",
                "स्त्री - पुरुष वंध्यत्व",
                "बीजशुद्धी साठी",
                "पचन संस्थेच अयोग्य सुधारण्यास मदत होते",
                "पित्ताचे आजार",
                "केसांच्या तक्रारी",
              ],
            },
            {
              id: 5,
              title: "बस्ती",
              image:
                "https://www.aradhanaayurveda.com/wp-content/uploads/2020/09/janu-basti.jpg",
              icon: Zap,
              benefitsTitle: "बस्ती चे फायदे :",
              benefits: [
                "मासिक पाळीच्या तक्रारी",
                "गर्भाशयातील गाठी",
                "स्त्री - पुरुष वंध्यत्व",
                "स्त्री बीजाची वाढ होण्यासाठी",
                "पुरुषांमध्ये शुक्राणू समस्या",
                "वाताचे विकार - सांधेवात",
                "पाठीचे आजार",
                "वारंवार गर्भपात होणे",
                "नैसर्गिक प्रसुती करिता उपयोगी",
                "केसाच्या तक्रारी, पोटाच्या तक्रारी",
              ],
            },
            {
              id: 6,
              title: "नस्य",
              image:
                "https://tse4.mm.bing.net/th/id/OIP.tbkqhefCVqAVecwsHe1yXQHaDt?pid=Api&P=0&h=180",
              icon: Eye,
              benefitsTitle: "नस्य (नाकात औषध टाकणे) चे फायदे :",
              benefits: [
                "गर्भस्थापक स्त्री बीजांची वाढ चांगली होण्यासाठी",
                "केस, नाक, डोके, तसेच शिरोरोगांसाठी",
                "ताण - तणाव घालवण्याकरिता",
                "सायनुसायटिस आणि नासिकाशोथ (वाहणारे नाक)",
                "उच्च सेरेब्रल आणि संवेदी अवयवांवर सकारात्मक प्रभाव पडतो (डोळे, नाक, कान, त्वचा आणि जीभ)",
              ],
            },
            {
              id: 7,
              title: "उत्तरवस्ती",
              image:
                "https://vedickarma.co.in/wp-content/uploads/2022/10/basti.jpg",
              icon: Activity,
              benefitsTitle: "उत्तरवस्ती (गर्भाशयात औषध सोडणे) चे फायदे :",
              benefits: [
                "गर्भाशयाच्या नलिका बंद असणे",
                "गर्भाशयाचे अस्तर पातळ असणे",
                "स्त्रीबीजांची वाढ चांगली होण्याकरिता",
                "मासिक पाळीच्या तक्रारीकरिता",
                "पुरुषवंताकरीता",
                "मूत्रनलिका अरुंद अस",
              ],
            },
            {
              id: 8,
              title: "शिरोधारा",
              image:
                "https://tse2.mm.bing.net/th/id/OIP.4ZLw92v0LG9o0ZCEmvBdFwAAAA?pid=Api&P=0&h=180",
              icon: Brain,
              benefitsTitle: "शिरोधाराचे फायदे :",
              benefits: [
                "मानसिक आणि भावनिक विश्रांती",
                "डोके, मान, डोळे, कान, नाक आणि घसा यांच्याशी निगडीत अनेक रोगांवर फायदेशीर",
                "दीर्घकाळ निद्रानाश आणि स्किझोफ्रेनिया बरा करण्यासाठी फायदेशीर",
                "केस गळणे, अकाली पांढरे होणे आणि केस तुटणे प्रतिबंधित करते",
                "डोकेदुखी आणि डोक्याची जळजळ दूर करते",
                "शिरोधारा ताणतणाव घालवण्याकरिता",
                "एकाग्रता वाढवण्याकरिता",
              ],
            },
            {
              id: 9,
              title: "गर्भसंस्कार",
              image:
                "https://tse4.mm.bing.net/th/id/OIP.zmHJwJmxE4SM7Jlt-uzcYQHaDn?pid=Api&P=0&h=180",
              icon: Heart,
              benefitsTitle: "गर्भसंस्कारचे फायदे :",
              benefits: [
                "शारीरिक, मानसिक, दृष्ट्या निरोगी बाळासाठी",
                "बाळाचा बुद्धयांक वाढविण्यासाठी",
                "गर्भावस्थेतील योगासने, प्राणायाम व आहाराविषयी मार्गदर्शन",
                "मासानुमासिक गर्भिणी परिचर्या",
              ],
            },
            {
              id: 10,
              title: "सुवर्णप्राशन",
              image:
                "https://tse2.mm.bing.net/th/id/OIP.r3jaKWABiKoU6JehRNvdrgAAAA?pid=Api&P=0&h=180",
              icon: Pill,
              benefitsTitle:
                "सुवर्णप्राशन (0 ते 16 वर्षांपर्यंत बालकांसाठी) फायदे:",
              benefits: [
                "व्याधीप्रतिकारशक्ती वाढवण्यासाठी",
                "बुद्धिवर्धक, स्मृतीवर्धक, आरोग्यवर्धक",
                "भुकेच्या तक्रारी दूर करणे",
              ],
            },
          ],
          clickToView: "तपशीलासाठी क्लिक करा",
        }
      : {
          title: "Our Treatments & Benefits",
          subtitle:
            "Traditional Ayurvedic Treatments by Dnyanesh Ayurved & Panchakarma Center",
          services: [
            {
              id: 1,
              title: "Abhyanga or Snehana",
              image:
                "https://tse1.mm.bing.net/th/id/OIP.lQD3-p2EVcLqFjbbKYp_9wHaEK?pid=Api&P=0&h=180",
              icon: Waves,
              benefitsTitle: "Benefits of Abhyanga:",
              benefits: [
                "Nourishes mind and body",
                "Rejuvenates the entire body",
                "Increases longevity",
                "May increase lifespan",
                "Relieves fatigue",
                "Increases work capacity",
                "Promotes peaceful sleep",
                "Enhances skin complexion and glow",
                "Cleanses the body (Detoxification)",
                "Helps prevent stress",
                "Increases muscle flexibility",
                "Improves digestive system",
              ],
            },
            {
              id: 2,
              title: "Swedana",
              image:
                "https://tse4.mm.bing.net/th/id/OIP.maa5laxO7ThYSafQH5XDpAHaDw?pid=Api&P=0&h=180",
              icon: Droplet,
              benefitsTitle: "Benefits of Swedana:",
              benefits: [
                "Balances Vata and Kapha in the body",
                "Eliminates toxic substances from the body",
                "Increases blood circulation; reduces inflammation",
                "For cell rejuvenation",
                "Improves digestion",
                "For muscle complaints",
                "For obesity and PCOD",
                "Reduces stress",
                "Eases throat muscles",
              ],
            },
            {
              id: 3,
              title: "Vamana",
              image:
                "https://tse3.mm.bing.net/th/id/OIP.qTtt5gsKIvBm0B0ZideorQHaDp?pid=Api&P=0&h=180",
              icon: Wind,
              benefitsTitle: "Benefits of Vamana:",
              benefits: [
                "For menstrual complaints and infertility",
                "For seed purification",
                "Kapha diseases, Asthma",
                "Skin disorders",
                "To prevent hereditary diseases from passing to the next generation",
                "Thyroid diseases, etc.",
              ],
            },
            {
              id: 4,
              title: "Virechana",
              image:
                "https://tse1.mm.bing.net/th/id/OIP.tQEHalyXga9hJFIc6l1U3gHaEe?pid=Api&P=0&h=180",
              icon: Leaf,
              benefitsTitle: "Benefits of Virechana:",
              benefits: [
                "Irregular menstruation",
                "Excessive bleeding",
                "Early menstruation",
                "Male-female infertility",
                "For seed purification",
                "Helps correct digestive system disorders",
                "Pitta diseases",
                "Hair complaints",
              ],
            },
            {
              id: 5,
              title: "Basti",
              image:
                "https://www.aradhanaayurveda.com/wp-content/uploads/2020/09/janu-basti.jpg",
              icon: Zap,
              benefitsTitle: "Benefits of Basti:",
              benefits: [
                "Menstrual complaints",
                "Uterine fibroids",
                "Male-female infertility",
                "For female egg growth",
                "Sperm problems in men",
                "Vata disorders - joint arthritis",
                "Back diseases",
                "Recurrent miscarriages",
                "Useful for natural childbirth",
                "Hair complaints, stomach complaints",
              ],
            },
            {
              id: 6,
              title: "Nasya",
              image:
                "https://tse4.mm.bing.net/th/id/OIP.tbkqhefCVqAVecwsHe1yXQHaDt?pid=Api&P=0&h=180",
              icon: Eye,
              benefitsTitle: "Benefits of Nasya (Nasal medication):",
              benefits: [
                "For better growth of female eggs for conception",
                "For hair, nose, head, and cranial diseases",
                "For relieving stress and tension",
                "Sinusitis and rhinitis (runny nose)",
                "Positive effect on higher cerebral and sensory organs (eyes, nose, ears, skin, and tongue)",
              ],
            },
            {
              id: 7,
              title: "Uttarbasti",
              image:
                "https://vedickarma.co.in/wp-content/uploads/2022/10/basti.jpg",
              icon: Activity,
              benefitsTitle: "Benefits of Uttarbasti (Uterine medication):",
              benefits: [
                "Blocked fallopian tubes",
                "Thin uterine lining",
                "For better growth of female eggs",
                "For menstrual complaints",
                "For male fertility",
                "Narrow urinary tract",
              ],
            },
            {
              id: 8,
              title: "Shirodhara",
              image:
                "https://tse2.mm.bing.net/th/id/OIP.4ZLw92v0LG9o0ZCEmvBdFwAAAA?pid=Api&P=0&h=180",
              icon: Brain,
              benefitsTitle: "Benefits of Shirodhara:",
              benefits: [
                "Mental and emotional relaxation",
                "Beneficial for many diseases related to head, neck, eyes, ears, nose, and throat",
                "Beneficial for curing chronic insomnia and schizophrenia",
                "Prevents hair loss, premature graying, and hair breakage",
                "Relieves headaches and burning sensation in the head",
                "Shirodhara for relieving stress",
                "For increasing concentration",
              ],
            },
            {
              id: 9,
              title: "Garbha Sanskara",
              image:
                "https://tse4.mm.bing.net/th/id/OIP.zmHJwJmxE4SM7Jlt-uzcYQHaDn?pid=Api&P=0&h=180",
              icon: Heart,
              benefitsTitle: "Benefits of Garbhasanskar:",
              benefits: [
                "For physically, mentally, and visually healthy baby",
                "To increase baby's IQ",
                "Guidance on yoga, pranayama, and diet during pregnancy",
                "Monthly pregnancy care",
              ],
            },
            {
              id: 10,
              title: "Suvarna Prashana",
              image:
                "https://tse2.mm.bing.net/th/id/OIP.r3jaKWABiKoU6JehRNvdrgAAAA?pid=Api&P=0&h=180",
              icon: Pill,
              benefitsTitle:
                "Benefits of Suvarna Prashana (For children 0 to 16 years):",
              benefits: [
                "To boost immunity",
                "Enhances intelligence, memory, and health",
                "Eliminates appetite complaints",
              ],
            },
          ],
          clickToView: "Click for details",
        };

  return (
    <>
      <section id="products" className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-emerald-700 mb-4">
            {content.title}
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            {content.subtitle}
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {content.services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-emerald-100 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%2310b981"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="48" fill="white"%3E' +
                        encodeURIComponent(service.icon) +
                        "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    {React.createElement(service.icon, {
                      className: "w-6 h-6 text-emerald-600",
                    })}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-bold text-emerald-700 mb-2 text-center min-h-12 flex items-center justify-center">
                    {service.title}
                  </h3>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm">
                      <MousePointerClick className="w-4 h-4" />
                      {content.clickToView}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform animate-modalSlideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%2310b981"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="48" fill="white"%3E' +
                    encodeURIComponent(selectedService.icon) +
                    "%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white transition-colors text-gray-700 hover:text-emerald-700 text-2xl font-bold"
              >
                ×
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  {React.createElement(selectedService.icon, {
                    className: "w-10 h-10 text-white",
                  })}
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-14rem)]">
              <h4 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4">
                {selectedService.benefitsTitle}
              </h4>

              <div className="space-y-3">
                {selectedService.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5 text-lg">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-base md:text-lg leading-relaxed group-hover:text-emerald-700 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ProductsServices;
