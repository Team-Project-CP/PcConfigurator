"use client";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';

export default function DominoClub() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation (same as in the screenshot) */}
      <nav className="bg-black text-white px-8 py-4 flex justify-center items-center">
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
        <div className="flex space-x-6 ml-auto">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="relative bg-gradient-to-r from-purple-200 to-blue-200 py-16 text-center">
        {/* Placeholder background (replace with your image) */}
        <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
            NZXT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to the Domino Club</h1>
          <p className="text-lg text-gray-700 mb-6">Join the ultimate gaming community and gain access to perks from NZXT</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
            Join the Club
          </button>
        </div>
        {/* Placeholder for characters (replace with your image) */}
        <div className="mt-8">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            [Placeholder for Characters Image]
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">Get exclusive giveaways, digital goodies, and unique experiences</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Complete Quests */}
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                [Placeholder for Quest Image]
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Quests</h3>
              <p className="text-gray-600">Take fun tasks on your favorite platforms. The more quests you complete, the more progress in the NZXT Club</p>
            </div>
            {/* Earn Pucci Points */}
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                [Placeholder for Points Image]
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Pucci Points</h3>
              <p className="text-gray-600">Earn Pucci Points by completing quests and checking back daily for new opportunities. Each quest gets you closer to exclusive experiences</p>
            </div>
            {/* Unlock Rewards */}
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                [Placeholder for Rewards Image]
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlock Rewards</h3>
              <p className="text-gray-600">Unlock rewards and exclusive experiences and perks that you won’t find anywhere else. The more you engage, the more you unlock!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral and Leaderboard Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Invite Your Friends */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Invite Your Friends</h3>
              <p className="text-gray-600 mb-4">Spread the word! Invite your friends to join the NZXT Club and earn Pucci Points when they sign up. The more friends you invite, the more rewards you’ll unlock!</p>
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                [Placeholder for Friends Image]
              </div>
            </div>
            {/* See How You Stack Up */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See How You Stack Up</h3>
              <p className="text-gray-600 mb-4">Climb the leaderboard by completing quests and earning Pucci Points. Compete with NZXT fans and showcase your status. The higher the rank, the better!</p>
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                [Placeholder for Leaderboard Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rewards Await Section */}
      <section className="py-16 bg-gradient-to-r from-purple-200 to-blue-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rewards Await</h2>
          <p className="text-lg text-gray-700 mb-6">Join the NZXT Club today to unlock exclusive rewards and be part of one of our most exciting experiences as we continue to build a community. The more you contribute, the more you’ll grow together!</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
            Join the Club
          </button>
          <div className="mt-8">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              [Placeholder for Rewards Image]
            </div>
          </div>
        </div>
      </section>

      {/* Footer (same as in the screenshot) */}
      <footer className="bg-gray-900 text-white py-12">
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
              <a href="#" className="underline">Privacy Policy</a> and{' '}
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
      </footer>
    </div>
  );
}