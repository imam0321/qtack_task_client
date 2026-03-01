import Image from "next/image";

export default function ClientLogos() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-slate-500 font-medium mb-10 text-center md:text-left">Companies we helped grow</p>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

        <div className="relative w-32 h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Image src="/icons/vodafone.svg" alt="Vodafone" width={120} height={40} className="object-contain" />
        </div>

        <div className="relative w-24 h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Image src="/icons/intel.svg" alt="Intel" width={80} height={40} className="object-contain" />
        </div>

        <div className="relative w-32 h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Image src="/icons/tesla.svg" alt="Tesla" width={120} height={40} className="object-contain" />
        </div>

        <div className="relative w-24 h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Image src="/icons/amd.svg" alt="AMD" width={80} height={40} className="object-contain" />
        </div>

        <div className="relative w-24 h-12 flex items-center justify-center transition-transform hover:scale-110 duration-300">
          <Image src="/icons/talkit.svg" alt="Talkit" width={80} height={40} className="object-contain" />
        </div>

      </div>
    </section>
  );
}
