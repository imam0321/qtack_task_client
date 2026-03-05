/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { categories, jobTypes } from "../admin/JobManagement/constants";

export default function JobFilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <aside className="lg:w-1/4 space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
      <div>
        <h3 className="font-clash-display text-xl font-semibold text-[#25324B] mb-4">
          Type of Employment
        </h3>
        <div className="space-y-3">
          {jobTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="w-5 h-5 border-[#D6DDEB] rounded accent-[#4640DE] cursor-pointer transition-all hover:border-[#4640DE]"
              />
              <span
                className={`text-sm font-medium transition-colors ${selectedTypes.includes(type) ? "text-[#4640DE]" : "text-[#515B6F] group-hover:text-[#25324B]"}`}
              >
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-clash-display text-xl font-semibold text-[#25324B] mb-4">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="w-5 h-5 border-[#D6DDEB] rounded accent-[#4640DE] cursor-pointer transition-all hover:border-[#4640DE]"
              />
              <span
                className={`text-sm font-medium transition-colors ${selectedCategories.includes(cat) ? "text-[#4640DE]" : "text-[#515B6F] group-hover:text-[#25324B]"}`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
