"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from "react-icons/fa";

// Define the props interface
interface FooterProps {
  isVisible: boolean;
}

export default function Footer({ isVisible }: FooterProps) {
  return (
    <div className={`bg-gray-900 text-white py-12 transition-all duration-1000 delay-2600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
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
        <div className="flex items-center mb-8">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-400 text-sm">
            By signing up you agree to DOMINO{' '}
            <a href="/Privacy-Policy" className="underline">Privacy Policy</a> and{' '}
            <a href="#" className="underline">Terms & Conditions</a>
          </label>
        </div>
        <div className="flex space-x-4 mb-8">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitch size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTiktok size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaDiscord size={20} /></a>
        </div>
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
        <div className="flex justify-end">
          <a href="#" className="text-gray-400 hover:underline">FAQ</a>
        </div>
      </div>
    </div>
  );
}