
"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#202430] text-slate-300 pt-24 pb-12 overflow-hidden border-t border-slate-800/60 mt-20">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <Image src="/logo.svg" alt="QuickHire Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">QuickHire</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8 pr-4">
              Great platform for the job seeker that is passionate about startups. Find your dream job easier and launch an incredible career today.
            </p>
            <div className="flex space-x-4">
              {/* Social Links Icons */}
              {[
                { name: 'Twitter', src: '/icons/Twitter.svg' },
                { name: 'LinkedIn', src: '/icons/LinkedIn.svg' },
                { name: 'Facebook', src: '/icons/facebook.svg' },
                { name: 'Instagram', src: '/icons/Instagram.svg' },
                { name: 'Dribbble', src: '/icons/Dribbble.svg' }
              ].map((social) => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group-social">
                  <span className="sr-only">{social.name}</span>
                  <Image src={social.src} alt={social.name} width={20} height={20} className="w-5 h-5 object-contain transition-transform group-social-hover:scale-110 duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wide mb-6">About</h4>
            <ul className="space-y-3">
              {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wide mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-8 md:mt-0">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h4 className="font-semibold text-white tracking-wide mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Get job notifications
              </h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                The latest job news, articles, sent to your inbox weekly.
              </p>
              <form className="relative flex shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  className="w-full bg-slate-900/60 border border-slate-700/60 focus:border-blue-500 rounded-l-xl py-3 pl-4 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 rounded-r-xl transition-all duration-300 flex items-center justify-center border border-blue-600 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} QuickHire. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <span>Built with passion</span>
            <svg className="w-4 h-4 text-rose-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by QuickHire Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}