"use client";
import { IJob, TPaginationMeta } from "@/types";
import { Briefcase } from "lucide-react";
import Table from "@/components/shared/Table";
import { useRouter, useSearchParams } from "next/navigation";
import { getJobColumns, renderJobMobileCard } from "./JobTableColumns";

export default function JobTable({ jobs, meta }: { jobs: IJob[]; meta?: TPaginationMeta }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="">
      <Table<IJob>
        data={jobs}
        columns={getJobColumns()}
        rowKey={(job) => job._id || ""}
        mobileCardRender={renderJobMobileCard}
        pagination={meta ? {
          currentPage: meta.page,
          totalPages: meta.totalPage,
          onPageChange: handlePageChange,
        } : undefined}
        emptyState={
          <div className="py-20 flex flex-col items-center">
            <Briefcase size={60} className="text-slate-200 mb-6" />
            <p className="text-slate-500 italic font-medium">No job listings available</p>
          </div>
        }
      />
    </div>
  );
}