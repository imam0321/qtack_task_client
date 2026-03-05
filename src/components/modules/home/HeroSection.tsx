import Image from "next/image";
import HeroSearchForm from "./HeroSearchForm";

export default function HeroSection() {
  return (
    <section className="md:h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full h-full lg:flex justify-between lg:items-center px-4 lg:px-31">
        {/* Left Content */}
        <div className="lg:w-1/2 text-left py-12 lg:py-0">
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

          <HeroSearchForm className="md:absolute z-30" />
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
