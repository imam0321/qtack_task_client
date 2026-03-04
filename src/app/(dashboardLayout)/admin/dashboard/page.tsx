import { getAllJobs } from "@/services/job/job";
import AddJobModal from "@/components/modules/admin/JobManagement/AddJobModal";
import { queryStringFormatter } from "@/lib/formatters";
import PaginationHelper from "@/components/shared/PaginationHelper";
import { Suspense } from "react";
import JobTable from "@/components/modules/admin/JobManagement/JobTable";

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const res = await getAllJobs(queryString);
  const jobs = res?.data?.data || [];

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#25324B] font-clash-display">
            Job Management
          </h1>
          <p className="text-slate-500 mt-1 md:text-base text-xs font-red-hat-display">
            Manage all job listings and categories.
          </p>
        </div>
        <AddJobModal />
      </div>
      <Suspense
        fallback={
          <div className="min-h-100 flex items-center justify-center bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
              <p className="text-slate-400 font-medium animate-pulse">
                Loading jobs...
              </p>
            </div>
          </div>
        }
      >
        <JobTable jobs={jobs?.data} />
        <PaginationHelper
          currentPage={jobs?.meta?.page}
          totalPages={jobs?.meta?.totalPages}
        />
      </Suspense>
    </div>
  );
}
