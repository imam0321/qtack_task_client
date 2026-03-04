import { IJob } from "@/types";
import { Briefcase, Building2, Share2, Bookmark } from "lucide-react";
import Image from "next/image";
import { CATEGORY_COLOR } from "@/constants/job";

interface Props {
	job: IJob;
}

export default function JobDetailsHero({ job }: Props) {
	return (
		<div className="bg-[#F8F8FD]">
			<div className="py-6 ">
				<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
					<div className="flex items-start gap-6">
						{/* Company Logo */}
						<div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#D6DDEB] bg-white shadow-sm md:h-24 md:w-24">
							{job.icon ? (
								<Image
									src={job.icon}
									alt={job.company}
									width={80}
									height={80}
									className="h-auto w-auto object-contain"
								/>
							) : (
								<Briefcase size={40} className="text-[#D6DDEB]" />
							)}
						</div>

						{/* Job Basics */}
						<div className="space-y-3">
							<h1 className="font-clash-display text-3xl font-bold leading-tight text-[#25324B] md:text-4xl">
								{job.title}
							</h1>

							<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#515B6F]">
								<div className="flex items-center gap-2">
									<Building2 size={18} className="text-[#adb5bd]" />
									<span className="text-lg">{job.company}</span>
								</div>
								<div className="flex flex-wrap gap-2">
									<span className="rounded-full bg-[#4640DE1A] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4640DE]">
										Job Type : {job.jobType}
									</span>
									{job.category?.map((cat: string) => (
										<span
											key={cat}
											className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLOR[cat] || "bg-slate-100 text-slate-600"}`}
										>
											{cat}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-3">
						<button className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6DDEB] text-[#515B6F] transition-all hover:bg-white hover:text-[#4640DE]">
							<Share2 size={20} />
						</button>
						<button className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6DDEB] text-[#515B6F] transition-all hover:bg-white hover:text-[#4640DE]">
							<Bookmark size={20} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
