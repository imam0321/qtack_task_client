import { getAllApplications } from "@/services/application/application";
import ApplicationTable from "./ApplicationTable";
import PaginationHelper from "@/components/shared/PaginationHelper";

export default async function ApplicationTableContent({
  queryString,
}: {
  queryString: string;
}) {
  const applications = await getAllApplications(queryString);

  return (
    <>
      <ApplicationTable applications={applications?.data || []} />
      <PaginationHelper
        currentPage={applications?.meta?.page}
        totalPages={applications?.meta?.totalPages}
      />
    </>
  );
}
