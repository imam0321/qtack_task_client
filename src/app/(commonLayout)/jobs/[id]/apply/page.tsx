import { getJobById } from "@/services/job/job";
import { notFound } from "next/navigation";
import ApplyJobForm from "@/components/modules/job/JobDetails/ApplyJobForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function ApplyJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getJobById(id);
  const job = data?.data;

  if (!job) notFound();

  return (
    <div className="min-h-screen bg-[#F8F8FD] py-12 px-4 lg:px-31">
      <div className="mx-auto max-w-3xl">
        {/* Back Button */}
        <Link
          href={`/jobs/${id}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4640DE] hover:underline"
        >
          <ChevronLeft size={16} />
          Back to Job Details
        </Link>

        <div className="rounded-2xl border border-[#D6DDEB] bg-white p-6 shadow-sm md:p-10">
          <div className="mb-10 text-center">
            <h1 className="font-clash-display mb-2 text-3xl font-bold text-[#25324B]">
              Apply for this Job
            </h1>
            <p className="text-[#515B6F]">
              Submit your application for{" "}
              <span className="font-bold text-[#25324B]">{job.title}</span> at{" "}
              <span className="font-bold text-[#25324B]">{job.company}</span>
            </p>
          </div>

          <ApplyJobForm jobId={id} />
        </div>
      </div>
    </div>
  );
}
