import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col relative">
      {/* Background Pattern for Navbar + HeroSection */}
      <div className="pointer-events-none absolute md:top-0 top-70 right-0 w-[65%] lg:h-175 h-96 z-0">
        <Image
          src="/patterns/pattern-1.jpg"
          alt="background pattern"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
