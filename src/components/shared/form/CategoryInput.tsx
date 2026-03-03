import { TJobCategory } from "@/types";
import { AlertCircle } from "lucide-react";
import InputFieldError from "@/components/shared/InputFieldError";

interface CategoryInputProps {
    categories: TJobCategory[];
    selectedCategories: TJobCategory[];
    toggleCategory: (cat: TJobCategory) => void;
    showCategoryError: boolean;
    state: any;
}

export default function CategoryInput({
    categories,
    selectedCategories,
    toggleCategory,
    showCategoryError,
    state,
}: CategoryInputProps) {
    const hasCategories = selectedCategories.length > 0;

    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold text-slate-700">
                    Categories <span className="text-red-500">*</span>
                </label>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                    const isSelected = selectedCategories.includes(cat);
                    return (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => toggleCategory(cat)}
                            className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                transition-all duration-200 border
                ${isSelected
                                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                                    : "bg-white text-slate-700 border-slate-300 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50/60"
                                }
              `}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>
            <InputFieldError state={state} field="category" />

            {showCategoryError && !hasCategories && !state?.errors?.some((e: any) => e.field === "category") && (
                <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5">
                    <AlertCircle size={14} />
                    Please select at least one category
                </p>
            )}
        </div>
    );
}
