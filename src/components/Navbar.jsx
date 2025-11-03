import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "products", label: t("nav.treatments") },
    { id: "payment", label: t("nav.payment") },
    { id: "gallery", label: t("nav.gallery") },
    { id: "reviews", label: t("nav.reviews") },
    { id: "contact", label: t("nav.contact") },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Clinic Name */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/images/logo.jpg"
              alt="Clinic Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md object-cover"
            />
            <span className="text-sm md:text-lg lg:text-xl font-bold tracking-wide line-clamp-1">
              {i18n.language === "mr" ? "रामेष्ट आयुर्वेद & पंचकर्म केंद्र" : "RAMESHTA AYURVED & PANCHAKARMA KENDRA"}
            </span>
          </div>

          {/* Desktop Menu with Smooth Scroll */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  className="cursor-pointer hover:text-emerald-100 transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section: Language Toggle + Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full p-1 shadow-sm">
              <button
                onClick={() => changeLanguage("mr")}
                className={`px-2 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  i18n.language === "mr"
                    ? "bg-white text-emerald-700 shadow-md"
                    : "text-white hover:text-emerald-100"
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  i18n.language === "en"
                    ? "bg-white text-emerald-700 shadow-md"
                    : "text-white hover:text-emerald-100"
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    className="cursor-pointer hover:text-emerald-100 transition-colors duration-200 block py-2 px-4 hover:bg-white/10 rounded-lg text-sm font-medium"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
