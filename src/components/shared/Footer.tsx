import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socialIcons = [
    { name: "Facebook", src: "/icons/facebook.svg", href: "#" },
    { name: "Instagram", src: "/icons/Instagram.svg", href: "#" },
    { name: "Dribbble", src: "/icons/Dribbble.svg", href: "#" },
    { name: "LinkedIn", src: "/icons/LinkedIn.svg", href: "#" },
    { name: "Twitter", src: "/icons/Twitter.svg", href: "#" },
  ];
  const aboutLinks = [
    { label: "Companies", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Advice", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  const resourceLinks = [
    { label: "Help Docs", href: "#" },
    { label: "Guide", href: "#" },
    { label: "Updates", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="relative bg-[#202430] text-slate-300 pt-16 pb-8 lg:px-31 px-4">
      {/* Subtle Background Glows */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="QuickHire Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white font-red-hat-display">
                QuickHire
              </span>
            </Link>
            <p className="text-[#D6DDEB]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Nav Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {/* About */}
              <div>
                <h4 className="font-semibold text-lg text-white mb-6">About</h4>
                <ul className="space-y-3">
                  {aboutLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[#D6DDEB] inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-lg text-white tracking-wide mb-6">
                  Resources
                </h4>
                <ul className="space-y-3">
                  {resourceLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[#D6DDEB] inline-block hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <h4 className="font-semibold text-lg text-white tracking-wide mb-6">
              Get job notifications
            </h4>
            <p className="text-[#D6DDEB] mb-6">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-white text-[#A8ADB7] px-4 py-3 w-full outline-none border-none"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-[#4640DE] text-white font-bold px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="relative mt-10">
        <div className="pt-8 border-t border-white flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base font-medium text-white">
            2021 @ QuickHire. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-white">
            <div className="flex space-x-4">
              {/* Social Links Icons */}
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">{social.name}</span>
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
