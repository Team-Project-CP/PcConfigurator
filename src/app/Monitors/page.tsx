"use client";
import { useState, useEffect } from "react";
import Loader from "../loader";
import Link from 'next/link';
import {
  FaSearch, FaQuestionCircle, FaUser, FaShoppingCart,
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaTwitch, FaTiktok, FaDiscord
} from 'react-icons/fa';

export default function MonitorsPage() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 60);
  }, []);

  useEffect(() => {
    const scrollButton = document.getElementById("scroll-to-gaming");
    const handleScrollToGaming = () => {
      const gamingSection = document.getElementById("gaming-monitors");
      if (gamingSection) {
        gamingSection.scrollIntoView({ behavior: "smooth" });
      }
    };
    if (scrollButton) scrollButton.onclick = handleScrollToGaming;
    return () => { if (scrollButton) scrollButton.onclick = null; };
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center text-sm py-2">
        Certified Refurbished Gaming PCs. <Link href="#" className="underline">Shop now &gt;</Link>
      </div>

      {/* Navigation Bar */}
      <nav className="text-white bg-black px-8 py-4 flex justify-center items-center">
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
        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white px-[5%] py-[5%] flex flex-col lg:flex-row items-center justify-between w-full">
        <div className={`text-left transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="font-bold text-black text-[7vw] leading-tight">
            Discover Top Monitors
          </h1>
          <p className="text-[2vw] sm:text-xl text-gray-600 mt-2 mb-[3%]">
            Find the perfect monitor for gaming, work, and entertainment.
          </p>
          <button id="scroll-to-gaming" className="bg-blue-600 mt-[2%] text-white px-[5%] py-[3%] rounded-lg text-[2vw] sm:text-xl font-semibold hover:bg-blue-700 transition-all shadow-md">
            Browse Gaming Monitors
          </button>
        </div>
        <div className={`lg:w-1/2 flex justify-center relative mt-[3%] lg:mt-0 before:absolute before:content-[''] before:w-[400px] before:h-[400px] before:bg-blue-600 before:blur-[100px] before:opacity-90 before:rounded-full before:top-[60%] before:translate-y-[-70%] transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <img src="/Monitors/Monitors_hero.png" className="w-[100%] relative" alt="Monitors" />
        </div>
      </div>

     {/* Gaming Monitors Section */}
<section className="py-16 px-6 lg:px-20 bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-center">Gaming Monitors</h2>
  <p className="text-center text-gray-500 mb-10">
    Browse our high-performance gaming monitors for the ultimate experience.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        img: "gaming1.png",
        title: "Gaming Monitor 1",
        desc: "144Hz Full HD Display",
        price: "$199.99"
      },
      {
        img: "gaming2.png",
        title: "Gaming Monitor 2",
        desc: "165Hz QHD Display",
        price: "$249.99"
      },
      {
        img: "gaming3.png",
        title: "Gaming Monitor 3",
        desc: "4K UHD Display",
        price: "$329.99"
      },
      {
        img: "gaming4.png",
        title: "Gaming Monitor 4",
        desc: "240Hz Esports Ready",
        price: "$399.99"
      }
    ].map((monitor, index) => (
      <div key={index} className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div>
          <img
            src={`/Monitors/${monitor.img}`}
            alt={monitor.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{monitor.title}</h3>
          <p className="text-sm text-gray-400">{monitor.desc}</p>
        </div>
        <p className="font-bold text-[#6C38CC] mt-4">{monitor.price}</p>
      </div>
    ))}
  </div>
</section>

      {/* Office, Home, Graphical Sections (unchanged placeholders) */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-center">Office Monitors</h2>
  <p className="text-center text-gray-500 mb-10">
    Explore our curated office monitor selection.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        img: "office1.png",
        title: "Office Monitor 1",
        desc: "Full HD for Office Work",
        price: "$129.99"
      },
      {
        img: "office2.png",
        title: "Office Monitor 2",
        desc: "Wide 21:9 Productivity Display",
        price: "$199.99"
      },
      {
        img: "office3.png",
        title: "Office Monitor 3",
        desc: "Budget HD Monitor",
        price: "$99.99"
      }
    ].map((monitor, index) => (
      <div key={index} className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div>
          <img
            src={`/Monitors/${monitor.img}`}
            alt={monitor.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{monitor.title}</h3>
          <p className="text-sm text-gray-400">{monitor.desc}</p>
        </div>
        <p className="font-bold text-[#6C38CC] mt-4">{monitor.price}</p>
      </div>
    ))}
  </div>
