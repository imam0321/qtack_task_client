"use client";

import { IJob } from "@/types";
import { Column } from "@/components/shared/Table";
import { Eye, MapPin, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DeleteJobAction from "./DeleteJobAction";

export const formatDate = (dateString?: string) => {
	if (!dateString) return "N/A";
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

export const getJobColumns = (): Column<IJob>[] => [
	{
		header: "Role",
		render: (job) => (
			<div className="flex items-center gap-4">
				<div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-indigo-100 transition-colors">
					{job.icon ? (
						<Image src={job.icon} alt={job.company ?? ""} width={48} height={48} className="object-cover" />
					) : (
						<Briefcase size={24} className="text-slate-400" />
					)}
				</div>
				<div className="flex flex-col min-w-0">
					<span className="text-base font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
						{job.title}
					</span>
					<div className="flex items-center gap-2 mt-0.5 text-slate-500 text-sm">
						<span className="font-medium truncate">{job.company}</span>
						<span className="text-slate-300">•</span>
						<div className="flex items-center gap-1 shrink-0">
							<MapPin size={14} />
							<span className="truncate">{job.location}</span>
						</div>
					</div>
				</div>
			</div>
		),
	},
	{
		header: "Type & Category",
		render: (job) => (
			<div className="flex flex-col gap-1.5">
				<span className={`inline-flex items-center w-fit px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${job.jobType === "Full Time" ? "bg-indigo-50 text-indigo-600" :
					job.jobType === "Remote" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
					}`}>
					{job.jobType}
				</span>
				<div className="flex flex-wrap gap-1">
					{job.category?.slice(0, 2).map((cat) => (
						<span key={cat} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-semibold">
							{cat}
						</span>
					))}
					{(job.category?.length || 0) > 2 && (
						<span className="text-[10px] text-slate-400 font-medium">+{job.category!.length - 2} more</span>
					)}
				</div>
			</div>
		),
	},
	{
		header: "Date Posted",
		align: "center",
		render: (job) => (
			<div className="flex flex-col items-center">
				<Calendar size={14} className="text-slate-300 mb-1" />
				<span className="text-sm text-slate-500 font-medium whitespace-nowrap">
					{formatDate(job.createdAt)}
				</span>
			</div>
		),
	},
	{
		header: "Actions",
		align: "right",
		render: (job) => (
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

export const renderJobMobileCard = (job: IJob) => (
	<div className="p-5 space-y-4 hover:bg-slate-50/50 transition-colors group">
		<div className="flex items-start justify-between gap-4">
			<div className="flex gap-4 min-w-0">
				<div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-indigo-100 transition-colors">
					{job.icon ? (
						<Image src={job.icon} alt={job.company ?? ""} width={48} height={48} className="object-cover" />
					) : (
						<Briefcase size={22} className="text-slate-400" />
					)}
				</div>
				<div className="flex flex-col min-w-0">
					<h4 className="font-bold text-slate-800 leading-tight truncate group-hover:text-indigo-600 transition-colors">{job.title}</h4>
					<p className="text-sm text-slate-500 font-medium truncate">{job.company}</p>
				</div>
			</div>
			<div className="flex gap-1 shrink-0">
				<Link
					href={`/jobs/${job._id}`}
					className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
				>
					<Eye size={18} />
				</Link>
				{job._id && <DeleteJobAction jobId={job._id} />}
			</div>
		</div>

		<div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500">
			<div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
				<MapPin size={14} className="text-slate-400" />
				{job.location}
			</div>
			<div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
				<Briefcase size={14} className="text-slate-400" />
				{job.jobType}
			</div>
			<div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
				<Calendar size={14} className="text-slate-400" />
				{formatDate(job.createdAt)}
			</div>
		</div>

		<div className="flex flex-wrap gap-1.5 pt-1">
			{job.category?.map((cat) => (
				<span key={cat} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg font-bold uppercase tracking-wider">
					{cat}
				</span>
			))}
		</div>
	</div>
);
