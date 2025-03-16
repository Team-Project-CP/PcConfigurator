import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
// npm install react-icons --> use this in terminal for install icons in other cays will be erros)

export default function Navbar() {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center text-sm py-2">
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now &gt;</a>
      </div>
      
      {/* Main Navbar */}
      <nav className="text-white px-8 py-4 flex justify-center items-center">
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
 <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 relative flex flex-col items-start text-left  min-h-[450px] w-full"> 
        <div className="mt-16">
          <h1 className="font-bold text-black text-6xl">Build Your Custom PC</h1>
          <p className="text-xl text-gray-600 mt-2 mb-6">Custom PC built by you, let's build together!</p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-purple-700 transition-all shadow-md">
            Start Building
          </button>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 text-gray-600">PC was build</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">350</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 text-gray-600">Consultions</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">420</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base/7 text-gray-600">Working Since</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">2020</dd>
      </div>
    </dl>
  </div>
</div>
     </div>


  );
}
