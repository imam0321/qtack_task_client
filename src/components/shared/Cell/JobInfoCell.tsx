import { Briefcase } from "lucide-react";
import Image from "next/image";

interface JobInfoCellProps {
  icon?: string;
  company?: string;
  title?: string;
}

export default function JobInfoCell({
  icon,
  company,
  title,
}: JobInfoCellProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-indigo-100 transition-colors">
        {icon ? (
          <Image
            src={icon}
            alt={company ?? ""}
            width={48}
            height={48}
            className="object-cover"
          />
        ) : (
          <Briefcase size={24} className="text-slate-400" />
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-base font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
          {title}
        </span>
        <span className="font-medium truncate text-sm">{company}</span>
      </div>
    </div>
  );
}
