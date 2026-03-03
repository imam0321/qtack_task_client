"use client";

import LogoutButton from "@/components/shared/LogoutButton";
import { IUser } from "@/types";

export default function DashboardNavbar({ user }: { user: IUser }) {

  return (
    <header className="h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm">
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* User Info */}
        <div className="hidden md:flex flex-col justify-center">
          <span className="text-xs text-slate-500 uppercase tracking-wider">
            {user?.role}
          </span>
          <span className="text-sm font-semibold text-slate-800">
            {user?.email}
          </span>
        </div>

        {/* Logout Button */}
        <div className="flex items-center">
          {user && <LogoutButton />}
        </div>

      </div>
    </header>
  );
}
