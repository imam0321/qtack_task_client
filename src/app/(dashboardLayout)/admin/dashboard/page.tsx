import JobTable from "@/components/modules/admin/JobManagement/JobTable";
import { getAllJobs } from "@/services/job/job";
import AddJobModal from "@/components/modules/admin/JobManagement/AddJobModal";

export default async function AdminDashboardPage() {
  const { data: jobs } = await getAllJobs();

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#25324B] font-red-hat-display">Job Management</h1>
          <p className="text-slate-500 mt-1 md:text-base text-xs font-red-hat-display">Manage all job listings and manage.</p>
        </div>
        <AddJobModal />
      </div>
      <JobTable jobs={jobs?.data} />
    </div>
  );
}
