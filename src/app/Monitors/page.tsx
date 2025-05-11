"use client";
import { useState, useEffect } from "react";
import Loader from "../loader";
import Link from 'next/link';
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';
import Header from "../Header";
import Footer from "../Footer";
export default function MonitorsPage() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true); // Trigger animations after loading
    }, 60);
  }, []);

  useEffect(() => {
    // Smooth scroll function
    const handleScrollToGaming = () => {
      const gamingSection = document.getElementById("gaming-monitors");
      if (gamingSection) {
        gamingSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Attach event listener to the button
    const scrollButton = document.getElementById("scroll-to-gaming");
    if (scrollButton) {
      scrollButton.onclick = handleScrollToGaming;
    }

    // Cleanup event listener
    return () => {
      if (scrollButton) {
        scrollButton.onclick = null;
      }
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Banner */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Monitors Section */}
        <div className="bg-white px-[5%] py-[5%] flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left Text */}
          <div className={`text-left transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <h1 className="font-bold text-black text-[7vw] leading-tight">
              Discover Top Monitors
            </h1>
            <p className="text-[2vw] sm:text-xl text-gray-600 mt-2 mb-[3%]">
              Find the perfect monitor for gaming, work, and entertainment.
            </p>
            <button
              id="scroll-to-gaming"
              className="bg-blue-600 mt-[2%] text-white px-[5%] py-[3%] rounded-lg text-[2vw] sm:text-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Browse Gaming Monitors
            </button>
          </div>

          {/* Right Image */}
          <div className={`lg:w-1/2 flex justify-center relative mt-[3%] lg:mt-0 before:absolute before:content-[''] before:w-[400px] before:h-[400px] before:bg-blue-600 before:blur-[100px] before:opacity-90 before:rounded-full before:top-[60%] before:translate-y-[-70%] transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <img src="/images/gaming-pc.png" className="w-[100%] relative" alt="Monitors" />
          </div>
        </div>

        {/* Gaming Monitors Section */}
        <div id="gaming-monitors" className="bg-gray-100 px-[5%] py-[5%]">
          <h2 className="text-3xl font-bold text-center mb-8">Gaming Monitors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Gaming Monitor 1]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Gaming Monitor 1
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Gaming Monitor 2]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Gaming Monitor 2
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Gaming Monitor 3]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Gaming Monitor 3
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Office Monitors Section */}
        <div className="bg-gray-100 px-[5%] py-[5%] mt-8">
          <h2 className="text-3xl font-bold text-center mb-8">Office Monitors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Office Monitor 1]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Office Monitor 1
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Office Monitor 2]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Office Monitor 2
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Office Monitor 3]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Office Monitor 3
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Home Monitors Section */}
        <div id="home-monitors" className="bg-gray-100 px-[5%] py-[5%] mt-8">
          <h2 className="text-3xl font-bold text-center mb-8">Home Monitors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Home Monitor 1]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Home Monitor 1
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Home Monitor 2]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Home Monitor 2
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Home Monitor 3]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Home Monitor 3
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Monitors Section */}
        <div id="graphical-monitors" className="bg-gray-100 px-[5%] py-[5%] mt-8">
          <h2 className="text-3xl font-bold text-center mb-8">Graphical Monitors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Graphical Monitor 1]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Graphical Monitor 1
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Graphical Monitor 2]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Graphical Monitor 2
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-full aspect-square bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
                <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center rounded-lg">
                  [Placeholder for Graphical Monitor 3]
                </div>
              </div>
              <div className="w-3/4 mx-auto">
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    Find Graphical Monitor 3
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer isVisible={isVisible} />
    </div>
  );
}