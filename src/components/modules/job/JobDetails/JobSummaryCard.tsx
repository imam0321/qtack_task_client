import Link from "next/link";
import { formatDateTime } from "@/lib/formatters";
import { IJob } from "@/types";
import { Clock, MapPin, Briefcase, Building2 } from "lucide-react";

interface Props {
	job: IJob;
}

export default function JobSummaryCard({ job }: Props) {
	return (
		<div className="rounded-xl border border-[#D6DDEB] p-4 sm:p-6">
			<h3 className="font-clash-display mb-6 text-xl font-bold text-[#25324B]">
				Job Summary
			</h3>

			<div className="space-y-4">
				<div className="flex gap-4">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4640DE1A]">
						<Clock size={20} className="text-[#4640DE]" />
					</div>
					<div>
						<p className="text-sm text-[#7C8493]">Posted Date</p>
						<p className="font-bold text-[#25324B]">
							{formatDateTime(job.createdAt)}
						</p>
					</div>
				</div>

				<div className="flex gap-4">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4640DE1A]">
						<MapPin size={20} className="text-[#4640DE]" />
					</div>
					<div>
						<p className="text-sm text-[#7C8493]">Location</p>
						<p className="font-bold text-[#25324B]">{job.location}</p>
					</div>
				</div>

				<div className="flex gap-4">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4640DE1A]">
						<Briefcase size={20} className="text-[#4640DE]" />
					</div>
					<div>
						<p className="text-sm text-[#7C8493]">Job Type</p>
						<p className="font-bold text-[#25324B]">{job.jobType}</p>
					</div>
				</div>

				<div className="flex gap-4">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4640DE1A]">
						<Building2 size={20} className="text-[#4640DE]" />
					</div>
					<div>
						<p className="text-sm text-[#7C8493]">Category</p>
						<p className="font-bold text-[#25324B]">
							{job.category?.[0] || "N/A"}
						</p>
					</div>
				</div>
			</div>

			<hr className="my-4 border-[#D6DDEB]" />

			<Link
				href={`/jobs/${job._id}/apply`}
				className="flex w-full items-center justify-center rounded bg-[#4640DE] py-4 text-sm font-bold tracking-widest text-white transition-colors hover:bg-[#3b36c0]"
			>
				APPLY FOR THIS JOB
			</Link>
		</div>
	);
}
