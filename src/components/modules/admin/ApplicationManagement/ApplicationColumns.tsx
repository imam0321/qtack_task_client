"use client";

import { IApplication, IJob } from "@/types";
import { formatDateTime } from "@/lib/formatters";
import { Column } from "@/components/shared/ManagementTable";
import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export const ApplicationColumns: Column<IApplication>[] = [
    {
        header: "Applicant",
        accessor: (app) => (
            <div className="min-w-[160px]">
                <h3 className="font-semibold text-slate-900 text-sm md:text-base break-words">
                    {app.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 break-all">
                    {app.email}
                </p>
            </div>
        ),
    },
    {
        header: "Applied For",
        accessor: (app) => {
            const job = app.jobId as IJob;

            return (
                <div className="flex items-center gap-2 min-w-[140px]">
                    <span className="font-medium text-slate-700 text-sm truncate max-w-[120px] md:max-w-none">
                        {job?.title}
                    </span>

                    <Link
                        href={`/jobs/${job?._id}`}
                        title="View Job"
                        className="text-indigo-600 hover:text-indigo-800 shrink-0"
                    >
                        <ExternalLink size={14} />
                    </Link>
                </div>
            );
        },
    },
    {
        header: "Date Applied",
        accessor: (app) => (
            <span className="text-xs md:text-sm text-slate-600 whitespace-nowrap">
                {formatDateTime(app.createdAt)}
            </span>
        ),
    },
    {
        header: "Resume",
        accessor: (app) => (
            <Link
                href={app.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View Resume"
                aria-label="Open Resume"
                className="flex items-center gap-1 text-xs md:text-sm text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap"
            >
                <FileText size={16} className="hidden sm:inline" />
                <span className="hidden sm:inline">View Resume</span>
                <ExternalLink size={14} />
            </Link>
        ),
    },
];