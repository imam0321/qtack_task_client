"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface HeroSearchFormProps {
	className?: string;
	showPopular?: boolean;
	showReset?: boolean;
}

export default function HeroSearchForm({
	className,
	showPopular = true,
	showReset = false,
}: HeroSearchFormProps) {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const params = new URLSearchParams();
		if (searchTerm) params.append("searchTerm", searchTerm);
		if (location) params.append("location", location);

		router.push(`/find-jobs?${params.toString()}`);
	};

	const popularTags = ["UI Designer", "UX Researcher", "Android", "Admin"];

	const handleTagClick = (tag: string) => {
		setSearchTerm(tag);
		router.push(`/find-jobs?searchTerm=${encodeURIComponent(tag)}`);
	};

	return (
		<div className={`w-full max-w-3xl ${className}`}>
			{/* Search Bar Form */}
			<div className="flex flex-col gap-1 md:flex-row md:items-center">
				<form
					onSubmit={handleSearch}
					className="flex flex-1 flex-col items-center overflow-hidden border border-[#D6DDEB]/50 bg-white p-1 shadow-xl md:flex-row"
				>
					{/* Job Title Input */}
					<div className="group flex w-full items-center border-b border-slate-100 px-6.5 py-3.5 md:flex-1 md:py-1">
						<Image
							src="/icons/search.svg"
							alt="Search"
							width={20}
							height={20}
							className="mr-3 opacity-60"
						/>
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Job title or company"
							className="w-full bg-transparent text-sm md:text-base text-[#7C8493] outline-none"
						/>
					</div>

					{/* Location Input */}
					<div className="group flex w-full items-center px-6.5 py-3.5 md:flex-1 md:py-1 relative">
						<Image
							src="/icons/location.svg"
							alt="Location"
							width={20}
							height={20}
							className="mr-3 opacity-60"
						/>
						<input
							type="text"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							placeholder="Location (e.g. Dhaka, New York)"
							className="w-full bg-transparent text-sm text-[#25324B] outline-none placeholder-[#7C8493] md:text-base"
						/>
					</div>

					{/* Search Button */}
					<button
						type="submit"
						className="w-full bg-[#4640DE] px-6.5 py-3.5 font-bold text-lg text-white transition-all hover:bg-[#3b36bc] md:w-auto"
					>
						Search my job
					</button>
				</form>
			</div>

			{/* Popular Tags */}
			{showPopular && (
				<div className="mt-4 font-epilogue text-sm font-medium text-[#515B6F] md:text-base">
					<span className="text-[#202430]">Popular: </span>
					{popularTags.map((tag, index) => (
						<span key={tag}>
							<button
								type="button"
								onClick={() => handleTagClick(tag)}
								className="transition-colors decoration-dotted hover:text-[#4640DE] hover:underline"
							>
								{tag}
							</button>
							{index < popularTags.length - 1 && ", "}
						</span>
					))}
				</div>
			)}
		</div>
	);
}
