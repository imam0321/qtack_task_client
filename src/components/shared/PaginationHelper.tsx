"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface PaginationHelperProps {
  currentPage: number;
  totalPages: number;
}

export default function PaginationHelper({
  currentPage,
  totalPages,
}: PaginationHelperProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center px-2">
      <div className="flex items-center gap-2">
        {/* Prev */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1 || isPending}
          className="p-2 rounded-xl border border-slate-100 bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-100 disabled:opacity-50 transition-all shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Pages */}
        <div className="flex items-center gap-1">
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;

            if (
              totalPages > 7 &&
              pageNum !== 1 &&
              pageNum !== totalPages &&
              Math.abs(pageNum - currentPage) > 1
            ) {
              if (pageNum === 2 || pageNum === totalPages - 1) {
                return (
                  <span key={pageNum} className="text-slate-300 px-1">
                    ...
                  </span>
                );
              }
              return null;
            }

            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={isPending}
                className={`min-w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                  currentPage === pageNum
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-white border border-slate-100 text-slate-500 hover:text-indigo-600 hover:border-indigo-100 shadow-sm"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || isPending}
          className="p-2 rounded-xl border border-slate-100 bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-100 disabled:opacity-50 transition-all shadow-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
