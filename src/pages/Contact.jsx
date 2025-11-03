import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n } = useTranslation();

  const c =
    i18n.language === "mr"
      ? {
          title: "संपर्क करा",
          subtitle: "आपल्याला काही शंका असल्यास कृपया आम्हाला संदेश पाठवा.",
          name: "नाव",
          mobile: "मोबाईल क्रमांक",
          email: "ई-मेल",
          message: "संदेश",
          button: "पाठवा",
        }
      : {
          title: "Contact Us",
          subtitle: "If you have any questions, please send us a message.",
          name: "Name",
          mobile: "Mobile Number",
          email: "Email",
          message: "Message",
          button: "Send Message",
        };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-emerald-700 mb-4">
          {c.title}
        </h2>
        <p className="text-center text-gray-700 text-base md:text-lg mb-10">
          {c.subtitle}
        </p>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl border border-emerald-100 p-6 md:p-10 rounded-2xl">
          <form className="grid md:grid-cols-2 gap-6">
            {/* Left side: Name, Mobile, Email */}
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base text-emerald-700 font-semibold mb-2 text-left"
                >
                  {c.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg px-4 py-2.5 text-sm md:text-base text-gray-700 outline-none transition-all duration-200 hover:border-emerald-300"
                  placeholder={c.name}
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm md:text-base text-emerald-700 font-semibold mb-2 text-left"
                >
                  {c.mobile}
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg px-4 py-2.5 text-sm md:text-base text-gray-700 outline-none transition-all duration-200 hover:border-emerald-300"
                  placeholder={c.mobile}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base text-emerald-700 font-semibold mb-2 text-left"
                >
                  {c.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg px-4 py-2.5 text-sm md:text-base text-gray-700 outline-none transition-all duration-200 hover:border-emerald-300"
                  placeholder={c.email}
                  required
                />
              </div>
            </div>

            {/* Right side: Message + Button */}
            <div className="flex flex-col h-full">
              <label
                htmlFor="message"
                className="block text-sm md:text-base text-emerald-700 font-semibold mb-2 text-left"
              >
                {c.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                className="w-full border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-lg px-4 py-2.5 text-sm md:text-base text-gray-700 outline-none resize-none flex-grow mb-4 transition-all duration-200 hover:border-emerald-300"
                placeholder={c.message}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-lg shadow-md hover:from-emerald-600 hover:to-teal-600 active:scale-95 transition-all duration-300 w-full transform hover:shadow-lg"
              >
                {c.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
