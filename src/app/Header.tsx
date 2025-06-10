"use client";
import Link from "next/link";
import { FaSearch, FaQuestionCircle, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "./loader";
import bcrypt from "bcryptjs";

export default function Header() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 6000);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsLoginForm(true);
    setError(null);
    setSuccess(null);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(null);
    setSuccess(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Login successful!");
        setTimeout(() => {
          toggleModal();
        }, 1000);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Registration successful! Please log in.");
        setIsLoginForm(true);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Login/Register Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">DOMINO</h2>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg mb-4 hover:bg-gray-100 transition-all flex items-center justify-center">
                <img src="/google.png" alt="Google Icon" className="w-5 h-5 mr-2" /> Sign in with Google
              </button>
              <p className="text-gray-500 text-sm mb-4">Or continue with</p>
              {isLoginForm ? (
                <form className="w-full space-y-4" onSubmit={handleLogin}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" name="remember" className="mr-2" /> Remember me
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all"
                  >
                    Sign In
                  </button>
                </form>
              ) : (
                <form className="w-full space-y-4" onSubmit={handleRegister}>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all"
                  >
                    Register
                  </button>
                </form>
              )}
              <p className="text-sm text-gray-600 mt-4">
                {isLoginForm ? (
                  <>
                    Not a member?{' '}
                    <a href="#" onClick={toggleForm} className="text-blue-600 hover:underline">
                      Create account
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <a href="#" onClick={toggleForm} className="text-blue-600 hover:underline">
                      Sign in
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className={`bg-purple-600 text-white text-center text-sm py-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Certified Refurbished Gaming PCs. <a href="#" className="underline">Shop now</a>
      </div>

      {/* Main Navigation */}
      <nav className={`text-white bg-black px-4 sm:px-8 py-4 flex justify-between items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold">Domino</a>
          <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">Deals</a>
          <a href="/Gaming-PCs" className="hover:text-gray-400">Gaming PCs</a>
          <a href="#" className="hover:text-gray-400">Components</a>
          <a href="/Gaming-Gear" className="hover:text-gray-400">Gaming Gear</a>
          <a href="/Monitors" className="hover:text-gray-400">Monitors</a>
          <a href="/Software" className="hover:text-gray-400">Software</a>
          <a href="/Community" className="hover:text-gray-400">Community</a>
        </div>

        <div className="flex space-x-4">
          <FaSearch className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaQuestionCircle className="text-xl hover:text-gray-400 cursor-pointer" />
          <FaUser className="text-xl hover:text-gray-400 cursor-pointer" onClick={toggleModal} />
          <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          <a href="#" className="hover:text-gray-400" onClick={toggleMobileMenu}>Deals</a>
          <a href="/Gaming-PCs" className="hover:text-gray-400" onClick={toggleMobileMenu}>Gaming PCs</a>
          <a href="#" className="hover:text-gray-400" onClick={toggleMobileMenu}>Components</a>
          <a href="/Gaming-Gear" className="hover:text-gray-400" onClick={toggleMobileMenu}>Gaming Gear</a>
          <a href="/Monitors" className="hover:text-gray-400" onClick={toggleMobileMenu}>Monitors</a>
          <a href="/Software" className="hover:text-gray-400" onClick={toggleMobileMenu}>Software</a>
          <a href="/Community" className="hover:text-gray-400" onClick={toggleMobileMenu}>Community</a>
        </div>
      )}

      <div className={`bg-gray-100 py-4 flex flex-wrap justify-center gap-2 items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded flex items-center space-x-1 sm:space-x-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <span className="font-bold text-xs sm:text-base">Windows</span>
          <span className="text-xs sm:text-sm">Get to know Windows 11</span>
        </div>
        <span className="font-bold text-black text-xs sm:text-base hover:text-[#76B900] transition-colors duration-300 cursor-pointer">NVIDIA</span>
        <span className="font-bold text-black text-xs sm:text-base hover:text-[#ED1C24] transition-colors duration-300 cursor-pointer">AMD</span>
        <span className="font-bold text-black text-xs sm:text-base hover:text-[#0071C5] transition-colors duration-300 cursor-pointer">Intel</span>
      </div>
    </>
  );
}

/* Backend Logic (Extract to pages/api/auth/login.ts and pages/api/auth/register.ts when ready) */

// Auth Utilities
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Placeholder Database Functions (Replace with actual database logic)
async function findUserByEmail(email: string): Promise<any> {
  // Example: return await db.users.findOne({ email });
  return null; // Simulate no user found
}

async function createUser(userData: any): Promise<any> {
  // Example: return await db.users.insertOne(userData);
  return userData; // Simulate successful creation
}

// API Route: /api/auth/login
async function loginHandler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // In a real app, generate a JWT or session token here
    return res.status(200).json({ message: "Login successful", user: { email } });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}

// API Route: /api/auth/register
async function registerHandler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const userData = { fullName, email, password: hashedPassword };
    await createUser(userData);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}