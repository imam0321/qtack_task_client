import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <Image src="/logo.svg" alt="QuickHire Logo" width={40} height={40} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 font-[family-name:var(--font-clash-display)]">QuickHire</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Find Jobs
            </Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Browse Companies
            </Link>
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors px-4 py-2">
            Login
          </Link>
          <div className="w-px h-6 bg-slate-300 mx-2 hidden sm:block"></div>
          <Link href="#" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-500 transition-all shadow-md shadow-blue-500/20 active:scale-95">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}