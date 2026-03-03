import z from "zod";

export const loginValidationZodSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const createJobValidationZodSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  jobType: z.enum(["Full Time", "Part Time", "Remote", "Contract", "Internship"], {
    message: "Invalid job type",
  }),
  category: z.array(z.string()).min(1, { message: "At least one category is required" }),
});