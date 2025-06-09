"use client";
import Link from "next/link";
import Loader from "../loader";
import { FaQuestionCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PrivacyPolicy() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
        offset: 100,
      });
      AOS.refresh();
    }, 60);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="bg-white py-16 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-bold text-center text-black mb-8"
          >
            Privacy Policy
          </h1>
          <div data-aos="fade-up" className="space-y-6 text-black text-lg">
            <p className="text-center">
              At Custom PC Builder, we are committed to protecting your privacy.
              This Privacy Policy outlines how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services. Please read this policy carefully.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> When you create an account,
                place an order, or contact us, we may collect your name, email
                address, phone number, billing address, and shipping address.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how you
                interact with our website, such as your IP address, browser type,
                pages visited, and time spent on our site.
              </li>
              <li>
                <strong>Payment Information:</strong> When you make a purchase, we
                collect payment details through our secure payment processors. We
                do not store your full credit card information.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-black mt-8">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders.</li>
              <li>Communicate with you about your account or purchases.</li>
              <li>Improve our website, products, and services.</li>
              <li>Send promotional emails or newsletters (with your consent).</li>
              <li>Ensure the security of our website and prevent fraud.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-black mt-8">
              3. How We Share Your Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist
                with payment processing, shipping, or website analytics.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or to
                protect our rights, we may disclose your information to
                authorities or legal entities.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-black mt-8">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies to enhance your experience,
              analyze website performance, and deliver personalized content. You
              can manage your cookie preferences through your browser settings.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              information. However, no method of transmission over the internet is
              100% secure, and we cannot guarantee absolute security.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8">
              6. Your Rights
            </h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@custompcbuilder.com"
                className="text-purple-600 hover:underline"
              >
                support@custompcbuilder.com
              </a>.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices or content of these sites.
              Please review their privacy policies before providing personal
              information.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated effective date. We encourage you
              to review this policy periodically.
            </p>
            <h2 className="text-2xl font-semibold text-black mt-8">
              9. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              Custom PC Builder <br />
              Email:{" "}
              <a
                href="mailto:support@custompcbuilder.com"
                className="text-purple-600 hover:underline"
              >
                support@custompcbuilder.com
              </a>{" "}
              <br />
              Phone: (123) 456-7890 <br />
              Address: 123 Tech Street, Build City, TX 12345
            </p>
          </div>
          <div data-aos="fade-up" className="mt-12 text-center">
            <Link href="/faq">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all shadow-md flex items-center justify-center mx-auto">
                <FaQuestionCircle className="mr-2" />
                Visit Our FAQ
              </button>
            </Link>
          </div>
        </div>
      </div>
     <Footer isVisible={isVisible} />
    </div>
  );
}