import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    { name: "Vodafone", src: "/icons/vodafone.svg" },
    { name: "Intel", src: "/icons/intel.svg" },
    { name: "Tesla", src: "/icons/tesla.svg" },
    { name: "AMD", src: "/icons/amd.svg" },
    { name: "Talkit", src: "/icons/talkit.svg" },
  ];

  return (
    <section className="lg:px-31 px-4 my-10">
      <p className="text-[#202430] mb-4 text-lg">Companies we helped grow</p>

      <div className="flex flex-wrap justify-between items-center gap-6">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="h-8 w-28 flex items-center justify-center text-[#202430]"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={100}
              height={40}
              className="object-contain w-auto text-[#202430]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
