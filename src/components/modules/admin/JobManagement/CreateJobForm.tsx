/* eslint-disable @typescript-eslint/no-explicit-any */
import { TJobCategory } from "@/types";
import { useState, useEffect, useRef, useActionState } from "react";
import InputFieldError from "@/components/shared/InputFieldError";
import { createJob } from "@/services/job/job";
import { toast } from "sonner";
import CategoryInput from "@/components/shared/form/CategoryInput";
import ImageUploadInput from "@/components/shared/form/ImageUploadInput";
import JobTypeSelector from "@/components/shared/form/JobTypeSelector";
import { fields, jobTypes, categories } from "./constants";


export default function CreateJobForm({ handleClose }: { handleClose: () => void }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction, isPending] = useActionState(createJob, null);

  const [selectedCategories, setSelectedCategories] = useState<TJobCategory[]>(
    [],
  );
  const [showCategoryError, setShowCategoryError] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [selectedJobType, setSelectedJobType] = useState(state?.formData?.jobType || "");

  const toggleCategory = (cat: TJobCategory) => {
    setSelectedCategories((prev) => {
      const newCats = prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat];
      if (newCats.length > 0) setShowCategoryError(false);
      return newCats;
    });
  };

  const hasCategories = selectedCategories.length > 0;

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.message || "Job created successfully!");
        handleClose();
      } else if (state.message !== "Validation failed") {
        toast.error(state.message || "Failed to create job");
      }
    }
  }, [state, handleClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!hasCategories) {
      e.preventDefault();
      setShowCategoryError(true);
      return;
    }
  };

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} className="space-y-4">
      {selectedCategories.map((cat) => (
        <input key={cat} type="hidden" name="category" value={cat} />
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Modernized Input Mapping */}
        {fields.map((field, idx) => (
          <div key={field.name} className={`space-y-1 ${idx === 0 ? "md:col-span-1" : ""}`}>
            <label className="block text-sm font-semibold text-slate-700">
              {field.label} <span className="text-red-500">*</span>
            </label>
            <input
              name={field.name}
              required
              placeholder={field.placeholder}
              defaultValue={(state?.formData as any)?.[field.name] || ""}
              className="input-field"
            />
            <InputFieldError state={state} field={field.name} />
          </div>
        ))}

        <JobTypeSelector
          jobTypes={jobTypes}
          selectedJobType={selectedJobType}
          setSelectedJobType={setSelectedJobType}
          state={state}
        />
      </div>

      {/* Description */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700">
          Job Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          required
          rows={5}
          placeholder="Describe the role, key responsibilities, required skills..."
          defaultValue={state?.formData?.description || ""}
          className="input-field resize-y min-h-30"
        />
        <InputFieldError state={state} field="description" />
      </div>

      {/* Categories & Image Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <CategoryInput
          categories={categories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          showCategoryError={showCategoryError}
          state={state}
        />

        <ImageUploadInput
          previewSrc={previewSrc}
          setPreviewSrc={setPreviewSrc}
          state={state}
        />
      </div>

      {/* Action Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
      >
        {isPending ? "Posting..." : "Post Job"}
      </button>
    </form>
  );
}
