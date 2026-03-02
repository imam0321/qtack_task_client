import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="">
      <div className="relative z-10 flex flex-col items-center px-4 lg:flex-row lg:px-31">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-clash-display text-5xl font-semibold text-[#25324B] md:text-6xl lg:text-7xl">
            Discover <br className="hidden lg:block" /> more than{" "}
            <br className="hidden lg:block" />
            <span className="relative inline-block font-clash-display font-semibold text-[#26A4FF]">
              5000+ Jobs
              <span className="absolute -bottom-6 left-0 h-6 w-full py-4">
                <Image
                  src="/patterns/hero-right-pattern.png"
                  alt="decorative underline"
                  fill
                />
              </span>
            </span>
          </h1>

          <p className="mt-10 mb-6 font-epilogue text-lg text-[#515B6F] md:text-xl">
            Great platform for the job seeker that is searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Bar */}
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl shadow-blue-900/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/10 md:flex-row lg:mx-0">
            <div className="group flex w-full items-center border-b border-slate-100 px-4 py-3 md:flex-1 md:border-b-0 md:border-r md:py-2">
              <svg
                className="mr-3 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full border-none bg-transparent text-base text-slate-900 placeholder:text-slate-400 outline-none focus:ring-0"
              />
            </div>

            <div className="group flex w-full items-center px-4 py-3 md:flex-1 md:py-2">
              <svg
                className="mr-3 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>

              <select className="w-full cursor-pointer appearance-none border-none bg-transparent text-base text-slate-900 outline-none focus:ring-0">
                <option value="Florence, Italy">Florence, Italy</option>
                <option value="Remote">Remote</option>
                <option value="New York, USA">New York, USA</option>
                <option value="London, UK">London, UK</option>
              </select>

              <svg
                className="ml-2 h-4 w-4 pointer-events-none text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <button className="mt-2 w-full whitespace-nowrap rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95 md:mt-0 md:w-auto">
              Search my job
            </button>
          </div>

          <p className="mt-6 font-medium font-epilogue text-[#202430]">
            <span>Popular: </span>
            <span>
              UI Designer
            </span>
            ,{" "}
            <span>
              UX Researcher
            </span>
            ,{" "}
            <span>
              Android
            </span>
            ,{" "}
            <span>
              Admin
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="relative mt-20 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
          <div className="relative aspect-4/5 w-full max-w-[440px]">
            <Image
              src="/images/hero-image.jpg"
              alt="Professional woman smiling"
              fill
              priority
              className="relative z-20 object-cover p-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}