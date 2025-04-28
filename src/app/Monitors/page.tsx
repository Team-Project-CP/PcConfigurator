"use client";
import { useState, useEffect } from "react";
import Loader from "../loader";
import Link from 'next/link';
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';

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
      <div className="bg-purple-600 text-white text-center text-sm py-2">
        Certified Refurbished Gaming PCs. <Link href="#" className="underline">Shop now &gt;</Link>
      </div>

      {/* Navigation Bar */}
      <nav className="text-white bg-black px-8 py-4 flex justify-center items-center">
        {/* logo and links */}
        <div className="flex items-center space-x-8">
          <Link href="#" className="text-2xl font-bold">Domino</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-gray-400">Deals</Link>
            <Link href="#" className="hover:text-gray-400">Gaming PCs</Link>
            <Link href="#" className="hover:text-gray-400">Components</Link>
            <Link href="/Gaming-Gear" className="hover:text-gray-400">Gaming Gear</Link>
            <Link href="/Monitors" className="hover:text-gray-400">Monitors</Link>
            <Link href="/Software" className="hover:text-gray-400">Software</Link>
            <Link href="/Community" className="hover:text-gray-400">Community</Link>
          </div>
        </div>

        {/* icons */}
        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Stay In Touch</h2>
              <p className="text-gray-400 mb-6">Keep up to date on the latest releases, offers, and news from DOMINO</p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-start lg:items-end">
              <div className="flex space-x-4 mb-4">
                <select className="bg-gray-800 text-white px-4 py-2 rounded">
                  <option>Language</option>
                  <option>English</option>
                </select>
                <select className="bg-gray-800 text-white px-4 py-2 rounded">
                  <option>Country</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-96 px-4 py-2 rounded-l-md text-black focus:outline-none mb-4 sm:mb-0"
                />
                <button className="bg-gray-200 text-gray-900 px-6 py-2 rounded-r-md sm:rounded-l-none hover:bg-gray-300 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              By signing up you agree to DOMINO{' '}
              <a href="#" className="underline">Privacy Policy</a> and{' '}
              <a href="#" className="underline">Terms & Conditions</a>
            </label>
          </div>

          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitch size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTiktok size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaDiscord size={20} /></a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">Customer Support</a></li>
                <li><a href="#" className="hover:underline">Submit a Request</a></li>
                <li><a href="#" className="hover:underline">Support Center</a></li>
                <li><a href="#" className="hover:underline">Customer Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About DOMINO</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">Company</a></li>
                <li><a href="#" className="hover:underline">Founder Q & A</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">DOMINO Club</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Newsroom & Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Software</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">CAM</a></li>
                <li><a href="#" className="hover:underline">CAM Feedback</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">Manage Your Account</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">DOMINO Store</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:underline">DOMINO Custom Gaming PC</a></li>
                <li><a href="#" className="hover:underline">Certified Refurbished</a></li>
                <li><a href="#" className="hover:underline">Gaming PCs</a></li>
                <li><a href="#" className="hover:underline">PC Parts and Accessories</a></li>
                <li><a href="#" className="hover:underline">DOMINO for Business</a></li>
                <li><a href="#" className="hover:underline">Find a Retailer</a></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-gray-400 hover:underline">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}