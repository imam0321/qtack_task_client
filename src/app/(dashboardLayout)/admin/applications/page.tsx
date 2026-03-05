import { queryStringFormatter } from "@/lib/formatters";
import { Suspense } from "react";
import TableSkeleton from "@/components/shared/TableSkeleton";
import ApplicationTableContent from "@/components/modules/admin/ApplicationManagement/ApplicationTableContent";

export default async function AdminApplicationsPage({
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
            Applications
          </h1>
          <p className="font-red-hat-display mt-1 text-xs text-slate-500 md:text-base">
            Review all received applications across job listings.
          </p>
        </div>
      </div>

      <Suspense fallback={<TableSkeleton rows={8} />}>
        <ApplicationTableContent queryString={queryString} />
      </Suspense>
    </div>
  );
}
