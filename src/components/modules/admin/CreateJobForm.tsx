import { TJobCategory, TJobType, TActionResponse } from "@/types";
import { useState, useEffect } from "react";
import { Check, AlertCircle } from "lucide-react";
import InputFieldError from "@/components/shared/InputFieldError";

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
  formAction: (formData: FormData) => void;
  state: TActionResponse | null;
  isPending: boolean;
  handleClose: () => void;
  jobTypes: TJobType[];
  categories: TJobCategory[];
  onSuccess?: () => void;
}

export default function CreateJobForm({
  formRef,
  formAction,
  state,
  isPending,
  handleClose,
  jobTypes,
  categories,
  onSuccess,
}: Props) {
  const [selectedCategories, setSelectedCategories] = useState<TJobCategory[]>([]);

  const toggleCategory = (cat: TJobCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const hasCategories = selectedCategories.length > 0;

  useEffect(() => {
    if (state?.success && onSuccess) {
      onSuccess();
    }
  }, [state, onSuccess]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-6 animate-in fade-in duration-300"
    >
      {/* Hidden inputs for multi-value category */}
      {selectedCategories.map((cat) => (
        <input key={cat} type="hidden" name="category" value={cat} />
      ))}

      {/* Job Title */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700">
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          name="title"
          required
          placeholder="e.g. Senior Frontend Engineer"
          defaultValue={state?.formData?.title || ""}
          className="block w-full px-4 py-3 rounded-xl border border-slate-300 
                     focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 
                     outline-none transition-all text-slate-800 placeholder:text-slate-400"
        />
        <InputFieldError state={state} field="title" />
      </div>

      {/* Company + Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            name="company"
            required
            placeholder="e.g. TechNova Solutions"
            defaultValue={state?.formData?.company || ""}
            className="block w-full px-4 py-3 rounded-xl border border-slate-300 
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 
                       outline-none transition-all text-slate-800 placeholder:text-slate-400"
          />
          <InputFieldError state={state} field="company" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            name="location"
            required
            placeholder="e.g. Dhaka, Bangladesh • Remote"
            defaultValue={state?.formData?.location || ""}
            className="block w-full px-4 py-3 rounded-xl border border-slate-300 
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 
                       outline-none transition-all text-slate-800 placeholder:text-slate-400"
          />
          <InputFieldError state={state} field="location" />
        </div>
      </div>

      {/* Job Type */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700">
          Job Type <span className="text-red-500">*</span>
        </label>
        <select
          name="jobType"
          required
          defaultValue={state?.formData?.jobType || ""}
          className="block w-full px-4 py-3 rounded-xl border border-slate-300 
                     focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 
                     outline-none transition-all bg-white text-slate-800"
        >
          <option value="" disabled hidden>
            Select job type
          </option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <InputFieldError state={state} field="jobType" />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-slate-700">
            Categories <span className="text-red-500">*</span>
          </label>
          <span className="text-xs text-slate-500">
            {selectedCategories.length} selected
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isSelected = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                className={`
                  inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 border
                  ${isSelected
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-white text-slate-700 border-slate-300 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50/60"
                  }
                `}
              >
                {isSelected && <Check size={14} />}
                {cat}
              </button>
            );
          })}
        </div>
        <InputFieldError state={state} field="category" />

        {!hasCategories && !state?.errors?.some(e => e.field === "category") && (
          <p className="flex items-center gap-1.5 text-xs text-rose-600 mt-1.5">
            <AlertCircle size={14} />
            Please select at least one category
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700">
          Job Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          required
          rows={5}
          placeholder="Describe the role, key responsibilities, required skills, what we offer..."
          defaultValue={state?.formData?.description || ""}
          className="block w-full px-4 py-3 rounded-xl border border-slate-300 
                     focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 
                     outline-none transition-all text-slate-800 placeholder:text-slate-400 resize-y min-h-[120px]"
        />
        <InputFieldError state={state} field="description" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 mt-2">
        <button
          type="button"
          onClick={handleClose}
          disabled={isPending}
          className="flex-1 px-6 py-3 rounded-xl font-medium text-slate-600 
                     border border-slate-300 hover:bg-slate-50 
                     transition-colors disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending || !hasCategories}
          className="flex-1 px-6 py-3 rounded-xl font-semibold text-white 
                     bg-indigo-600 hover:bg-indigo-700 
                     transition-all shadow-sm hover:shadow 
                     disabled:opacity-60 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2 min-w-[160px]"
        >
          {isPending ? (
            <>
              <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Posting...
            </>
          ) : (
            "Post Job"
          )}
        </button>
      </div>
    </form>
  );
}
