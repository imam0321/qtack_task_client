export default function FeaturedJobSkeleton() {
  return (
    <div className="border border-[#D6DDEB] bg-white p-6 animate-pulse">
      <div className="mb-4 flex items-center justify-between">
        <div className="h-12 w-12 rounded-full bg-gray-200"></div>
        <div className="h-8 w-20 bg-gray-200"></div>
      </div>

      <div className="mb-2 h-6 w-3/4 bg-gray-200"></div>
      <div className="mb-3 h-4 w-1/2 bg-gray-200"></div>
      <div className="mb-4 h-12 w-full bg-gray-200"></div>

      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-full bg-gray-200"></div>
        <div className="h-6 w-16 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}
