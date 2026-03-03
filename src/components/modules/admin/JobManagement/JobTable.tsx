import { IJob } from "@/types";
import { Edit, MapPin, Briefcase } from "lucide-react";
import DeleteJobAction from "./DeleteJobAction";

interface JobTableProps {
  jobs: IJob[];
}

export default function JobTable({ jobs }: JobTableProps) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 p-6 text-center shadow-sm">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
          <Briefcase size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-800 font-red-hat-display">No jobs found</h3>
        <p className="text-slate-500 mt-1">Start by adding your first job listing.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-red-hat-display">Job Details</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-red-hat-display">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-red-hat-display">Date Posted</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right font-red-hat-display">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-slate-50/30 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {job.title}
                    </span>
                    <div className="flex items-center gap-2 mt-1 text-slate-500 text-sm">
                      <span className="font-medium">{job.company}</span>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${job.jobType === "Full Time" ? "bg-indigo-50 text-indigo-600" :
                    job.jobType === "Remote" ? "bg-green-50 text-green-600" :
                      "bg-slate-100 text-slate-600"
                    }`}>
                    {job.jobType}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className="text-sm text-slate-500 font-medium whitespace-nowrap"
                    suppressHydrationWarning
                  >
                    {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "N/A"}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Edit">
                      <Edit size={18} />
                    </button>
                    {job._id && <DeleteJobAction jobId={job._id} />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
