import { getAllJobs } from "@/services/job/job";
import JobTable from "./JobTable";
import PaginationHelper from "@/components/shared/PaginationHelper";

export default async function JobTableContent({
  queryString,
}: {
  queryString: string;
}) {
  const jobs = await getAllJobs(queryString);

  return (
    <>
      <JobTable jobs={jobs?.data} />
      <PaginationHelper
        currentPage={jobs?.meta?.page}
        totalPages={jobs?.meta?.totalPages}
      />
    </>
  );
}
