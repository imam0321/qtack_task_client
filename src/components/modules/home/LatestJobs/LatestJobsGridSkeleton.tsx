import { LatestJobSkeleton } from "./LatestJobSkeleton";

export function LatestJobsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {[...Array(8)].map((_, i) => (
        <LatestJobSkeleton key={i} />
      ))}
    </div>
  );
}
