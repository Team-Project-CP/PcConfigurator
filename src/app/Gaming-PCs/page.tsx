'use client';

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";

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
      <Header />

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
        <Footer isVisible={isVisible} />
    </main>
  );
}
