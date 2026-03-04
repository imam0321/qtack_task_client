import Link from "next/link";
import { Suspense } from "react";
import { FeaturedJobsContent } from "./FeaturedJobsContent";
import FeaturedJobsGridSkeleton from "./FeaturedJobsGridSkeleton";

export default function FeaturedJobsList() {
  return (
    <section className="px-4 lg:px-31 md:my-12 my-6">
      <div className="mb-2 flex flex-col justify-between md:items-end items-start gap-4 sm:flex-row md:mb-4">
        <h2 className="text-[2rem] font-semibold font-clash-display md:text-5xl">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h2>

        <Link
          href="#"
          className="hidden items-center font-semibold text-[#4640DE] md:flex"
        >
          Show all jobs
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>

      <Suspense fallback={<FeaturedJobsGridSkeleton />}>
        <FeaturedJobsContent />
      </Suspense>

      {/* Mobile Link */}
      <div className="mt-1 sm:hidden">
        <Link
          href="#"
          className="flex items-center font-semibold text-[#4640DE]"
        >
          Show all jobs
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
