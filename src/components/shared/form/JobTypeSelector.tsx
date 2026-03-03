import { TJobType } from "@/types";
import { ChevronDown } from "lucide-react";
import InputFieldError from "@/components/shared/InputFieldError";

interface JobTypeSelectorProps {
    jobTypes: TJobType[];
    selectedJobType: string;
    setSelectedJobType: (type: string) => void;
    state: any;
}

export default function JobTypeSelector({
    jobTypes,
    selectedJobType,
    setSelectedJobType,
    state,
}: JobTypeSelectorProps) {
    return (
        <div className="space-y-1">
            <label className="block text-sm font-semibold text-slate-700">
                Job Type <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
                <select
                    name="jobType"
                    required
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className={`input-field appearance-none cursor-pointer pr-10 ${selectedJobType ? "text-slate-800" : "text-slate-400"
                        }`}
                >
                    <option value="" disabled hidden>
                        Select job type
                    </option>
                    {jobTypes.map((type) => (
                        <option key={type} value={type} className="text-slate-800">
                            {type}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-indigo-500 transition-colors"
                    size={18}
                />
            </div>
            <InputFieldError state={state} field="jobType" />
        </div>
    );
}
