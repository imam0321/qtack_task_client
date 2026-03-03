export interface IUser {
  role?: string;
  email?: string;
  userId?: string;
  iat?: number;
  exp?: number;
}

export type TJobType = "Full Time" | "Part Time" | "Remote" | "Contract" | "Internship";

export type TJobCategory =
  | "Design"
  | "Sales"
  | "Marketing"
  | "Finance"
  | "Technology"
  | "Engineering"
  | "Business"
  | "Human Resources";

export interface IJob {
  _id?: string;
  title?: string;
  company: string;
  description?: string;
  location?: string;
  jobType?: string;
  category?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface TActionResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: { field: string; message: string }[];
  formData?: unknown;
}



