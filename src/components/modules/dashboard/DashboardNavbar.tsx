"use client";

import LogoutButton from "@/components/shared/LogoutButton";
import { IUser } from "@/types";
import { User } from "lucide-react";

export default function DashboardNavbar({ user }: { user: IUser }) {
  const userName = user?.email;
  const role = user?.role;
  const firstLetter = userName?.trim().charAt(0).toUpperCase() || "";

  return (
    <header className="h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm">
      <div className="h-full px-6 md:px-8 lg:px-10 flex items-center justify-end">
        <div className="flex items-center gap-4">

          {/* User profile section */}
          <div className="group md:flex hidden items-center gap-2 cursor-pointer ">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800 tracking-tight leading-none">
                {userName}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">
                {role}
              </p>
            </div>

            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              {firstLetter ? (
                firstLetter
              ) : (
                <User size={18} strokeWidth={2.4} />
              )}
            </div>
          </div>

          {/* Subtle vertical divider */}
          <div className="hidden sm:block w-px h-8 bg-linear-to-b from-transparent via-slate-300/70 to-transparent" />

          {/* Logout button area */}
          <div className="flex items-center">
            {user && <LogoutButton />}
          </div>

        </div>
      </div>
    </header>
  );
}
