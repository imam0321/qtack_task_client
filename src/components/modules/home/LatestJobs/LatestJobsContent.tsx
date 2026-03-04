import { getAllJobs } from "@/services/job/job";
import { IJob } from "@/types";
import LatestJobCard from "./LatestJobCard";

export async function LatestJobsContent() {
  const res = await getAllJobs();
  const jobs = res?.data || [];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {jobs && jobs.length > 0 ? (
        jobs.map((job: IJob) => <LatestJobCard key={job._id} job={job} />)
      ) : (
        <p>No latest jobs available.</p>
      )}
    </div>
  );
}
