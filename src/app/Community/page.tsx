"use client";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaTiktok, FaDiscord } from 'react-icons/fa';
import Header from "../Header";
import Footer from "../Footer";

export default function DominoClub() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
     <Header />

     {/* Welcome Section */}
<section className="relative bg-[url('/Background.png')] bg-cover bg-center py-16 text-center min-h-screen">
  <div className="relative z-10 max-w-4xl mx-auto text-center items-center">
    <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
      DOMINO
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to the Domino Club</h1>
    <p className="text-lg text-gray-700 mb-6">Join the ultimate gaming community and gain access to perks from NZXT</p>
    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
      Join the Club
    </button>
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
                   <img
        src="/club1.png"
      />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Quests</h3>
              <p className="text-gray-600">Take fun tasks on your favorite platforms. The more quests you complete, the more progress in the NZXT Club</p>
            </div>
            {/* Earn Pucci Points */}
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                     <img
        src="/club2.png"
      />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Pucci Points</h3>
              <p className="text-gray-600">Earn Pucci Points by completing quests and checking back daily for new opportunities. Each quest gets you closer to exclusive experiences</p>
            </div>
            {/* Unlock Rewards */}
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 flex items-center justify-center">
                    <img
        src="/club3.png"
      />
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
                        <img
        src="/club4.png"
      />
              </div>
            </div>
            {/* See How You Stack Up */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See How You Stack Up</h3>
              <p className="text-gray-600 mb-4">Climb the leaderboard by completing quests and earning Pucci Points. Compete with NZXT fans and showcase your status. The higher the rank, the better!</p>
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                      <img
        src="/club5.png"
      />
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

      {/* Footer*/}
       <Footer isVisible={isVisible} />
    </div>
  );
}