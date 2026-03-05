"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const mainItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Applications", href: "/admin/applications", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      setIsCollapsed(!isDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isCollapsed === null) return null;

  return (
    <aside
      className={`bg-white border-r border-slate-200/80 transition-all duration-300 ease-in-out flex flex-col h-screen sticky top-0 z-40 ${isCollapsed ? "w-16" : "w-60"
        }`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100/80">
        {!isCollapsed && (
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="QuickHire Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-bold text-[#25324B]">QuickHire</span>
          </Link>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-1.5 text-slate-500 hover:bg-slate-100 transition ${isCollapsed ? "mx-auto" : ""
            }`}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-5 px-3 space-y-8 overflow-y-auto">
        {/* Main Menu */}
        <div className="space-y-1.5">
          {mainItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-lg ${isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <item.icon
                  size={20}
                  className={`${isActive
                      ? "text-indigo-600"
                      : "text-slate-400 group-hover:text-slate-700"
                    }`}
                />

                {!isCollapsed && (
                  <span className="font-medium text-sm whitespace-nowrap">
                    {item.name}
                  </span>
                )}

                {/* Tooltip (Collapsed Mode) */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
