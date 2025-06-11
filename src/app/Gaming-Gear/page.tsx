'use client';
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
      {/* Top Banner */}
     <Header />
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
          <Footer isVisible={isVisible} />
    </main>
  );
}