</section>

<section className="py-16 px-6 lg:px-20 bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-center">Home Monitors</h2>
  <p className="text-center text-gray-500 mb-10">
    Explore our curated home monitor selection.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        img: "home1.png",
        title: "Home Monitor 1",
        desc: "Casual Use, Full HD",
        price: "$109.99"
      },
      {
        img: "home2.png",
        title: "Home Monitor 2",
        desc: "Streaming & Multimedia",
        price: "$159.99"
      },
      {
        img: "home3.png",
        title: "Home Monitor 3",
        desc: "Family Friendly 24 inch",
        price: "$119.99"
      }
    ].map((monitor, index) => (
      <div key={index} className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div>
          <img
            src={`/Monitors/${monitor.img}`}
            alt={monitor.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{monitor.title}</h3>
          <p className="text-sm text-gray-400">{monitor.desc}</p>
        </div>
        <p className="font-bold text-[#6C38CC] mt-4">{monitor.price}</p>
      </div>
    ))}
  </div>
</section>


<section className="py-16 px-6 lg:px-20 bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-center">Graphical Monitors</h2>
  <p className="text-center text-gray-500 mb-10">
    Explore our curated graphical monitor selection.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        img: "graphical1.png",
        title: "Graphical Monitor 1",
        desc: "Color Accurate QHD",
        price: "$299.99"
      },
      {
        img: "graphical2.png",
        title: "Graphical Monitor 2",
        desc: "HDR 4K Editing Display",
        price: "$449.99"
      },
      {
        img: "graphical3.png",
        title: "Graphical Monitor 3",
        desc: "Designers' Choice 32\"",
        price: "$399.99"
      }
    ].map((monitor, index) => (
      <div key={index} className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div>
          <img
            src={`/Monitors/${monitor.img}`}
            alt={monitor.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{monitor.title}</h3>
          <p className="text-sm text-gray-400">{monitor.desc}</p>
        </div>
        <p className="font-bold text-[#6C38CC] mt-4">{monitor.price}</p>
      </div>
    ))}
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-8">
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
                <input type="email" placeholder="Enter your email" className="w-full sm:w-96 px-4 py-2 rounded-l-md text-black focus:outline-none mb-4 sm:mb-0" />
                <button className="bg-gray-200 text-gray-900 px-6 py-2 rounded-r-md sm:rounded-l-none hover:bg-gray-300 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              By signing up you agree to DOMINO <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms & Conditions</a>
            </label>
          </div>

          <div className="flex space-x-4 mb-8">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-white"><Icon size={20} /></a>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {[
              { title: "Contact", items: ["Customer Support", "Submit a Request", "Support Center", "Customer Reviews"] },
              { title: "About DOMINO", items: ["Company", "Founder Q & A", "Careers"] },
              { title: "Community", items: ["DOMINO Club", "Podcast", "Newsroom & Blog"] },
              { title: "Software", items: ["CAM", "CAM Feedback"] },
              { title: "Account", items: ["Manage Your Account"] },
              { title: "DOMINO Store", items: ["DOMINO Custom Gaming PC", "Certified Refurbished", "Gaming PCs", "PC Parts and Accessories", "DOMINO for Business", "Find a Retailer"] }
            ].map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {items.map((item, i) => <li key={i}><a href="#" className="hover:underline">{item}</a></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-gray-400 hover:underline">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
