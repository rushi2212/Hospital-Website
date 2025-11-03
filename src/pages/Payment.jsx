import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Copy, Check, CreditCard, Building2, Hash, User } from "lucide-react";

const Payment = () => {
  const { i18n } = useTranslation();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const phoneNumber = "9920494821";
  const accountDetails = {
    accountName: "Anuradha Vihang Deshmukh",
    accountNumber: "",
    ifscCode: "",
    bankName: "Bank of Maharashtra",
    bankBranch: "Wagholi",
  };

  const c =
    i18n.language === "mr"
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
Bank Branch: ${accountDetails.bankBranch}`;
    navigator.clipboard.writeText(bankText);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <section
      id="payment"
      className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-700 mb-3">
            {c.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">{c.subtitle}</p>
        </div>

        {/* Payment Options */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* LEFT SECTION - UPI Payment */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 md:p-8 shadow-2xl border-2 border-emerald-200 hover:shadow-3xl transition-all duration-300 h-full flex flex-col">
            <div className="text-center flex flex-col h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 mx-auto">
                <CreditCard className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4">
                {c.upiPayment}
              </h3>

              {/* Name and Mobile */}
              <div className="mb-4">
                <div className="bg-emerald-50 rounded-2xl p-3 mb-3">
                  <p className="text-xs text-gray-600 mb-0.5">
                    {c.accountName}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-emerald-700">
                    {accountDetails.accountName}
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-3">
                  <p className="text-xs text-gray-600 mb-0.5">
                    {c.mobileNumber}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-emerald-700">
                    {phoneNumber}
                  </p>
                </div>
              </div>

              {/* QR Code Scanner Photo */}
              <div className="bg-linear-to-br from-emerald-100 to-teal-100 rounded-2xl p-3 md:p-4 mb-4 min-h-[150px] md:min-h-[200px] flex items-center justify-center border-2 border-dashed border-emerald-300 grow">
                <img
                  src="https://admin.softspectra.co/storage/qr/131/1743237889.jpg"
                  alt="Payment QR Code"
                  className="max-w-full max-h-[150px] md:max-h-[200px] rounded-xl shadow-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div style={{ display: "none" }} className="text-center">
                  <CreditCard className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
                  <p className="text-emerald-600 font-semibold text-lg mb-2">
                    {c.scanQR}
                  </p>
                  <p className="text-sm text-gray-500">
                    Add QR code image to: /public/images/payment-qr.jpg
                  </p>
                </div>
              </div>

              {/* Copy Phone Button */}
              <button
                onClick={copyPhoneNumber}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
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
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 md:p-8 shadow-2xl border-2 border-teal-200 hover:shadow-3xl transition-all duration-300 h-full flex flex-col">
            <div className="text-center mb-3 shrink-0">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-3 mx-auto">
                <Building2 className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-1">
                {c.bankDetails}
              </h3>
            </div>

            {/* Bank Details Cards */}
            <div className="space-y-2 mb-4 grow flex flex-col justify-center">
              {/* Account Name */}
              <div className="bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-0.5">
                      {c.accountName}
                    </p>
                    <p className="text-sm md:text-base font-bold text-teal-700 wrap-break-word">
                      {accountDetails.accountName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <Hash className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-0.5">
                      {c.accountNumber}
                    </p>
                    <p className="text-sm md:text-base font-bold text-teal-700">
                      {accountDetails.accountNumber || "Contact for details"}
                    </p>
                  </div>
                </div>
              </div>

              {/* IFSC Code */}
              <div className="bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <Hash className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-0.5">{c.ifscCode}</p>
                    <p className="text-sm md:text-base font-bold text-teal-700">
                      {accountDetails.ifscCode || "Contact for details"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bank Name */}
              <div className="bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-0.5">{c.bankName}</p>
                    <p className="text-sm md:text-base font-bold text-teal-700">
                      {accountDetails.bankName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bank Branch */}
              <div className="bg-teal-50 rounded-xl p-3 hover:bg-teal-100 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-teal-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-0.5">
                      {c.bankBranch}
                    </p>
                    <p className="text-sm md:text-base font-bold text-teal-700">
                      {accountDetails.bankBranch}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Bank Details Button */}
            <button
              onClick={copyBankDetails}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
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
  );
};

export default Payment;
