import Image from "next/image";
import { IJob } from "./FeaturedJobs";
import Link from "next/link";

const CATEGORY_COLOR: Record<string, string> = {
  Design: "bg-[#56CDAD1A] text-[#56CDAD]",
  Sales: "bg-[#56CDAD1A] text-[#56CDAD]",
  Marketing: "bg-[#EB85331A] text-[#FFB836]",
  Finance: "bg-[#FF65501A] text-[#FF6550]",
  Technology: "bg-[#FF65501A] text-[#FF6550]",
  Engineering: "bg-[#56CDAD1A] text-[#56CDAD]",
  Business: "bg-[#4640DE1A] text-[#4640DE]",
  "Human Resources": "bg-[#FFB8361A] text-[#FFB836]",
};

interface Props {
  job: IJob;
  className?: string;
}

export default function FeaturedJobCard({ job, className }: Props) {
  return (
    <Link href="#" className={`border border-[#D6DDEB] bg-white p-6 ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4640DE]/10">
          {job.icon ? (
            <Image src={job.icon} alt={job.company} width={32} height={32} className="h-auto w-auto object-contain" />
          ) : (
            <span className="rounded-full px-3 py-1 text-lg font-bold text-black">
              {job.company[0]}
            </span>
          )}
        </div>

        <p className="border border-[#4640DE] px-3 py-1 text-[#4640DE]">
          {job.type}
        </p>
      </div>

      <h3 className="line-clamp-1 text-lg font-semibold text-[#25324B]">
        {job.title}
      </h3>

      <p className="mb-3 line-clamp-1 text-sm text-[#515B6F]">
        {job.company} • {job.location}
      </p>

      <p className="mb-4 line-clamp-2 text-sm text-[#7C8493]">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag, i) => (
          <span
            key={i}
            className={`rounded-full px-4 py-1 text-[10px] font-bold ${CATEGORY_COLOR[tag] || "bg-gray-100 text-gray-600"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}