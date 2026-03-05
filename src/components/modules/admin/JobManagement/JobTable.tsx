"use client";
import ManagementTable from "@/components/shared/ManagementTable";
import { IJob } from "@/types";
import { JobsColumns } from "./JobsColumns";

export default function JobTable({ jobs }: { jobs: IJob[] }) {
  return (
    <>
      <ManagementTable
        data={jobs}
        columns={JobsColumns}
        getRowKey={(job) => job._id || ""}
      />
    </>
  );
}
