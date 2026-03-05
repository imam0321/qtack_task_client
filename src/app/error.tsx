"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F8FD] px-4 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 text-red-500 md:h-32 md:w-32">
        <AlertCircle size={48} className="md:hidden" />
        <AlertCircle size={64} className="hidden md:block" />
      </div>

      <h2 className="font-clash-display mb-4 text-4xl font-bold text-[#25324B] md:text-5xl">
        Something went wrong!
      </h2>
      <p className="mb-10 max-w-md text-lg text-[#515B6F]">
        An unexpected error occurred. We apologize for the inconvenience. Please
        try again or return to the homepage.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 rounded-lg bg-[#4640DE] px-8 py-4 font-bold text-white shadow-lg shadow-[#4640DE]/20 transition-all hover:bg-[#3b36bc] hover:shadow-xl active:scale-95"
        >
          <RefreshCcw size={20} />
          Try Again
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg border border-[#D6DDEB] bg-white px-8 py-4 font-bold text-[#25324B] shadow-sm transition-all hover:bg-slate-50 active:scale-95"
        >
          <Home size={20} />
          Back to Homepage
        </Link>
      </div>

      <div className="mt-16 text-sm text-[#7C8493]">
        <p>Error ID: {error.digest || "Unknown"}</p>
      </div>
    </div>
  );
}
