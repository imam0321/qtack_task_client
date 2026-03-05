import z from "zod";

export const loginValidationZodSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const createJobValidationZodSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Job title must be at least 3 characters" }),
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z
    .string()
    .min(20, { message: "Job description must be at least 20 characters" }),
  jobType: z.enum(
    ["Full Time", "Part Time", "Remote", "Contract", "Internship"],
    {
      message: "Please select a valid job type",
    },
  ),
  category: z
    .array(
      z.enum([
        "Design",
        "Sales",
        "Marketing",
        "Finance",
        "Technology",
        "Engineering",
        "Business",
        "Human Resources",
      ]),
    )
    .min(1, { message: "At least one category is required" }),
});

export const createJobApplicationValidationZodSchema = z.object({
  jobId: z.string().min(1, { message: "Job ID is required" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Please enter a valid email address" }),
  resumeLink: z
    .string()
    .url({ message: "Please enter a valid URL for your resume" }),
  coverNote: z.string().optional(),
});
