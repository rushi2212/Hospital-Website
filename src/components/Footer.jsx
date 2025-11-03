import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  const c =
    i18n.language === "mr"
      ? {
          clinic: "ज्ञानेश आयुर्वेद व पंचकर्म केंद्र",
          address: "शॉप नं. ६, अँब्रॉसिया एली बिल्डिंग, हडपसर, पुणे",
          contact: "संपर्क: 8850316740 / 9920494821",
          rights: "सर्व हक्क राखीव © 2025 ज्ञानेश आयुर्वेद व पंचकर्म केंद्र",
          followUs: "आमचे अनुसरण करा",
        }
      : {
          clinic: "Dnyanesh Ayurved & Panchakarma Kendra",
          address: "Shop No.6, Ambrosia Alley Building, Hadapsar, Pune",
          contact: "Contact: 8850316740 / 9920494821",
          rights:
            "All Rights Reserved © 2025 Dnyanesh Ayurved & Panchakarma Kendra",
          followUs: "Follow Us",
        };

  return (
    <footer className="bg-linear-to-r from-emerald-700 to-teal-700 text-white py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Clinic Info */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-lg md:text-xl font-bold tracking-wide">
              {c.clinic}
            </h3>
            <p className="text-sm md:text-base text-emerald-100">{c.address}</p>
            <p className="text-sm md:text-base text-emerald-100">{c.contact}</p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-2">
            <h4 className="text-base md:text-lg font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-200 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-base md:text-lg font-semibold mb-3">
              {c.followUs}
            </h4>
            <p className="text-xs md:text-sm text-emerald-100">
              <span className="block font-semibold mb-1">Hours:</span>
              10:00 AM - 1:30 PM
              <br />
              6:00 PM - 8:30 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-emerald-600 mb-3" />

        {/* Copyright */}
        <p className="text-xs md:text-sm text-emerald-100 text-center">
          {c.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
