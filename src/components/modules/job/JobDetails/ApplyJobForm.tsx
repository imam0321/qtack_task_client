"use client";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import InputFieldError from "@/components/shared/InputFieldError";
import { createJobApplication } from "@/services/application/application";


export default function ApplyJobForm({ jobId }: { jobId: string }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    createJobApplication,
    null,
  );

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.message || "Application submitted successfully!");
        router.push(`/jobs/${jobId}`);
        router.refresh();
      } else if (state.message && state.message !== "Validation failed") {
        toast.error(state.message);
      }
    }
  }, [state, jobId, router]);

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="jobId" value={jobId} />

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[#25324B]"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          disabled={isPending}
          className="input-field"
          defaultValue={state?.formData?.name || ""}
        />
        <InputFieldError state={state} field="name" />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[#25324B]"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          disabled={isPending}
          className="input-field"
          defaultValue={state?.formData?.email || ""}
        />
        <InputFieldError state={state} field="email" />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="resumeLink"
          className="block text-sm font-semibold text-[#25324B]"
        >
          Resume Link (URL) <span className="text-red-500">*</span>
        </label>
        <input
          name="resumeLink"
          type="text"
          placeholder="https://example.com/my-resume.pdf"
          required
          disabled={isPending}
          className="input-field"
          defaultValue={state?.formData?.resumeLink || ""}
        />
        <InputFieldError state={state} field="resumeLink" />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="coverNote"
          className="block text-sm font-semibold text-[#25324B]"
        >
          Cover Note
        </label>
        <textarea
          name="coverNote"
          placeholder="Explain why you are a good fit for this role (min 20 chars)..."
          disabled={isPending}
          rows={5}
          className="input-field min-h-30 resize-none"
          defaultValue={state?.formData?.coverNote || ""}
        />
        <InputFieldError state={state} field="coverNote" />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-[#4640DE] px-4 py-4 font-bold text-white transition-all hover:bg-[#3b36c0] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
