"use client";
import ManagementTable from "@/components/shared/ManagementTable";
import { IApplication } from "@/types";
import { ApplicationColumns } from "./ApplicationColumns";

export default function ApplicationTable({ applications }: { applications: IApplication[] }) {
    return (
        <>
            <ManagementTable
                data={applications}
                columns={ApplicationColumns}
                getRowKey={(app) => app._id || ""}
            />
        </>
    );
}
