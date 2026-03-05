"use client";

export default function FindJobsSkeleton() {
  return (
    <div className="min-h-screen bg-[#F8F8FD]">
      {/* Search Header Skeleton */}
      <div className="border-b border-[#D6DDEB] bg-white">
        <div className="flex flex-col items-center justify-between px-4 py-8 md:flex-row lg:px-31">
          <div className="mb-4 h-10 w-64 rounded-lg bg-slate-200 md:mb-0" />
          <div className="h-16 w-full max-w-3xl rounded-xl border border-slate-100 bg-slate-50 shadow-sm" />
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 py-8 lg:flex-row lg:px-31">
        {/* Sidebar Skeleton */}
        <div className="space-y-8 lg:w-1/4">
          <div className="space-y-4">
            <div className="h-7 w-48 rounded bg-slate-200" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border border-slate-200 bg-slate-100" />
                  <div className="h-4 w-32 rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-7 w-40 rounded bg-slate-200" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border border-slate-200 bg-slate-100" />
                  <div className="h-4 w-32 rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Area Skeleton */}
        <div className="lg:flex-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-8 w-32 rounded bg-slate-200" />
              <div className="h-4 w-24 rounded bg-slate-100" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 rounded-2xl border border-[#D6DDEB] bg-white p-6 shadow-sm animate-pulse"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded bg-slate-200" />
                  <div className="h-6 w-20 rounded-full bg-slate-100" />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-6 w-3/4 rounded bg-slate-200" />
                  <div className="h-4 w-1/2 rounded bg-slate-100" />
                  <div className="h-4 w-full rounded bg-slate-100" />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="h-6 w-16 rounded-full bg-slate-100" />
                  <div className="h-6 w-16 rounded-full bg-slate-100" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="h-10 w-64 rounded-xl bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
