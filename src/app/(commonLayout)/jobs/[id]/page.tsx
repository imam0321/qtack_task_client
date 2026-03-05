import { getJobById } from "@/services/job/job";
import JobDetailsHero from "@/components/modules/job/JobDetails/JobDetailsHero";
import JobDescription from "@/components/modules/job/JobDetails/JobDescription";
import JobSummaryCard from "@/components/modules/job/JobDetails/JobSummaryCard";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getJobById(id);
  const job = data?.data;

  return (
    <div className="min-h-screen bg-white px-4 lg:px-31">
      <JobDetailsHero job={job} />

      <div className="py-4 lg:py-6">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
          <div className="lg:col-span-2">
            <JobDescription description={job.description} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <JobSummaryCard job={job} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
