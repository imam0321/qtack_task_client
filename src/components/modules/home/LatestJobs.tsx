import Link from "next/link";
import Image from "next/image";
import LatestJobCard from "./LatestJobCard";
import { featuredJobs } from "./FeaturedJobs";



export default function LatestJobs() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8FD]"
      style={{
        clipPath:
          "polygon(8% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 6%)",
      }}
    >
      {/* Background Pattern (no padding, full bleed) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-1/2">
          <Image
            src="/patterns/pattern-2.jpg"
            alt="background pattern"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-right object-contain h-auto w-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-8 lg:px-31">
        {/* Header */}
        <div className="mb-2 flex flex-col items-start justify-between gap-4 sm:flex-row md:mb-6 md:items-end">
          <h2 className="text-[2rem] font-semibold font-clash-display md:text-5xl">
            Latest <span className="text-[#26A4FF]">jobs open</span>
          </h2>

          <Link href="#" className="hidden items-center font-semibold text-[#4640DE] md:flex">
            Show all jobs
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredJobs.map((job, i) => (
            <LatestJobCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>

  );
}