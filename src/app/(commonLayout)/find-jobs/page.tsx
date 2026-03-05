import { getAllJobs } from "@/services/job/job";
import { queryStringFormatter } from "@/lib/formatters";
import FeaturedJobCard from "@/components/modules/home/FeaturedJobs/FeaturedJobCard";
import { IJob } from "@/types";
import HeroSearchForm from "@/components/modules/home/HeroSearchForm";
import { Suspense } from "react";
import JobFilterSidebar from "@/components/modules/jobs/JobFilterSidebar";
import PaginationHelper from "@/components/shared/PaginationHelper";

export default async function FindJobsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const res = await getAllJobs(queryString);
  const jobs = res?.data || [];
  const meta = res?.meta;

  return (
    <main className="min-h-screen bg-[#F8F8FD]">
      {/* Search Header */}
      <div className="border-b border-[#D6DDEB] bg-white">
        <div className="flex items-center justify-between px-4 py-8 lg:px-31">
          <h1 className="font-clash-display mb-4 text-3xl font-bold text-[#25324B]">
            Find your <span className="text-[#26A4FF]">dream job</span>
          </h1>
          <div className="relative">
            <HeroSearchForm showPopular={false} showReset={true} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 py-4 lg:flex-row lg:px-31">
        {/* Sidebar Filter */}
        <Suspense
          fallback={
            <div className="h-96 rounded-2xl border border-[#D6DDEB] bg-white animate-pulse lg:w-1/4" />
          }
        >
          <JobFilterSidebar />
        </Suspense>

        {/* Results Area */}
        <div className="lg:flex-1">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-clash-display text-2xl font-bold text-[#25324B]">
                All Jobs
              </h2>
              <p className="text-sm text-[#7C8493]">
                Showing {jobs.length} results
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {jobs.length > 0 ? (
              jobs.map((job: IJob) => (
                <FeaturedJobCard key={job._id} job={job} />
              ))
            ) : (
              <div className="col-span-full rounded-2xl border border-dashed border-[#D6DDEB] bg-white py-24 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                  <svg
                    className="h-8 w-8 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-1 text-lg font-bold text-[#25324B]">
                  No jobs found
                </h3>
                <p className="text-[#515B6F]">
                  Try adjusting your filters or search keywords to find what
                  you&apos;re looking for.
                </p>
              </div>
            )}
          </div>
          <div className="mt-12">
            <PaginationHelper
              currentPage={meta.page}
              totalPages={meta.totalPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
