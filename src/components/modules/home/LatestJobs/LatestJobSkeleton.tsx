export function LatestJobSkeleton() {
  return (
    <div className="flex flex-col bg-white gap-4 md:px-10 md:py-6 p-4 sm:flex-row sm:items-start animate-pulse">
      <div className="h-16 w-16 shrink-0 rounded-lg bg-gray-200 sm:mr-4"></div>

      <div className="flex-1 text-start">
        <div className="mb-2 h-6 w-3/4 bg-gray-200"></div>
        <div className="mb-4 h-4 w-1/2 bg-gray-200"></div>

        <div className="mt-2 flex items-center gap-1 md:gap-2">
          <div className="h-8 w-24 rounded-full bg-gray-200"></div>
          <div className="w-px h-7 bg-[#D6DDEB]"></div>
          <div className="h-8 w-16 rounded-full bg-gray-200"></div>
          <div className="h-8 w-16 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
