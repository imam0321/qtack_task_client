/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { loginUser } from "@/services/auth/auth";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "@/components/shared/InputFieldError";

export default function LoginForm({ redirectPath }: { redirectPath?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state) {
      if (
        !state.success &&
        state.message &&
        state.message !== "Validation failed"
      ) {
        toast.error(state.message);
      }

      if (state.formData) {
        setEmail(state.formData.email || "");
        setPassword(state.formData.password || "");
      }
    }
  }, [state]);

  const fillDemoUser = (e: React.MouseEvent) => {
    e.preventDefault();
    setEmail("admin@gmail.com");
    setPassword("123456789");
  };

  return (
    <form
      action={formAction}
      className="w-full space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <input type="hidden" name="redirectPath" value={redirectPath || ""} />

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isPending}
          className="input-field"
        />
        <InputFieldError state={state} field="email" />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-slate-700"
        >
          Password <span className="text-red-500">*</span>
        </label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          disabled={isPending}
          className="input-field"
        />
        <InputFieldError state={state} field="password" />
      </div>

      <div className="space-y-2 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {isPending ? "Signing in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={fillDemoUser}
          className="w-full border-2 border-indigo-600 text-indigo-600 py-2.5 font-semibold rounded-lg"
        >
          Admin Demo
        </button>
      </div>

      <p className="text-center text-slate-600 text-sm">
        Don&lsquo;t have an account?{" "}
        <Link
          href="/signup"
          className="text-indigo-600 font-bold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
