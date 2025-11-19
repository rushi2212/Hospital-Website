import React, { useState } from "react";
import { Copy, Check, CreditCard, Building2, Hash, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import PostersGallery from "../components/PostersGallery";

const Payment = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const { i18n } = useTranslation();

  const language = i18n.language === "mr" ? "mr" : "en";

  const phoneNumber = "9920494821";
  const accountDetails = {
    accountName: "ANURADHA VIHANG DESHMUKH",
    accountNumber: "50200112806470",
    ifscCode: "HDFC0011207",
    bankName: "HDFC Bank",
    bankBranch: "DIGHI ALANDI ROAD PUNE",
    accountType: "CURRENT",
    vpa: "9920494821@hdfcbank",
  };

  const c =
    language === "mr"
      ? {
          title: "पेमेंट",
          subtitle: "ऑनलाइन पेमेंट करा",
          upiPayment: "UPI पेमेंट",
          scanQR: "QR कोड स्कॅन करा",
          mobileNumber: "मोबाईल नंबर",
          copyPhone: "मोबाईल नंबर कॉपी करा",
          phoneCopied: "मोबाईल नंबर कॉपी झाला!",
          bankDetails: "बँक तपशील",
          accountName: "खात्याचे नाव",
          accountNumber: "खाते क्रमांक",
          ifscCode: "IFSC कोड",
          bankName: "बँकेचे नाव",
          bankBranch: "बँक शाखा",
          accountType: "खाते प्रकार",
          vpa: "व्हर्च्युअल पेमेंट पत्ता",
          copyBankDetails: "बँक तपशील कॉपी करा",
          bankCopied: "बँक तपशील कॉपी झाले!",
          or: "किंवा",
        }
      : {
          title: "Payment",
          subtitle: "Make Online Payment",
          upiPayment: "UPI Payment",
          scanQR: "Scan QR Code",
          mobileNumber: "Mobile Number",
          copyPhone: "Copy Mobile Number",
          phoneCopied: "Mobile Number Copied!",
          bankDetails: "Bank Details",
          accountName: "Account Name",
          accountNumber: "Account Number",
          ifscCode: "IFSC Code",
          bankName: "Bank Name",
          bankBranch: "Bank Branch",
          accountType: "Account Type",
          vpa: "Virtual Payment Address",
          copyBankDetails: "Copy Bank Details",
          bankCopied: "Bank Details Copied!",
          or: "OR",
        };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const copyBankDetails = () => {
    const bankText = `Account Name: ${accountDetails.accountName}
Account Number: ${accountDetails.accountNumber}
IFSC Code: ${accountDetails.ifscCode}
Bank Name: ${accountDetails.bankName}
Bank Branch: ${accountDetails.bankBranch}
Account Type: ${accountDetails.accountType}
Virtual Payment Address: ${accountDetails.vpa}`;
    navigator.clipboard.writeText(bankText);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <>
      <PostersGallery />

      <section
        id="payment"
        className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-10 md:py-14"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Title */}
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">
              {c.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600">{c.subtitle}</p>
          </div>

          {/* Payment Options */}
          <div className="grid lg:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto items-start">
            {/* LEFT SECTION - UPI Payment */}
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3 mx-auto">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-emerald-700 mb-4">
                  {c.upiPayment}
                </h3>

                {/* Name and Mobile - Compact */}
                <div className="mb-3 space-y-1.5">
                  <div className="bg-emerald-50 rounded-lg p-2">
                    <p className="text-xs text-gray-600">{c.accountName}</p>
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      {accountDetails.accountName}
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-2">
                    <p className="text-xs text-gray-600">{c.mobileNumber}</p>
                    <p className="text-sm md:text-base font-semibold text-emerald-700">
                      {phoneNumber}
                    </p>
                  </div>
                </div>

                {/* QR Code - Grows to fill space */}
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg p-3 mb-3 border border-emerald-300 flex-grow flex items-center justify-center">
                  <img
                    src="https://admin.softspectra.co/storage/qr/131/1743237889.jpg"
                    alt="Payment QR Code"
                    className="w-full max-w-[240px] h-auto rounded shadow-sm"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                  <div style={{ display: "none" }} className="text-center">
                    <CreditCard className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                    <p className="text-emerald-600 font-semibold text-sm">
                      {c.scanQR}
                    </p>
                  </div>
                </div>

                {/* Copy Phone Button */}
                <button
                  onClick={copyPhoneNumber}
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    copiedPhone
                      ? "bg-green-500 text-white"
                      : "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95"
                  }`}
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4" />
                      {c.phoneCopied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {c.copyPhone}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* RIGHT SECTION - Bank Details */}
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-3 mx-auto">
                  <Building2 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-teal-700">
                  {c.bankDetails}
                </h3>
              </div>

              {/* Bank Details - Enlarged and centered */}
              <div className="space-y-2 mb-4 flex-grow flex flex-col justify-center">
                {/* Account Name */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">
                        {c.accountName}
                      </p>
                      <p className="text-s font-semibold text-teal-700 break-words">
                        {accountDetails.accountName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Number */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Hash className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">
                        {c.accountNumber}
                      </p>
                      <p className="text-s font-semibold text-teal-700">
                        {accountDetails.accountNumber}
                      </p>
                    </div>
                  </div>
                </div>

                {/* IFSC Code */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Hash className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">
                        {c.ifscCode}
                      </p>
                      <p className="text-s font-semibold text-teal-700">
                        {accountDetails.ifscCode}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bank Name */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">
                        {c.bankName}
                      </p>
                      <p className="text-s font-semibold text-teal-700">
                        {accountDetails.bankName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bank Branch */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">
                        {c.bankBranch}
                      </p>
                      <p className="text-s font-semibold text-teal-700">
                        {accountDetails.bankBranch}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Type */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <CreditCard className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">
                        {c.accountType}
                      </p>
                      <p className="text-s font-semibold text-teal-700">
                        {accountDetails.accountType}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Virtual Payment Address */}
                <div className="bg-teal-50 rounded-lg p-2.5 hover:bg-teal-100 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-0.5">{c.vpa}</p>
                      <p className="text-s font-semibold text-teal-700 break-all">
                        {accountDetails.vpa}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy Bank Details Button */}
              <button
                onClick={copyBankDetails}
                className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  copiedBank
                    ? "bg-green-500 text-white"
                    : "bg-teal-600 text-white hover:bg-teal-700 active:scale-95"
                }`}
              >
                {copiedBank ? (
                  <>
                    <Check className="w-4 h-4" />
                    {c.bankCopied}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {c.copyBankDetails}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
