import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { getCurrentUser } from "@/services/auth/auth";
import LogoutButton from "./LogoutButton";
export const dynamic = "force-dynamic";

export default async function Navbar() {
  const user = await getCurrentUser();
  const navLinks = [
    { name: "Find Jobs", href: "/find-jobs" },
    { name: "Browse Companies", href: "/browse-companies" },
    ...(user ? [{ name: "Dashboard", href: "/admin/dashboard" }] : []),
  ];

  return (
    <header className="sticky top-0 w-full lg:px-31 px-4 z-40 bg-white/70 backdrop-blur-md border-b border-[#D6DDEB]/30 md:bg-transparent md:backdrop-blur-none md:border-none">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="QuickHire Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-[#25324B] font-red-hat-display">
              QuickHire
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-4">
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
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          {user ? (
            <LogoutButton />
          ) : (
            <>
              <Link
                href="/login"
                className="text-[#4640DE] font-bold px-6 py-3"
              >
                Login
              </Link>
              <div className="w-px h-10 bg-[#D6DDEB] mx-2"></div>
              <Link
                href="/signup"
                className="bg-[#4640DE] text-white px-6 py-3 font-bold"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <MobileNav navLinks={navLinks} user={user} />
      </div>
    </header>
  );
}
