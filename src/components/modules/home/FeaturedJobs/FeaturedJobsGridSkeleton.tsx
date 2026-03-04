import FeaturedJobSkeleton from "./FeaturedJobSkeleton";

export default function FeaturedJobsGridSkeleton() {
  return (
    <>
      <div className="sm:hidden -mx-4 overflow-x-auto px-4 pb-4">
        <div className="flex w-max gap-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-[75vw]">
              <FeaturedJobSkeleton />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop Skeleton */}
      <div className="hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <FeaturedJobSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
