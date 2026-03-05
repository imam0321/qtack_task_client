import AddJobModal from "@/components/modules/admin/JobManagement/AddJobModal";
import { queryStringFormatter } from "@/lib/formatters";
import { Suspense } from "react";
import TableSkeleton from "@/components/shared/TableSkeleton";
import JobTableContent from "@/components/modules/admin/JobManagement/JobTableContent";

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-clash-display text-2xl font-bold text-[#25324B]">
            Job Management
          </h1>
          <p className="font-red-hat-display mt-1 text-xs text-slate-500 md:text-base">
            Manage all job listings and categories.
          </p>
        </div>
        <AddJobModal />
      </div>

      <Suspense fallback={<TableSkeleton rows={8} />}>
        <JobTableContent queryString={queryString} />
      </Suspense>
    </div>
  );
}
