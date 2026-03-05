"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { categories, jobTypes } from "../admin/JobManagement/constants";

export default function MobileFilterDrawer() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Initialize from URL
    useEffect(() => {
        const types = searchParams.getAll("jobType");
        const cats = searchParams.getAll("category");
        setSelectedTypes(types);
        setSelectedCategories(cats);
    }, [searchParams]);

    const updateFilters = useCallback(
        (key: string, values: string[]) => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete(key);
            values.forEach((v) => params.append(key, v));
            router.push(`/find-jobs?${params.toString()}`, { scroll: false });
        },
        [router, searchParams],
    );

    const handleTypeChange = (type: string) => {
        const newTypes = selectedTypes.includes(type)
            ? selectedTypes.filter((t) => t !== type)
            : [...selectedTypes, type];
        setSelectedTypes(newTypes);
        updateFilters("jobType", newTypes);
    };

    const handleCategoryChange = (cat: string) => {
        const newCats = selectedCategories.includes(cat)
            ? selectedCategories.filter((c) => c !== cat)
            : [...selectedCategories, cat];
        setSelectedCategories(newCats);
        updateFilters("category", newCats);
    };

    const activeFilterCount = selectedTypes.length + selectedCategories.length;

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#D6DDEB] bg-white px-4 py-3 text-sm font-medium text-[#515B6F] transition-colors hover:border-[#4640DE] hover:text-[#4640DE]"
            >
                <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
                Filters
                {activeFilterCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4640DE] text-xs font-bold text-white">
                        {activeFilterCount}
                    </span>
                )}
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#D6DDEB] px-5 py-4">
                    <h2 className="font-clash-display text-lg font-bold text-[#25324B]">
                        Filters
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#515B6F] transition-colors hover:bg-slate-100 hover:text-[#25324B]"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Filter Content */}
                <div className="space-y-8 p-5">
                    <div>
                        <h3 className="font-clash-display mb-4 text-base font-semibold text-[#25324B]">
                            Type of Employment
                        </h3>
                        <div className="space-y-3">
                            {jobTypes.map((type) => (
                                <label
                                    key={type}
                                    className="group flex cursor-pointer items-center gap-3"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => handleTypeChange(type)}
                                        className="h-5 w-5 cursor-pointer rounded border-[#D6DDEB] accent-[#4640DE] transition-all hover:border-[#4640DE]"
                                    />
                                    <span
                                        className={`text-sm font-medium transition-colors ${selectedTypes.includes(type)
                                                ? "text-[#4640DE]"
                                                : "text-[#515B6F] group-hover:text-[#25324B]"
                                            }`}
                                    >
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-clash-display mb-4 text-base font-semibold text-[#25324B]">
                            Categories
                        </h3>
                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <label
                                    key={cat}
                                    className="group flex cursor-pointer items-center gap-3"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                        className="h-5 w-5 cursor-pointer rounded border-[#D6DDEB] accent-[#4640DE] transition-all hover:border-[#4640DE]"
                                    />
                                    <span
                                        className={`text-sm font-medium transition-colors ${selectedCategories.includes(cat)
                                                ? "text-[#4640DE]"
                                                : "text-[#515B6F] group-hover:text-[#25324B]"
                                            }`}
                                    >
                                        {cat}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
