'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function GamingGearPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Navigation */}
      <nav className={`text-white bg-black px-8 py-4 flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">Domino</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">Deals</a>
            <a href="/Gaming-PCs" className="hover:text-gray-400">Gaming PCs</a>
            <a href="#" className="hover:text-gray-400">Components</a>
            <a href="/Gaming-Gear" className="hover:text-gray-400">Gaming Gear</a>
            <a href="/Monitors" className="hover:text-gray-400">Monitors</a>
            <a href="/Software" className="hover:text-gray-400">Software</a>
            <a href="/Community" className="hover:text-gray-400">Community</a>
          </div>
        </div>
      </nav>


      {/* Top Banner */}
      <div className={`bg-purple-600 text-white text-center text-sm py-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now &gt;</a>
      </div>

{/* HERO SECTION */}
<section className="bg-black text-white px-6 md:px-16 py-20 md:py-24 flex flex-col md:flex-row items-center justify-center gap-10 text-center">
  <div className="max-w-xl">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">GeForce RTX 5090</h1>
    <p className="text-lg mb-6">Powerful. Beautiful. Minimalist. A GPU for the new age.</p>
    <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-white font-semibold transition">
      Explore Builds
    </button>
  </div>
  <div className="w-full max-w-xl">
    <Image
      src="/Gaming-PCs/images/PC-hero.png"
      alt="Hero Product"
      width={700}
      height={700}
      className="rounded-lg w-full h-auto"
    />
  </div>
</section>


{/* LIMITED EDITION PCs */}
<section className="py-16 px-6 md:px-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-8">Limited Edition PCs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <Image src={`/Gaming-PCs/images/product-${i}.png`} alt={`Product ${i}`} width={300} height={200} className="mx-auto" />
        <h3 className="mt-4 text-lg font-semibold">LIMITED PC #{i}</h3>
        <p className="text-sm text-gray-600">RTX 4090, Intel i9, 32GB RAM</p>
        <p className="text-purple-600 font-bold mt-2">$3,499.00</p>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">View</button>
      </div>
    ))}
  </div>
</section>

{/* NZXT GAMING PCs */}
<section className="py-16 px-6 md:px-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-8">NZXT Gaming PCs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[4, 5, 6].map((i) => (
      <div key={i} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <Image src={`/Gaming-PCs/images/product-${i}.png`} alt={`Product ${i}`} width={300} height={200} className="mx-auto" />
        <h3 className="mt-4 text-lg font-semibold">NZXT PC #{i}</h3>
        <p className="text-sm text-gray-600">RTX 4070, Ryzen 7, 16GB RAM</p>
        <p className="text-purple-600 font-bold mt-2">$2,299.00</p>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Shop</button>
      </div>
    ))}
  </div>
</section>

{/* LIMITED TIME DEALS */}
<section className="py-16 px-6 md:px-16">
  <h2 className="text-2xl md:text-3xl font-bold mb-8">Limited Time Deals</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <Image src={`/Gaming-PCs/images/deal-${i}.png`} alt={`Deal ${i}`} width={300} height={200} className="mx-auto" />
        <h3 className="mt-4 text-lg font-semibold">Gaming Accessory #{i}</h3>
        <p className="text-purple-600 font-bold mt-2">From $99</p>
        <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Grab Deal</button>
      </div>
    ))}
  </div>
</section>

{/* COLOBORATES */}
<section className="py-16 px-6 md:px-16 text-white">
  <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Special Offers</h2>
  <div className="space-y-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col md:flex-row items-center md:items-start bg-black p-6 border rounded-lg shadow-lg">
        {/* Left side: Image */}
        <div className="flex-1 mb-4 md:mb-0 md:w-1/2">
          <Image 
            src={`/Gaming-PCs/images/colaborate-${i}.png`} 
            alt={`Coloborate ${i}`} 
            width={300} 
            height={200} 
            className="mx-auto"
          />
        </div>
        
        {/* Right side: Text */}
        <div className="flex-1 ml-0 md:ml-8 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">THE LEGEND IS UNBEATABLE #{i}</h3>
          
          <p className="mb-4">
            AMD Ryzen™ 9000 Series processors
          </p>
          <button className="mt-4 w-auto bg-black hover:bg-gray-800 px-10 py-2 rounded border-2 border-white">
            Shop AMD PCs
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
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
    </main>
  );
}
