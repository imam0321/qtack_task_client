interface JobTypeCategoryCellProps {
  jobType?: string;
  category?: string[];
}
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

export default function JobTypeCategoryCell({ jobType, category = [] }: JobTypeCategoryCellProps) {
  // Badge color mapping
  const badgeColor = 
    jobType === "Full Time"
      ? "bg-indigo-50 text-indigo-600"
      : jobType === "Remote"
      ? "bg-emerald-50 text-emerald-600"
      : "bg-amber-50 text-amber-600";

  return (
    <div className="flex flex-col gap-1.5">
      {/* Job Type Badge */}
      <span className={`inline-flex items-center w-fit px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
        {jobType}
      </span>

      {/* Categories */}
      <div className="flex flex-wrap gap-1">
        {category.slice(0, 2).map((cat) => (
          <span
            key={cat}
            className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${CATEGORY_COLOR[cat] || "bg-slate-100 text-slate-600"}`}
          >
            {cat}
          </span>
        ))}
        {category.length > 2 && (
          <span className="text-[10px] text-slate-400 font-medium">
            +{category.length - 2} more
          </span>
        )}
      </div>
    </div>
  );
}