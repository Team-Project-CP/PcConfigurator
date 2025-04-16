'use client';
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
      {/* Top Banner */}
      <div className={`bg-purple-600 text-white text-center text-sm py-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now &gt;</a>
      </div>

      {/* Navigation */}
      <nav className={`text-white bg-black px-8 py-4 flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">Domino</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">Deals</a>
            <a href="#" className="hover:text-gray-400">Gaming PCs</a>
            <a href="#" className="hover:text-gray-400">Components</a>
            <a href="/Gaming-Gear" className="hover:text-gray-400">Gaming Gear</a>
            <a href="#" className="hover:text-gray-400">Monitors</a>
            <a href="/Software" className="hover:text-gray-400">Software</a>
            <a href="/Community" className="hover:text-gray-400">Community</a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-[#1E1E1E] text-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* left part - text */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  It's Better to Bundle
                </h1>
                <p className="text-lg lg:text-xl mb-6">
                  Save up to $340 on Gaming Gear
                </p>
              </div>

          {/* Right part - img */}
            <div className="flex justify-center">
                <img 
                  src="/Gaming-Gear/images/gaming-bundle-hero.png" 
                  alt="Gaming Gear Bundle"
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
          </div>
</section>


      {/* Gaming Gear Bundles */}
<section className="py-16 px-6 lg:px-20">
  <h2 className="text-3xl font-bold mb-4 text-center">Gaming Gear Bundles</h2>
  <p className="text-center text-gray-500 mb-10">
    Save big on the essentials for your ideal setup.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        img: "OneMonitorArm.png",
        title: "Canvas 27 FHD 165Hz + Monitor Arm - Single",
        desc: "Bundle Canvas 27 FHD 165Hz and Monitor Arm",
        price: "$239.99"
      },
      {
        img: "DualMonitorArm.png",
        title: "2 Canvas 27 FHD 165Hz + Monitor Arm - Dual",
        desc: "Canvas 27 FHD 165Hz x2 and Dual Monitor Arm",
        price: "$429.99"
      },
      {
        img: "Monitor27inch.png",
        title: "Canvas 27F 165",
        desc: "27\" FHD 165 Hz Gaming Monitor",
        price: "$159.99"
      },
      {
        img: "MiniTLKKeyMouse.png",
        title: "Function Elite MiniTKL + Lift Elite Wireless + Zone Elite XXL",
        desc: "Premium Tenkeyless Magnetic Gaming Keyboard, Ultra Lightweight Wireless Gaming Mouse, and XXL Premium Cloth Gaming Mouse Pad",
        price: "$249.99"
      },
      {
        img: "LiftEliteWireless.png",
        title: "Lift Elite Wireless + Zone Elite XXL",
        desc: "Ultra Lightweight Wireless Gaming Mouse and XXL Premium Cloth Gaming Mouse Pad",
        price: "$94.99"
      },
      {
        img: "FunctionEliteMini.png",
        title: "Function Elite MiniTKL + Lift Elite Wireless",
        desc: "Premium Tenkeyless Magnetic Gaming Keyboard and Ultra Lightweight Wireless Gaming Mouse",
        price: "$239.99"
      }
    ].map((product, index) => (
      <div key={index} className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div>
          <img
            src={`/Gaming-Gear/images/Gaming-Gear-Bundles-Section/${product.img}`}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-sm text-gray-400">{product.desc}</p>
        </div>
        <p className="font-bold text-[#6C38CC] mt-4">{product.price}</p>
      </div>
    ))}
  </div>
</section>


      {/* Gaming Gear Individual */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-center">Gaming Gear Individual</h2>
  <p className="text-center text-gray-500 mb-10">
    Hear big savings loud and clear.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        img: "FunctionMiniTKLTopViewWhite.png",
        title: "Function 2 MiniTKL",
        desc: "Compact Tenkeyless Optical Gaming Keyboard",
        price: "$129.99"
      },
      {
        img: "FunctionTopViewwithWristRestWhite.png",
        title: "Function 2",
        desc: "Full-Size Optical Gaming Keyboard",
        price: "$139.99"
      },
      {
        img: "LiftErgoAngledFrontViewWhite.png",
        title: "Lift 2 Ergo",
        desc: "Lightweight Ergonomic Wired Gaming Mouse",
        price: "$49.99"
      },
      {
        img: "RelaSpeakersSwitchMixWhite.png",
        title: "Relay Speakers + SwitchMix",
        desc: "80 Watt Desktop Speakers and Headset Stand with Mixer",
        price: "$179.99"
      },
      {
        img: "RelayHeadsetHeroWhite.png",
        title: "Relay Headset",
        desc: "Hi-Res Certified Wired PC Gaming Headset",
        price: "$99.99"
      },
      {
        img: "RelayHeadsetSwitchMixWhite.png",
        title: "Relay Headset + SwitchMix",
        desc: "Small USB Microphone and Headset Stand with Mixer",
        price: "$109.99"
      }
    ].map((product, index) => (
      <div key={index} className="border rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div>
          <img
            src={`/Gaming-Gear/images/Gaming-Gear-Induvidual-Section/${product.img}`}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <p className="text-sm text-gray-400">{product.desc}</p>
        </div>
        <p className="font-bold text-[#6C38CC] mt-4">{product.price}</p>
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
