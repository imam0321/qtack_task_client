/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { loginUser } from "@/services/auth/auth";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginForm({ redirectPath }: { redirectPath?: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state) {
      if (
        !state.success &&
        state.message &&
        state.message != "Validation failed"
      ) {
        toast.error(state.message);
      }
    }
  }, [state]);

  useEffect(() => {
    if (state?.formData) {
      setEmail(state.formData.email || "");
      setPassword(state.formData.password || "");
    }
  }, [state]);

  // const fillDemoUser = (role: "admin" | "user") => {
  //   setEmail(demoUsers[role].email);
  //   setPassword(demoUsers[role].password);
  // };

  return (
    <form
      action={formAction}
      className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <input type="hidden" name="redirectPath" value={redirectPath || ""} />

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-base font-semibold text-[#515B6F] font-epilogue"
        >
          Email Address
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isPending}
          className="w-full px-4 py-3 border border-[#D6DDEB] focus:border-[#4640DE] focus:ring-1 focus:ring-[#4640DE] outline-none transition-all font-epilogue"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-base font-semibold text-[#515B6F] font-epilogue"
        >
          Password
        </label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          disabled={isPending}
          className="w-full px-4 py-3 border border-[#D6DDEB] focus:border-[#4640DE] focus:ring-1 focus:ring-[#4640DE] outline-none transition-all font-epilogue"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#4640DE] text-white py-4 font-bold hover:bg-[#3b36c4] transition-colors font-epilogue disabled:opacity-60"
      >
        {isPending ? "Signing in..." : "Login"}
      </button>

      <p className="text-center text-[#515B6F] font-epilogue">
        Don&lsquo;t have an account?{" "}
        <Link
          href="/signup"
          className="text-[#4640DE] font-bold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
