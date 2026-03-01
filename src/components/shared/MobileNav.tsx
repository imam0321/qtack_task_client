"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MobileNavProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <Image
              src="/icons/bar.svg"
              alt="bar"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel - Fixed Position */}
      {open && (
        <div className="fixed left-0 right-0 top-20 z-40 w-full bg-white border-b border-slate-200 px-4 py-2 space-y-2 animate-fade-in-down md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#515B6F] font-epilogue"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-slate-200 flex flex-col space-y-4">
            <Link
              href="/login"
              className="text-[#4640DE] font-bold text-center py-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#4640DE] text-white py-3 text-center font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
