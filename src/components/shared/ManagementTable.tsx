"use client";

import React, { ReactNode } from "react";

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

interface ManagementTableProps<T> {
  data: T[];
  columns: Column<T>[];
  getRowKey: (row: T) => string;
  emptyMessage?: string;
}

export default function ManagementTable<T>({
  data = [],
  columns = [],
  getRowKey,
  emptyMessage = "No records found.",
}: ManagementTableProps<T>) {
  const renderCell = (row: T, column: Column<T>) => {
    if (typeof column.accessor === "function") {
      return column.accessor(row);
    }
    return row[column.accessor] as ReactNode;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden w-full">
      <div className="overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse min-w-150 md:min-w-full">
          {/* Header */}
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100/50">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-4 md:px-6 py-4 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-50">
            {data.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-10 text-slate-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}

            {data.map((row) => (
              <tr
                key={getRowKey(row)}
                className="hover:bg-slate-50/40 transition-all group"
              >
                {columns.map((col, idx) => (
                  <td
                    key={idx}
                    className={`px-4 md:px-6 py-4 md:py-5`}
                  >
                    <div className="flex items-center">
                      {renderCell(row, col)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
