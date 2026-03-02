"use client";

import { logoutUser } from "@/services/auth/auth";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 text-[#FF4D4F] font-bold px-6 py-3 hover:bg-red-50 transition-colors cursor-pointer w-full text-left"
    >
      <LogOut size={20} />
      <span>Logout</span>
    </button>
  );
}