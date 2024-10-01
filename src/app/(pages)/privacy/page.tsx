import React from "react";

const PrivacyAndCookies = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">Privacy Policy & Cookies</h1>
      
      {/* Privacy Policy Section */}
      <section className="mb-5 p-4 bg-white rounded shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Privacy Policy</h2>
        <p className="text-gray-600">
          We value your privacy and are committed to protecting your personal data. This policy outlines our practices regarding the collection, use, and sharing of your information when you use our service.
        </p>
        <p className="text-gray-600">
          We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or interact with our customer service. We also collect some information automatically, like your IP address, browser type, and device information.
        </p>
        <p className="text-gray-600">
          Your information is used to provide and improve our services, to communicate with you, and to comply with legal obligations. We may share your information with third-party service providers who assist us in operating our business.
        </p>
        <p className="text-gray-600">
          We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access. However, no internet transmission is entirely secure or error-free.
        </p>
        <p className="text-gray-600">
          You have certain rights regarding the personal information we hold about you, including the right to access, correct, or delete your data.
        </p>
      </section>

      {/* Cookies Section */}
      <section className="mb-5 p-4 bg-white rounded shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Cookies</h2>
        <p className="text-gray-600">
          We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
        </p>
        <p className="text-gray-600">
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
        </p>
        <p className="text-gray-600">
          We use cookies to track the activity on our service and we hold certain information. Cookies are used to enhance your experience by remembering your preferences and settings.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-5 p-4 bg-white rounded shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Information</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy or our treatment of your personal data, please <a href="/contact" className="text-blue-600 hover:text-blue-800">contact me</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyAndCookies;
