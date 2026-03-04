import { IJob } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CATEGORY_COLOR: Record<string, string> = {
  Design: "bg-[#56CDAD1A] text-[#56CDAD] border border-[#56CDAD]",
  Sales: "bg-[#E8F5E9] text-[#4CAF50] border border-[#4CAF50]",
  Marketing: "bg-[#EB85331A] text-[#FFB836] border border-[#FFB836]",
  Finance: "bg-[#F3E5F5] text-[#9C27B0] border border-[#9C27B0]",
  Technology: "bg-[#FF65501A] text-[#FF6550] border border-[#FF6550]",
  Engineering: "bg-[#E3F2FD] text-[#2196F3] border border-[#2196F3]",
  Business: "bg-[#4640DE1A] text-[#4640DE] border border-[#4640DE]",
  "Human Resources": "bg-[#FFB8361A] text-[#FFB836] border border-[#FFB836]",
};

const JOB_TYPE_COLOR: Record<string, string> = {
  "Full Time": "bg-[#56CDAD1A] text-[#56CDAD]",
  "Part Time": "bg-[#E3F2FD] text-[#2196F3]",
  Remote: "bg-[#56CDAD1A] text-[#56CDAD]",
  Contract: "bg-[#FF65501A] text-[#FF6550]",
  Internship: "bg-[#4640DE1A] text-[#4640DE]",
};

export default function LatestJobCard({ job }: { job: IJob }) {
  return (
    <Link
      href={`/jobs/${job._id}`}
      className="flex flex-col bg-white gap-4 md:px-10 md:py-6 p-4 sm:flex-row sm:items-start"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center sm:mr-4">
        {job.icon ? (
          <Image
            src={job.icon}
            alt={job.company}
            width={64}
            height={64}
            className="h-auto w-auto object-contain"
          />
        ) : (
          <span className="flex h-16 w-16 items-center justify-center text-lg font-bold text-black bg-[#4640DE]/10">
            {job.company[0]}
          </span>
        )}
      </div>

      <div className="flex-1 text-start">
        <h3 className="text-[20px] font-semibold text-[#25324B]">
          {job.title}
        </h3>
        <p className="text-[#515B6F]">
          {job.company} • {job.location}
        </p>

        <div className="mt-2 flex items-center gap-1 md:gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-sm font-semibold text-nowrap ${JOB_TYPE_COLOR[job.jobType || ""] || "bg-gray-100 text-gray-600"}`}
          >
            {job.jobType}
          </span>
          <div className="w-px h-7 bg-[#D6DDEB]"></div>
          {job.category?.map((tag, i) => (
            <span
              key={i}
              className={`rounded-full px-2.5 py-1 text-sm font-semibold ${CATEGORY_COLOR[tag] || "bg-gray-100 text-gray-600"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
