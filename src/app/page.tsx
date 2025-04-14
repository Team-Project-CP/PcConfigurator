"use client";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "./loader";
import { FaHammer, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  if (loading) {
    return <Loader />; // loading
  }
  
  
  return (
    <div>
      {/* top banner */}
      <div className="bg-purple-600 text-white text-center text-sm py-2">
        Certified Refurbished Gaming PCs. <Link href="#" className="underline">Shop now &gt;</Link>
      </div>
      
      {/* nav */}
      <nav className="text-white bg-black px-8 py-4 flex justify-center items-center">
        {/* logo and links */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">Domino</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-gray-400">Deals</Link>
            <Link href="#" className="hover:text-gray-400">Gaming PCs</Link>
            <Link href="#" className="hover:text-gray-400">Components</Link>
            <Link href="#" className="hover:text-gray-400">Gaming Gear</Link>
            <Link href="#" className="hover:text-gray-400">Monitors</Link>
            <Link href="/Software" className="hover:text-gray-400">Software</Link>
            <Link href="#" className="hover:text-gray-400">Community</Link>
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

      {/* brands */}
      <div className="bg-gray-100 py-4 flex justify-center space-x-6 items-center">
        <div className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <span className="font-bold">Windows</span>
          <span className="text-sm">Get to know Windows 11</span>
        </div>
        <span className="font-bold text-black hover:text-[#76B900] transition-colors duration-300 cursor-pointer">NVIDIA</span>
        <span className="font-bold text-black hover:text-[#ED1C24] transition-colors duration-300 cursor-pointer">AMD</span>
        <span className="font-bold text-black hover:text-[#0071C5] transition-colors duration-300 cursor-pointer">Intel</span>
      </div>

{/* main pc section */}

<div className="bg-white px-[5%] py-[5%] flex flex-col lg:flex-row items-center justify-between  w-full">
  
  {/* left text */}
  <div className="text-left">
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

  {/* right image */}
<div className="lg:w-1/2 flex justify-center relative mt-[3%] lg:mt-0 before:absolute before:content-[''] before:w-[400px] before:h-[400px] before:bg-purple-600 before:blur-[100px] before:opacity-90 before:rounded-full before:top-[60%] before:translate-y-[-70%] ">
  
  {/* pc image */}
  <img 
    src="/main-pc.png" 
    className="w-[100%] relative"
    alt="Custom PC"
  />
</div>


</div>



{/*stats */}
      <div className="bg-black py-24 sm:py-20">
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



{/* features */}
<div className="flex space-x-8 justify-center items-center mt-12 min-h-[500px]">
  <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center">
    <FaHammer className="text-4xl text-blue-500 mb-4" />
    <h1 className="text-xl font-semibold mb-2">Quality test</h1>
    <p className="text-center text-gray-600">Every product undergoes thorough testing to <br />ensure top-notch quality and durability, <br />meeting the highest standards</p>
  </div>

  <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center">
    <FaShieldAlt className="text-4xl text-green-500 mb-4" />
    <h1 className="text-xl font-semibold mb-2">2-Year-Warranty</h1>
    <p className="text-center text-gray-600">Enjoy peace of mind with our 2-year warranty. <br /> We're here to support you if any  <br />issues arise within this period</p>
  </div>

  <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center">
    <FaTachometerAlt className="text-4xl text-red-500 mb-4" />
    <h1 className="text-xl font-semibold mb-2">Fast-Build-Service</h1>
    <p className="text-center text-gray-600">Our fast-build service ensures quick <br /> delivery without sacrificing quality, <br /> getting your project done on time</p>
  </div>
</div>

{/* promo */}
<div className="bg-white py-16">

  
  <div className="mx-8">
    {/* promo box */}
    <div className="bg-black text-white p-8 rounded-lg flex items-center mx-auto w-full max-w-[1200px]">
      {/* promo text */}
      <div className="flex flex-col w-2/3 mr-6">
        <h1 className="text-5xl font-semibold mb-4">More Games More Glory</h1>
        <p className="text-lg mb-6">
          Get Spider-Man 2™ when you buy select AMD Ryzen™ <br />
          processors, AMD Radeon™ RX Series graphics cards, or AMD <br />
          configured systems.*
        </p>

        {/* button */}
        <a
          href="#"
          className="border-2 border-white text-xl text-white py-3 px-10 rounded-md hover:bg-white hover:text-black transition-colors duration-300 self-start"
        >
          Learn more
        </a>
      </div>

    {/* promo image */}
      <div className="w-1/3">
        <img
          src="/game1.jpg" 
          alt="Spider-Man 2 Game"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

{/* build together */}
<div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
  <h1 className="text-center text-5xl font-bold mb-16">Let's Build Together!</h1>
  
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* left pc */}
      <div className="lg:w-1/2 relative">
        <img 
          src="/images/gaming-pc.png" 
          alt="Custom Gaming PC" 
          className="w-full"
        />
      </div>
      
      {/* right features */}
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

{/* steps */}
<div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
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

{/* pc types */}
<div className="bg-gray-100 py-16">
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

</div>
  );
}

