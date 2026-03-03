import JobTable from "@/components/modules/admin/JobTable";
import { getAllJobs } from "@/services/job/job";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function AdminDashboardPage() {
  const { data: jobs } = await getAllJobs();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#25324B] font-red-hat-display">Job Listing Management</h1>
          <p className="text-slate-500 mt-1 font-red-hat-display">Manage all your active job listings and applicants.</p>
        </div>

        <Link
          href="/admin/dashboard/add-job"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 font-bold rounded-lg transition-all shadow-lg shadow-indigo-100/50 font-red-hat-display"
        >
          <Plus size={20} strokeWidth={2.5} />
          Add Job
        </Link>
      </div>

      <JobTable jobs={jobs?.data} />
    </div>
  );
}
