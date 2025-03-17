"use client";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "./loader";
//this will be test commit form Alex136201
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
  {/* Right Side - Image with Blurred Background */}
{/* Right Side - Image with Lowered Blurred Background */}
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
     </div>


  );
}
