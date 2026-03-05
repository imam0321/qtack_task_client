import { ChevronLeft } from "lucide-react";

export default function ApplyJobSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-[#F8F8FD] py-12 px-4 lg:px-31">
      <div className="mx-auto max-w-3xl">
        {/* Back Button Skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <ChevronLeft size={16} className="text-slate-200" />
          <div className="h-4 w-32 rounded bg-slate-200" />
        </div>

        <div className="rounded-2xl border border-[#D6DDEB] bg-white p-6 shadow-sm md:p-10">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-2 h-10 w-64 rounded bg-slate-200" />
            <div className="mx-auto h-4 w-80 rounded bg-slate-100" />
          </div>

          <div className="space-y-6">
            {/* Form Field Skeletons */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 rounded bg-slate-200" />
                <div className="h-12 w-full rounded-lg bg-slate-100" />
              </div>
            ))}

            {/* Textarea Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-24 rounded bg-slate-200" />
              <div className="h-32 w-full rounded-lg bg-slate-100" />
            </div>

            {/* Button Skeleton */}
            <div className="pt-4">
              <div className="h-14 w-full rounded-lg bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
