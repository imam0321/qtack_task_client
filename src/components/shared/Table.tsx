"use client";

import React, { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Column<T> {
	header: string;
	accessor?: keyof T;
	className?: string;
	headerClassName?: string;
	render?: (item: T) => ReactNode;
	align?: "left" | "center" | "right";
}

interface TableProps<T> {
	data: T[];
	columns: Column<T>[];
	rowKey: (item: T) => string | number;
	mobileCardRender?: (item: T) => ReactNode;
	emptyState?: ReactNode;
	isLoading?: boolean;
	pagination?: {
		currentPage: number;
		totalPages: number;
		onPageChange: (page: number) => void;
	};
}

export default function Table<T>({
	data,
	columns,
	rowKey,
	mobileCardRender,
	emptyState,
	isLoading,
	pagination,
}: TableProps<T>) {
	if (isLoading) {
		return (
			<div className="min-h-[400px] flex items-center justify-center bg-white rounded-3xl border border-slate-100 shadow-sm">
				<div className="flex flex-col items-center gap-4">
					<div className="w-10 h-10 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin" />
					<p className="text-slate-400 font-medium animate-pulse">Loading data...</p>
				</div>
			</div>
		);
	}

	if (!data || data.length === 0) {
		return (
			<div className="bg-white rounded-3xl border border-slate-100 p-12 text-center shadow-sm">
				{emptyState || (
					<p className="text-slate-500">No data available.</p>
				)}
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
				{/* Desktop View */}
				<div className="hidden md:block overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-slate-50/50 border-b border-slate-100">
								{columns.map((col, idx) => (
									<th
										key={idx}
										className={`px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-clash-display ${col.align === "center" ? "text-center" :
											col.align === "right" ? "text-right" : "text-left"
											} ${col.headerClassName || ""}`}
									>
										{col.header}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-50">
							{data.map((item) => (
								<tr
									key={rowKey(item)}
									className="hover:bg-slate-50/30 transition-all group animate-in slide-in-from-bottom-2 duration-300"
								>
									{columns.map((col, idx) => (
										<td
											key={idx}
											className={`px-6 py-5 ${col.align === "center" ? "text-center" :
												col.align === "right" ? "text-right" : "text-left"
												} ${col.className || ""}`}
										>
											{col.render
												? col.render(item)
												: col.accessor
													? (item[col.accessor] as ReactNode)
													: null}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Mobile View */}
				{mobileCardRender && (
					<div className="md:hidden divide-y divide-slate-100">
						{data.map((item) => (
							<div key={rowKey(item)} className="animate-in fade-in duration-300">
								{mobileCardRender(item)}
							</div>
						))}
					</div>
				)}
			</div>

			{/* Pagination Bar */}
			{pagination && pagination.totalPages > 1 && (
				<div className="flex items-center justify-between px-2">
					<p className="text-sm text-slate-500 font-medium">
						Page <span className="text-indigo-600">{pagination.currentPage}</span> of {pagination.totalPages}
					</p>
					<div className="flex items-center gap-2">
						<button
							onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
							disabled={pagination.currentPage === 1}
							className="p-2 rounded-xl border border-slate-100 bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-100 disabled:opacity-50 disabled:hover:text-slate-400 disabled:hover:border-slate-100 transition-all shadow-sm"
						>
							<ChevronLeft size={20} />
						</button>
						<div className="flex items-center gap-1">
							{[...Array(pagination.totalPages)].map((_, i) => {
								const pageNum = i + 1;
								// Show only a few page numbers if there are too many
								if (
									pagination.totalPages > 7 &&
									pageNum !== 1 &&
									pageNum !== pagination.totalPages &&
									Math.abs(pageNum - pagination.currentPage) > 1
								) {
									if (pageNum === 2 || pageNum === pagination.totalPages - 1) {
										return <span key={pageNum} className="text-slate-300 px-1">...</span>;
									}
									return null;
								}

								return (
									<button
										key={pageNum}
										onClick={() => pagination.onPageChange(pageNum)}
										className={`min-w-[40px] h-10 rounded-xl text-sm font-bold transition-all ${pagination.currentPage === pageNum
											? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
											: "bg-white border border-slate-100 text-slate-500 hover:text-indigo-600 hover:border-indigo-100 shadow-sm"
											}`}
									>
										{pageNum}
									</button>
								);
							})}
						</div>
						<button
							onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
							disabled={pagination.currentPage === pagination.totalPages}
							className="p-2 rounded-xl border border-slate-100 bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-100 disabled:opacity-50 disabled:hover:text-slate-400 disabled:hover:border-slate-100 transition-all shadow-sm"
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
