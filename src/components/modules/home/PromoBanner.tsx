import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-blue-600 rounded-3xl p-12 flex flex-col lg:flex-row items-center overflow-hidden relative shadow-2xl shadow-blue-500/20">
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-[family-name:var(--font-clash-display)] leading-tight">
            Start posting <br className="hidden md:block" /> jobs today
          </h2>
          <p className="text-blue-100 mb-8 text-lg font-medium opacity-90">
            Start posting jobs for only $10. Reach thousands of qualified candidates instantly.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all active:scale-95 shadow-lg shadow-black/5"
          >
            Sign Up For Free
          </Link>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-end relative">
          <div className="relative w-full max-w-xl h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
            <Image
              src="/images/3.1 Dashboard Company.jpg"
              alt="Dashboard Interface"
              fill
              className="object-cover object-left-top"
            />
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
