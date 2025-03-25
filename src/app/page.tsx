"use client";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "./loader";
import { FaHammer, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';

export default function Navbar() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }
  
  
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center text-sm py-2">
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now &gt;</a>
      </div>
      
      {/* Main Navbar */}
      <nav className="text-white bg-black px-8 py-4 flex justify-center items-center">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">Domino</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">Deals</a>
            <a href="#" className="hover:text-gray-400">Gaming PCs</a>
            <a href="#" className="hover:text-gray-400">Components</a>
            <a href="#" className="hover:text-gray-400">Gaming Gear</a>
            <a href="#" className="hover:text-gray-400">Monitors</a>
            <a href="#" className="hover:text-gray-400">Software</a>
            <a href="#" className="hover:text-gray-400">Community</a>
          </div>
        </div>
        
        {/* Right Section: Icons */}
        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {/* Brand Section */}
      <div className="bg-gray-100 py-4 flex justify-center space-x-6 items-center">
        <div className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2">
          <span className="font-bold">Windows</span>
          <span className="text-sm">Get to know Windows 11</span>
        </div>
        <span className="font-bold text-black">NVIDIA</span>
        <span className="font-bold text-black">AMD</span>
        <span className="font-bold text-black">intel</span>
      </div>

{/* Customize Pc Preview Part */}

<div className="bg-white px-[5%] py-[5%] flex flex-col lg:flex-row items-center justify-between  w-full">
  
  {/* Left Side - Text */}
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

  {/* Right Side - Image */}
<div className="lg:w-1/2 flex justify-center relative mt-[3%] lg:mt-0 before:absolute before:content-[''] before:w-[400px] before:h-[400px] before:bg-purple-600 before:blur-[100px] before:opacity-90 before:rounded-full before:top-[60%] before:translate-y-[-70%] ">
  
  {/* Image */}
  <img 
    src="/main-pc.png" 
    className="w-[100%] relative"
    alt="Custom PC"
  />
</div>


</div>



{/*small info block */}
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



{/* Feature section */}
<div className="flex space-x-8 justify-center items-center mt-12 min-h-[500px]">
  <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center"> {/* Added justify-center to center the content */}
    <FaHammer className="text-4xl text-blue-500 mb-4" />
    <h1 className="text-xl font-semibold mb-2">Quality test</h1>
    <p className="text-center text-gray-600">Every product undergoes thorough testing to <br />ensure top-notch quality and durability, <br />meeting the highest standards</p>
  </div>

  <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center"> {/* Added justify-center to center the content */}
    <FaShieldAlt className="text-4xl text-green-500 mb-4" />
    <h1 className="text-xl font-semibold mb-2">2-Year-Warranty</h1>
    <p className="text-center text-gray-600">Enjoy peace of mind with our 2-year warranty. <br /> We're here to support you if any  <br />issues arise within this period</p>
  </div>

  <div className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow-lg w-100 h-[400px] justify-center"> {/* Added justify-center to center the content */}
    <FaTachometerAlt className="text-4xl text-red-500 mb-4" />
    <h1 className="text-xl font-semibold mb-2">Fast-Build-Service</h1>
    <p className="text-center text-gray-600">Our fast-build service ensures quick <br /> delivery without sacrificing quality, <br /> getting your project done on time</p>
  </div>
</div>

{/* Some Advertisment*/}
<div className="bg-white py-16">

  
  <div className="mx-8">
    {/* Rectangle with stuff inside */}
    <div className="bg-black text-white p-8 rounded-lg flex items-center mx-auto w-full max-w-[1200px]">
      {/* Left Side*/}
      <div className="flex flex-col w-2/3 mr-6">
        <h1 className="text-5xl font-semibold mb-4">More Games More Glory</h1>
        <p className="text-lg mb-6">
          Get Spider-Man 2™ when you buy select AMD Ryzen™ <br />
          processors, AMD Radeon™ RX Series graphics cards, or AMD <br />
          configured systems.*
        </p>

        {/* Learn More Button */}
        <a
          href="#"
          className="border-2 border-white text-xl text-white py-3 px-10 rounded-md hover:bg-white hover:text-black transition-colors duration-300 self-start"
        >
          Learn more
        </a>
      </div>

    {/* Image  */}
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




</div>
  );
}

