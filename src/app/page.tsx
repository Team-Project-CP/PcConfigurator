"use client";
import Link from "next/link"
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "./loader";
import { FaHammer, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true); // Trigger animations after loading
    }, 6000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {/* Top Banner */}
      <div className={`bg-purple-600 text-white text-center text-sm py-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now &gt;</a>
      </div>

      {/* Navigation */}
      <nav className={`text-white bg-black px-8 py-4 flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        {/* Logo and Links */}
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">Domino</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">Deals</a>
            <a href="#" className="hover:text-gray-400">Gaming PCs</a>
            <a href="#" className="hover:text-gray-400">Components</a>
            <a href="#" className="hover:text-gray-400">Gaming Gear</a>
            <a href="/Monitors" className="hover:text-gray-400">Monitors</a>
            <a href="/Software" className="hover:text-gray-400">Software</a>
            <a href="/Community" className="hover:text-gray-400">Community</a>
          </div>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {/* Brands */}
      <div className={`bg-gray-100 py-4 flex justify-center space-x-6 items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <span className="font-bold">Windows</span>
          <span className="text-sm">Get to know Windows 11</span>
        </div>
        <span className="font-bold text-black hover:text-[#76B900] transition-colors duration-300 cursor-pointer">NVIDIA</span>
        <span className="font-bold text-black hover:text-[#ED1C24] transition-colors duration-300 cursor-pointer">AMD</span>
        <span className="font-bold text-black hover:text-[#0071C5] transition-colors duration-300 cursor-pointer">Intel</span>
      </div>

      {/* Main PC Section */}
      <div className="bg-white px-[5%] py-[5%] flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Text */}
        <div className={`text-left transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="font-bold text-black text-[7vw] leading-tight">
            Build Your <br /> Custom PC
          </h1>
          <p className="text-[2vw] sm:text-xl text-gray-600 mt-2 mb-[3%]">
            Custom PC built by you, let's build together!
          </p>
          <button className="bg-purple-600 mt-[2%] text-white px-[5%] py-[3%] rounded-lg text-[2vw] sm:text-xl font-semibold hover:bg-purple-700 transition-all shadow-md">
            Start Building
          </button>
        </div>

        {/* Right Image */}
        <div className={`lg:w-1/2 flex justify-center relative mt-[3%] lg:mt-0 before:absolute before:content-[''] before:w-[400px] before:h-[400px] before:bg-purple-600 before:blur-[100px] before:opacity-90 before:rounded-full before:top-[60%] before:translate-y-[-70%] transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <img src="/main-pc.png" className="w-[100%] relative" alt="Custom PC" />
        </div>
      </div>

      {/* Stats */}
      <div className={`bg-black py-24 sm:py-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">PC was build</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">350</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Consultions</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">420</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">Working Since</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">2020</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Features */}
      <div className={`flex space-x-8 justify-center items-center mt-12 min-h-[500px] transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center">
          <FaHammer className="text-4xl text-blue-500 mb-4" />
          <h1 className="text-xl font-semibold mb-2">Quality test</h1>
          <p className="text-center text-gray-600">Every product undergoes thorough testing to <br />ensure top-notch quality and durability, <br />meeting the highest standards</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center">
          <FaShieldAlt className="text-4xl text-green-500 mb-4" />
          <h1 className="text-xl font-semibold mb-2">2-Year-Warranty</h1>
          <p className="text-center text-gray-600">Enjoy peace of mind with our 2-year warranty. <br /> We're here to support you if any <br />issues arise within this period</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center">
          <FaTachometerAlt className="text-4xl text-red-500 mb-4" />
          <h1 className="text-xl font-semibold mb-2">Fast-Build-Service</h1>
          <p className="text-center text-gray-600">Our fast-build service ensures quick <br /> delivery without sacrificing quality, <br /> getting your project done on time</p>
        </div>
      </div>

      {/* Promo */}
      <div className={`bg-white py-16 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="mx-8">
          <div className="bg-black text-white p-8 rounded-lg flex items-center mx-auto w-full max-w-[1200px]">
            <div className="flex flex-col w-2/3 mr-6">
              <h1 className="text-5xl font-semibold mb-4">More Games More Glory</h1>
              <p className="text-lg mb-6">
                Get Spider-Man 2™ when you buy select AMD Ryzen™ <br />
                processors, AMD Radeon™ RX Series graphics cards, or AMD <br />
                configured systems.*
              </p>
              <a
                href="#"
                className="border-2 border-white text-xl text-white py-3 px-10 rounded-md hover:bg-white hover:text-black transition-colors duration-300 self-start"
              >
                Learn more
              </a>
            </div>
            <div className="w-1/3">
              <img src="/game1.jpg" alt="Spider-Man 2 Game" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Build Together */}
      <div className={`bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h1 className="text-center text-5xl font-bold mb-16">Let's Build Together!</h1>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 relative">
              <img src="/images/gaming-pc.png" alt="Custom Gaming PC" className="w-full" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold mb-8">Customize Your Gaming PC</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src="/wrench-star.svg" alt="Curated Parts" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Curated Parts</h3>
                    <p className="text-gray-300">Take your pick of top-of-the-line components like the latest GPUs, CPUs, and more.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src="/clock.svg" alt="FPS Guaranteed" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">FPS Guaranteed</h3>
                    <p className="text-gray-300">View popular games and their FPS performance alongside your build.</p>
                  </div>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all">
                Customize a PC
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className={`bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-900 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Chipset & Budget</h3>
              <p className="text-gray-300">Select your budget and your choice of AMD or Intel CPUs.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-900 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Pick Parts</h3>
              <p className="text-gray-300">Pick your components and accessories based on your performance and aesthetic needs.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-900 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">We Build & Ship</h3>
              <p className="text-gray-300">Our experts build and ship your product directly to you with a two-day build time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PC Types */}
      <div className={`bg-gray-100 py-16 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <h2 className="text-center text-4xl font-bold mb-16">Build Your Dream PC</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/gaming-icon.svg" alt="Gaming" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gaming</h3>
              <p className="text-gray-600 mb-6">Whether you want to play popular games, get eye-catching visuals, or hit peak FPS, our Prebuilts got you covered from mid-range to top-of-the-line GPUs and CPUs.</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
                Shop Player: One
              </button>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/streaming-icon.svg" alt="Streaming" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Streaming</h3>
              <p className="text-gray-600 mb-6">Ready to go live with your stream? We offer powerful CPUs, GPUs, and plenty capacity and performance so you can play and stream without taking a performance hit.</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
                Shop Player: Two
              </button>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/creating-icon.svg" alt="Creating" className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creating</h3>
              <p className="text-gray-600 mb-6">Multitask like a pro with maxed out performance parts in our newest cases, allowing you to tackle more applications and increase your workflow. Our gaming PCs go beyond gaming.</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
                Shop Player: Three
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Brand Partners Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-2200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">Our Brand Partners</h2>
            <p className="text-center text-gray-600 mb-8">
              We partner closely with brands you love to get you access to high-quality parts and peripherals to complete your setup.
            </p>
          </div>
          {/* Enhanced Image with Hover Effects */}
          <div className="flex justify-center mt-6">
            <div className="relative group">
              <img
                src="PartnerLogos.png"
                className="w-full max-w-2xl h-auto  transition-transform duration-500 "
               
              />
            
            </div>
          </div>
        </div>
      </div>

      {/* Boost Your Performance Section */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-2400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Boost Your Performance</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">GPU</h3>
                  <p className="text-gray-600">The Graphics Processing Unit offers pure power to push performance to new heights in the biggest games.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4l4 4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">CPU</h3>
                  <p className="text-gray-600">The Central Processing Unit multitasks well as increases performance in CPU-intensive games and helps avoid bottlenecks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">RAM</h3>
                  <p className="text-gray-600">Random Access Memory enables you to run multiple programs at once—the more RAM you have, the better you can multi-task.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img src="H7 Black PC.png" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Stay In Touch Section (Footer) */}
      <div className={`bg-gray-900 text-white py-12 transition-all duration-1000 delay-2600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Heading, Description, Email Input, and Dropdowns */}
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

          {/* Checkbox Section */}
          <div className="flex items-center mb-8">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              By signing up you agree to DOMINO{' '}
              <a href="#" className="underline">Privacy Policy</a> and{' '}
              <a href="#" className="underline">Terms & Conditions</a>
            </label>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitch size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTiktok size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaDiscord size={20} /></a>
          </div>

          {/* Links Grid */}
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

          {/* FAQ Link */}
          <div className="flex justify-end">
            <a href="#" className="text-gray-400 hover:underline">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
}