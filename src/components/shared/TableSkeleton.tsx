export default function TableSkeleton({ rows = 5 }: { rows?: number }) {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm animate-pulse">
            {/* Table Header Placeholder */}
            <div className="border-b border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-4">
                    <div className="h-4 w-40 rounded bg-slate-200" /> {/* Role */}
                    <div className="h-4 w-48 rounded bg-slate-200" /> {/* Date & Location */}
                    <div className="h-4 w-40 rounded bg-slate-200" /> {/* Type & Category */}
                    <div className="ml-auto h-4 w-20 rounded bg-slate-200" /> {/* Actions */}
                </div>
            </div>

            {/* Table Rows Placeholder */}
            <div className="divide-y divide-slate-50">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-4 p-4 items-center">
                        {/* Role Column */}
                        <div className="flex items-center gap-3 w-40">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-200" />
                            <div className="space-y-2 flex-1">
                                <div className="h-3 w-24 rounded bg-slate-200" />
                                <div className="h-3 w-16 rounded bg-slate-200" />
                            </div>
                        </div>

                        {/* Date & Location Column */}
                        <div className="w-48 space-y-2">
                            <div className="h-3 w-28 rounded bg-slate-100" />
                            <div className="h-3 w-20 rounded bg-slate-100" />
                        </div>

                        {/* Type & Category Column */}
                        <div className="w-40 flex gap-2">
                            <div className="h-6 w-16 rounded-full bg-slate-100" />
                            <div className="h-6 w-16 rounded-full bg-slate-100" />
                        </div>

                        {/* Actions Column */}
                        <div className="ml-auto flex gap-2">
                            <div className="h-8 w-8 rounded-lg bg-slate-100" />
                            <div className="h-8 w-8 rounded-lg bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
