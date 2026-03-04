import { getAllJobs } from "@/services/job/job";
import { IJob } from "@/types";
import FeaturedJobCard from "./FeaturedJobCard";

export async function FeaturedJobsContent() {
  const res = await getAllJobs();
  const jobs = res?.data || [];

  return (
    <>
      {/* Mobile: Swipe */}
      <div className="sm:hidden -mx-4 overflow-x-auto px-4 pb-4">
        <div className="flex w-max gap-2 snap-x snap-mandatory">
          {jobs && jobs.length > 0 ? (
            jobs.map((job: IJob) => (
              <FeaturedJobCard
                key={job._id}
                job={job}
                className="w-[75vw] snap-start"
              />
            ))
          ) : (
            <p>No featured jobs available.</p>
          )}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
        {jobs && jobs.length > 0 ? (
          jobs.map((job: IJob) => <FeaturedJobCard key={job._id} job={job} />)
        ) : (
          <p>No featured jobs available.</p>
        )}
      </div>
    </>
  );
}
