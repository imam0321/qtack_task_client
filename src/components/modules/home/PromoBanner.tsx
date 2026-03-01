import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="lg:px-31 px-4 py-6 relative">
      <div
        className="bg-[#4640DE] md:p-16 p-4 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden"
        style={{
          clipPath:
            "polygon(8% 0, 100% 0, 100% 82%, 80% 100%, 0 100%, 0 61%, 0 14%)",
        }}
      >
        {/* Left content */}
        <div className="lg:w-1/2 w-full z-10 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-clash-display">
            Start posting <br />
            jobs today
          </h2>
          <p className="text-white mb-6 font-medium">
            Start posting jobs for only $10.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-[#4640DE] px-6 py-3 font-bold"
          >
            Sign Up For Free
          </Link>
        </div>

        {/* Mobile Image - Inside blue div */}
        <div className="lg:hidden w-full flex justify-center mt-8">
          <div className="relative w-full max-w-sm h-56">
            <Image
              src="/images/3.1 Dashboard Company.jpg"
              alt="Dashboard Interface"
              width={400}
              height={300}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Desktop Image - Outside clipPath div */}
      <div className="hidden lg:flex absolute bottom-0 right-20 top-22 lg:w-1/2 justify-end pointer-events-none">
        <div className="relative w-full h-70">
          <Image
            src="/images/3.1 Dashboard Company.jpg"
            alt="Dashboard Interface"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}