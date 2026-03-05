import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F8FD] px-4 text-center">
      <div className="relative mb-8 h-64 w-64 md:h-80 md:w-80">
        <Image
          src="/patterns/pattern-1.jpg"
          alt="404"
          fill
          className="rounded-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-clash-display text-9xl font-bold text-[#4640DE]/10 md:text-[12rem]">
            404
          </h1>
        </div>
      </div>

      <h2 className="font-clash-display mb-4 text-4xl font-bold text-[#25324B] md:text-5xl">
        Oops! Page not found
      </h2>
      <p className="mb-10 max-w-md text-lg text-[#515B6F]">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-[#4640DE] px-8 py-4 font-bold text-white shadow-lg shadow-[#4640DE]/20 transition-all hover:bg-[#3b36bc] hover:shadow-xl active:scale-95"
      >
        Back to Homepage
      </Link>

      <div className="mt-16 text-sm text-[#7C8493]">
        <p>© 2024 Qtack Task. All rights reserved.</p>
      </div>
    </div>
  );
}
