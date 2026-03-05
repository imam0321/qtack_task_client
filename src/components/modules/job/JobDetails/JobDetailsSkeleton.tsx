export default function JobDetailsSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-white">
      {/* Hero Skeleton */}
      <div className="bg-[#F8F8FD]">
        <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
              {/* Logo Placeholder */}
              <div className="h-20 w-20 rounded-2xl bg-slate-200 md:h-24 md:w-24" />

              {/* Title and Meta Placeholder */}
              <div className="flex flex-col items-center space-y-4 sm:items-start">
                <div className="h-8 w-64 rounded-lg bg-slate-200 md:h-10 md:w-96" />
                <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                  <div className="h-5 w-32 rounded bg-slate-200" />
                  <div className="h-5 w-24 rounded-full bg-slate-200" />
                  <div className="h-5 w-24 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>

            {/* Actions Placeholder */}
            <div className="flex items-center justify-center gap-3 lg:justify-end">
              <div className="h-12 w-12 rounded-xl bg-slate-200" />
              <div className="h-12 w-12 rounded-xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Area Skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-4 lg:px-6 lg:py-6">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
          {/* Left: Description Skeleton */}
          <div className="lg:col-span-2">
            <div className="space-y-10">
              <section>
                <div className="mb-2 h-8 w-48 rounded bg-slate-200" />
                <div className="space-y-4">
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-5/6 rounded bg-slate-200" />
                </div>
              </section>

              <section>
                <div className="mb-2 h-8 w-48 rounded bg-slate-200" />
                <div className="space-y-4">
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-2/3 rounded bg-slate-200" />
                </div>
              </section>
            </div>
          </div>

          {/* Right: Summary Card Skeleton */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-[#D6DDEB] p-4 sm:p-6">
              <div className="mb-6 h-7 w-32 rounded bg-slate-200" />
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-200" />
                    <div className="space-y-2">
                      <div className="h-3 w-20 rounded bg-slate-200" />
                      <div className="h-4 w-32 rounded bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-4 h-px bg-slate-200" />
              <div className="h-14 w-full rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
