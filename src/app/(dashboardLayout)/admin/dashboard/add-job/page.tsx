"use client";

import { useActionState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createJob } from "@/services/job/job";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TJobCategory, TJobType } from "@/types";
import CreateJobForm from "@/components/modules/admin/CreateJobForm";

const jobTypes: TJobType[] = ["Full Time", "Part Time", "Remote", "Contract", "Internship"];
const categories: TJobCategory[] = [
  "Design",
  "Sales",
  "Marketing",
  "Finance",
  "Technology",
  "Engineering",
  "Business",
  "Human Resources",
];

export default function AddJobPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction, isPending] = useActionState(createJob, null);

  const handleSuccess = () => {
    toast.success("Job created successfully!");
    router.push("/admin/dashboard");
  };

  const handleClose = () => {
    router.push("/admin/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link
        href="/admin/dashboard"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 text-sm font-bold group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 md:p-12">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-[#25324B] font-red-hat-display">Post a New Job</h1>
          <p className="text-slate-500 mt-2">Fill in the details below to create a new job listing.</p>
        </div>

        <CreateJobForm
          formRef={formRef}
          formAction={formAction}
          state={state}
          isPending={isPending}
          handleClose={handleClose}
          jobTypes={jobTypes}
          categories={categories}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
}
