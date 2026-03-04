"use client";

import { IJob } from "@/types";
import { Eye, MapPin } from "lucide-react";
import Link from "next/link";
import DeleteJobAction from "./DeleteJobAction";
import { formatDateTime } from "@/lib/formatters";
import { Column } from "@/components/shared/ManagementTable";
import JobInfoCell from "@/components/shared/Cell/JobInfoCell";
import JobTypeCategoryCell from "@/components/shared/Cell/JobTypeCategoryCell";

export const JobsColumns: Column<IJob>[] = [
  {
    header: "Role",
    accessor: (job) => (
      <JobInfoCell
        icon={job?.icon}
        company={job?.company}
        title={job?.title}
      />
    ),
  },
	{
    header: "Date Posted & Location",
    accessor: (job) => (
      <div className="">
        <h3 className="text-sm text-slate-500 font-medium whitespace-nowrap">
          {formatDateTime(job?.createdAt)}
        </h3>
        <div className="flex items-center gap-1 shrink-0 text-slate-500 text-sm">
          <MapPin size={14} />
          <span className="truncate">{job?.location}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Type & Category",
    accessor: (job) => (
      <JobTypeCategoryCell jobType={job?.jobType} category={job?.category} />
    ),
  },
  
  {
    header: "Actions",
    accessor: (job) => (
      <div className="flex items-center justify-end gap-2">
        <Link
          href={`/jobs/${job._id}`}
          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
          title="View Details"
        >
          <Eye size={18} />
        </Link>
        {job._id && <DeleteJobAction jobId={job._id} />}
      </div>
    ),
  },
];
