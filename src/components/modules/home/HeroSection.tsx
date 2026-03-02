import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="md:h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full h-full lg:flex justify-between lg:items-center px-4 lg:px-31">
        {/* Left Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="font-clash-display text-5xl font-semibold text-[#25324B] md:text-6xl lg:text-7xl">
            Discover <br /> more than <br />
            <span className="relative inline-block font-clash-display font-semibold text-[#26A4FF]">
              5000+ Jobs
              <span className="absolute -bottom-6 left-0 h-6 w-full py-4">
                <Image
                  src="/patterns/hero-right-pattern.png"
                  alt="decorative underline"
                  fill
                  sizes="100vw"
                  className="h-auto w-auto"
                />
              </span>
            </span>
          </h1>

          <p className="mt-10 mb-6 font-epilogue text-lg text-[#515B6F] md:text-xl relative">
            Great platform for the job seeker that is searching for new career
            heights and passionate about startups.
          </p>
          <div className="md:absolute z-30">
            {/* Search Bar */}
            <div className="flex max-w-4xl flex-col items-center bg-white p-2 shadow-xl md:flex-row">
              {/* Job Title Input */}
              <div className="group flex w-full items-center border-b border-slate-100 px-6.5 py-3.5 md:flex-1 md:py-1">
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={18}
                  height={18}
                  className="mr-3"
                />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full bg-transparent text-sm md:text-base text-[#7C8493] outline-none"
                />
              </div>

              {/* Location Select */}
              <div className="group flex w-full items-center px-6.5 py-3.5 md:flex-1 md:py-1 relative">
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={18}
                  height={18}
                  className="mr-3"
                />
                <select className="w-full text-sm md:text-base text-[#7C8493] outline-none ">
                  <option value="Florence, Italy">Florence, Italy</option>
                  <option value="Remote">Remote</option>
                  <option value="New York, USA">New York, USA</option>
                  <option value="London, UK">London, UK</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="w-full bg-[#4640DE] px-6.5 py-3.5 font-bold text-lg text-white md:w-auto">
                Search my job
              </button>
            </div>

            <p className="mt-6 font-medium font-epilogue text-[#202430]">
              <span>Popular: </span>
              <span>UI Designer</span>, <span>UX Researcher</span>,{" "}
              <span>Android</span>, <span>Admin</span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
          <div className="relative w-full max-w-121 aspect-4/5 overflow-hidden">
            <Image
              src="/images/hero-image.svg"
              alt="Hero Image"
              fill
              priority
              className="z-20 object-contain"
              sizes="50vw"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 0, 100% 82%, 53% 100%, 0 100%, 0 100%, 0 0)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
