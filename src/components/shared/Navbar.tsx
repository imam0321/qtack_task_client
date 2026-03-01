"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFFFFF] border-b border-[#D6DDEB] shadow-sm transition-all duration-300">
      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 group">
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <Image src="/logo.svg" alt="QuickHire Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold text-[#25324B] font-red-hat-display">QuickHire</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-base font-medium text-[#515B6F] font-epilogue hover:text-[#4640DE] transition-colors">
                Find Jobs
              </Link>
              <Link href="#" className="text-base font-medium text-[#515B6F] font-epilogue hover:text-[#4640DE] transition-colors">
                Browse Companies
              </Link>
            </nav>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="#" className="text-[#4640DE] font-bold px-6 py-3 hover:opacity-80 transition-opacity">
              Login
            </Link>
            <div className="w-px h-10 bg-[#D6DDEB] mx-2"></div>
            <Link href="#" className="bg-[#4640DE] text-white px-6 py-3 font-bold hover:bg-[#3b36c4] transition-all active:scale-95 shadow-lg shadow-blue-500/20">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full bg-[#FFFFFF] border border-[#D6DDEB] focus:outline-none"
            >
              {open ? (
                <svg
                  className="w-6 h-6 text-[#25324B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <Image src="/icons/bar.svg" alt="bar" width={24} height={24} className="w-6 h-6 object-contain" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-8 space-y-6 animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="text-lg font-medium text-[#515B6F] font-epilogue hover:text-[#4640DE]">
              Find Jobs
            </Link>
            <Link href="#" className="text-lg font-medium text-[#515B6F] font-epilogue hover:text-[#4640DE]">
              Browse Companies
            </Link>
          </nav>

          <div className="pt-6 border-t border-slate-200 flex flex-col space-y-4">
            <Link href="#" className="text-[#4640DE] font-bold text-center py-2">
              Login
            </Link>
            <Link
              href="#"
              className="bg-[#4640DE] text-white py-4 text-center rounded-md font-bold shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}