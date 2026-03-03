import { getJobById } from "@/services/job/job";
import {
	MapPin,
	Briefcase,
	Calendar,
	Building2,
	ArrowLeft,
	Share2,
	Bookmark,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function JobDetailsPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const { data } = await getJobById(id);
	const job = data?.data;

	if (!job) notFound();

	const formatDate = (dateString?: string) => {
		if (!dateString) return "N/A";
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<div className="min-h-screen pb-20">
			{/* Hero Section */}
			<div className="bg-white border-b border-slate-100/50">
				<div className="max-w-6xl mx-auto px-4 py-12">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
						<div className="flex items-start gap-6">
							{/* Company Logo */}
							<div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
								{job.icon ? (
									<Image
										src={job.icon}
										alt={job.company}
										width={96}
										height={96}
										className="object-cover"
									/>
								) : (
									<Briefcase size={40} className="text-slate-300" />
								)}
							</div>

							{/* Job Info */}
							<div className="space-y-4">
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 text-[10px] font-bold bg-indigo-50 text-indigo-600 rounded-full uppercase tracking-wider">
										{job.jobType}
									</span>
									{job.category?.map((cat: string) => (
										<span
											key={cat}
											className="px-3 py-1 text-[10px] font-bold bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider"
										>
											{cat}
										</span>
									))}
								</div>

								<h1 className="text-3xl md:text-4xl font-extrabold text-[#25324B] leading-tight font-clash-display">
									{job.title}
								</h1>

								<div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-500 text-sm font-medium">
									<div className="flex items-center gap-2">
										<Building2 size={18} className="text-slate-400" />
										<span>{job.company}</span>
									</div>
									<div className="flex items-center gap-2">
										<MapPin size={18} className="text-slate-400" />
										<span>{job.location}</span>
									</div>
									<div className="flex items-center gap-2">
										<Calendar size={18} className="text-slate-400" />
										<span>Posted on {formatDate(job.createdAt)}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex items-center gap-3">
							<button className="p-3 border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
								<Share2 size={20} />
							</button>
							<button className="p-3 border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
								<Bookmark size={20} />
							</button>
							<button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-100 uppercase tracking-wide text-sm">
								Apply Now
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="max-w-6xl mx-auto px-4 mt-12 grid lg:grid-cols-3 gap-10">
				{/* Left Content: Description */}
				<div className="lg:col-span-2 space-y-8">
					<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
						<h2 className="text-2xl font-bold text-[#25324B] mb-8 font-clash-display">Job Description</h2>
						<div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
							{job.description ? (
								<div
									dangerouslySetInnerHTML={{
										__html: job.description.replace(/\n/g, "<br/>"),
									}}
								/>
							) : (
								<p>No description provided for this job listing.</p>
							)}
						</div>
					</div>

					<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
						<h2 className="text-2xl font-bold text-[#25324B] mb-8 font-clash-display">Key Responsibilities</h2>
						<ul className="list-disc list-inside space-y-4 text-slate-600 text-lg">
							<li>Collaborate with cross-functional teams to define and ship new features.</li>
							<li>Write clean, maintainable, and efficient code.</li>
							<li>Iterate on UI/UX designs to provide the best user experience.</li>
							<li>Participate in code reviews and contribute to team knowledge sharing.</li>
						</ul>
					</div>
				</div>

				{/* Sidebar */}
				<div className="space-y-6">
					<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm sticky top-10">
						<h3 className="text-xl font-bold text-[#25324B] mb-8 font-clash-display">Job Summary</h3>

						<div className="space-y-5 text-sm">
							<div className="flex justify-between items-center pb-4 border-b border-slate-50">
								<span className="text-slate-500 font-medium">Posted on</span>
								<span className="text-slate-800 font-bold">
									{formatDate(job.createdAt)}
								</span>
							</div>
							<div className="flex justify-between items-center pb-4 border-b border-slate-50">
								<span className="text-slate-500 font-medium">Job Type</span>
								<span className="text-slate-800 font-bold uppercase tracking-wider text-[10px] bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full">
									{job.jobType}
								</span>
							</div>
							<div className="flex justify-between items-center pb-4 border-b border-slate-50">
								<span className="text-slate-500 font-medium">Location</span>
								<span className="text-slate-800 font-bold">{job.location}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-slate-500 font-medium">Industry</span>
								<span className="text-slate-800 font-bold">{job.category?.[0] || "N/A"}</span>
							</div>
						</div>

						<button className="w-full mt-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl transition-all shadow-lg shadow-indigo-100 uppercase tracking-widest text-xs">
							Apply Now
						</button>
					</div>

					<div className="bg-gradient-to-br from-[#25324B] to-[#1A2536] p-8 rounded-3xl text-white shadow-xl">
						<h3 className="text-xl font-bold mb-4 font-clash-display">Need Help?</h3>
						<p className="text-slate-400 text-sm leading-relaxed mb-6">
							If you have any questions regarding this job position, please don't hesitate to contact our support team.
						</p>
						<button className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 text-sm">
							Contact Support
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
