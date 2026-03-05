import { TJobCategory, TJobType } from "@/types";

export const jobTypes: TJobType[] = [
  "Full Time",
  "Part Time",
  "Remote",
  "Contract",
  "Internship",
];
export const categories: TJobCategory[] = [
  "Design",
  "Sales",
  "Marketing",
  "Finance",
  "Technology",
  "Engineering",
  "Business",
  "Human Resources",
];

export const fields = [
  {
    name: "title",
    label: "Job Title",
    placeholder: "e.g. Senior Frontend Engineer",
  },
  { name: "company", label: "Company", placeholder: "e.g. TechNova Solutions" },
  {
    name: "location",
    label: "Location",
    placeholder: "e.g. Dhaka, Bangladesh",
  },
];
