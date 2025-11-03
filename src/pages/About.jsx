import React from "react";
import { useTranslation } from "react-i18next";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Leaf,
  Clock,
  Stethoscope,
  Baby,
} from "lucide-react";

const About = () => {
  const { i18n } = useTranslation();

  const c =
    i18n.language === "mr"
      ? {
          title: "आमच्याविषयी",
          name: "वैद्य अनुराधा देशमुख",
          qualification: "एम. डी. (आयुर्वेद)",
          expertise: "आयुर्वेद, आहार, योग व पंचकर्म तज्ञ",
          regNo: "नोंदणी क्र.: I-64847-A",
          phone: "8850316740 / 9920494821",
          address:
            "शॉप नं. ६, अँब्रॉसिया एली बिल्डिंग, अमनोरा मॉलच्या मागे, तुपे पाटील रोड, कोटक महिंद्रा बँक शेजारी, हडपसर पुणे",
          email: "anuradhadeshmukh19@gmail.com",
          website:
            "https://softspectra.co/webapp/dnyanesh-ayurved-and-panchakarma-centre",
          opdTiming: "10:00 AM TO 1:30PM & 6:00 PM TO 8:30PM",
          facilitiesTitle: "उपलब्ध सुविधा :",
          facilities: [
            "स्नेहन, बस्ति, पत्रपोट्टली, स्वेदन, रक्तमोक्षण, षष्ठिक पिंड स्वेद",
            "वमन, जलौकावचरण, लेप, विरेचन, अग्निकर्म",
            "ऑक्युप्रेशर, नस्य, विद्धकर्म, सुवर्ण प्राशन",
          ],
          specialTreatmentTitle: "पुढील आजारांवर विशेष उपचार :",
          specialTreatments: [
            "आम्लपित्त व पोटाचे आजार",
            "सांधे व मणक्यांचे आजार",
            "दमा, जुनाट सर्दी, खोकला",
            "सोरायसिस, पांढरे कोड",
            "पचन संबंधी तक्रारी",
            "मुळव्याध, भगंदर, मुतखडा",
            "मेंदूचे विकार, पॅरालिसीस",
            "वजन कमी करणे/वाढवणे",
            "थायरॉईड, मधुमेह, रक्तदाब",
            "हृदयाचे व किडनीचे आजार",
          ],
          womenChildTitle: "स्त्रिया व लहान मुलांविषयक :",
          womenChildIssues: [
            "मासिक पाळीच्या तक्रारी",
            "वंध्यत्व, PCOD",
            "सौंदर्य विषयक तक्रारी",
            "केसांच्या सर्व तक्रारी",
            "पिंपल्स, वांग, व सर्व त्वचा रोग",
            "सुवर्णप्राशन संस्कार",
            "गोवर, कांजिण्या, जंत/कृमी",
            "फिटस्, बालदमा",
            "बुद्धी, स्मृती वाढविण्यासाठी",
            "उंची वाढविण्यासाठी",
            "गर्भसंस्कार, योग व प्राणायाम",
          ],
        }
      : {
          title: "About Us",
          name: "Vaidya Anuradha Deshmukh",
          qualification: "M.D. (Ayurveda)",
          expertise: "Expert in Ayurveda, Diet, Yoga & Panchakarma",
          regNo: "Reg. No.: I-64847-A",
          phone: "8850316740 / 9920494821",
          address:
            "Shop No.6, Ambrosia Alley Building, Behind Amanora Mall, Tupe Patil Road, Near Kotak Mahindra Bank, Hadapsar Pune",
          email: "anuradhadeshmukh19@gmail.com",
          website:
            "https://softspectra.co/webapp/dnyanesh-ayurved-and-panchakarma-centre",
          opdTiming: "10:00 AM TO 1:30 PM & 6:00 PM TO 8:30 PM",
          facilitiesTitle: "Available Facilities:",
          facilities: [
            "Snehana, Basti, Patrapottali, Swedana, Raktamokshana, Shashtik Pinda Sweda",
            "Vamana, Jalaukavacharana, Lepa, Virechana, Agnikarma",
            "Acupressure, Nasya, Viddhakarma, Suvarna Prashana",
          ],
          specialTreatmentTitle: "Special Treatment for Following Conditions:",
          specialTreatments: [
            "Acidity & Stomach Disorders",
            "Joint & Spine Disorders",
            "Asthma, Chronic Cold, Cough",
            "Psoriasis, Vitiligo",
            "Digestive Issues",
            "Piles, Fistula, Kidney Stones",
            "Brain Disorders, Paralysis",
            "Weight Loss/Gain",
            "Thyroid, Diabetes, Blood Pressure",
            "Heart & Kidney Diseases",
          ],
          womenChildTitle: "Women & Children Health:",
          womenChildIssues: [
            "Menstrual Disorders",
            "Infertility, PCOD",
            "Beauty Related Issues",
            "All Hair Related Problems",
            "Acne, Pigmentation & All Skin Diseases",
            "Suvarna Prashana Sanskar",
            "Measles, Conjunctivitis, Worms",
            "Fits, Childhood Asthma",
            "Improve Intelligence & Memory",
            "Height Enhancement",
            "Garbhasanskar, Yoga & Pranayama",
          ],
        };

  return (
    <section
      id="about"
      className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-emerald-700 mb-8 md:mb-12">
          {c.title}
        </h2>

        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* LEFT SECTION */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-emerald-100">
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-2">
                {c.name}
              </h3>
              <p className="text-lg md:text-xl text-emerald-600 font-semibold mb-1">
                {c.qualification}
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-2">
                {c.expertise}
              </p>
              <p className="text-sm text-gray-600 font-medium">{c.regNo}</p>
            </div>

            {/* Facilities */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-emerald-100">
              <h4 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                {c.facilitiesTitle}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {c.facilities.map((facility, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <span className="text-emerald-500 mt-1 text-lg md:text-xl shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm md:text-lg leading-relaxed">
                      {facility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-lg md:text-xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Contact Info</span>
              </h4>
              <div className="text-gray-700 space-y-2.5">
                {/* Phone */}
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm md:text-base text-gray-800">
                    {c.phone}
                  </span>
                </div>
                {/* Address */}
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {c.address}
                  </span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                  <a
                    className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 underline break-all"
                    href={`mailto:${c.email}`}
                  >
                    {c.email}
                  </a>
                </div>
                {/* Website */}
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                  <Globe className="w-5 h-5 text-emerald-600 shrink-0" />
                  <a
                    className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 underline"
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Image & OPD */}
          <div className="lg:col-span-5 order-first lg:order-last flex flex-col">
            <div className="space-y-6 flex flex-col h-full">
              {/* Profile Image - Creative Enhanced Display */}
              <div className="flex justify-center grow items-center">
                <div className="relative w-full max-w-sm md:max-w-md mx-auto">
                  {/* Animated Background Gradient Circles */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-300 rounded-full blur-3xl opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Main Decorative Frame */}
                  <div className="relative aspect-3/4 mx-auto max-h-[350px] md:max-h-none">
                    {/* Outer Gradient Border - Premium Look */}
                    <div className="absolute -inset-4 bg-linear-to-br from-emerald-400 via-teal-400 to-emerald-400 rounded-3xl opacity-60"></div>

                    {/* Middle White Border */}
                    <div className="absolute -inset-3 bg-white rounded-3xl shadow-lg"></div>

                    {/* Inner Accent Border - Emerald */}
                    <div className="absolute -inset-2 bg-linear-to-br from-emerald-100 to-teal-100 rounded-3xl opacity-70"></div>

                    {/* White Inner Frame */}
                    <div className="absolute -inset-1 bg-white rounded-3xl"></div>

                    {/* Image Container with Hover Effect */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group">
                      <img
                        src="/images/profileimg.jpg"
                        alt={c.name}
                        className="w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay Gradient on Hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-emerald-900/0 via-transparent to-emerald-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
                    </div>

                    {/* Decorative Corner Accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg opacity-60"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-500 rounded-tr-lg opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-lg opacity-60"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal-500 rounded-br-lg opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* OPD Timing - Highlighted Card Below Photo */}
              <div className="bg-linear-to-r from-orange-50 to-red-50 rounded-2xl p-5 md:p-6 shadow-xl border-2 border-orange-400 hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-base md:text-lg font-bold text-orange-700 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>OPD TIMING</span>
                </h4>
                <p className="text-sm md:text-base font-semibold text-orange-600 leading-relaxed">
                  {c.opdTiming}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Special Treatments */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-emerald-100">
            <h4 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <Stethoscope className="w-6 h-6 md:w-7 md:h-7" />
              {c.specialTreatmentTitle}
            </h4>
            <div className="space-y-1.5 md:space-y-2">
              {c.specialTreatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1 shrink-0">•</span>
                  <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {treatment}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women & Children */}
          <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-xl border border-pink-100">
            <h4 className="text-xl md:text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
              <Baby className="w-6 h-6 md:w-7 md:h-7" />
              {c.womenChildTitle}
            </h4>
            <div className="space-y-1.5 md:space-y-2">
              {c.womenChildIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1 shrink-0">•</span>
                  <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {issue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
