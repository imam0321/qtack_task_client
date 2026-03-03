/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createJobValidationZodSchema } from "@/zod";
import { revalidatePath } from "next/cache";

export const createJob = async (
  _currentState: any,
  formData: FormData
): Promise<any> => {
  try {
    const payload = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      description: formData.get("description"),
      jobType: formData.get("jobType"),
      category: formData.getAll("category"),
    };

    const validatedPayload = zodValidator(payload, createJobValidationZodSchema);

    if (!validatedPayload.success && validatedPayload.errors) {
      return {
        success: false,
        message: "Validation failed",
        formData: payload,
        errors: validatedPayload.errors,
      };
    }

    if (!validatedPayload.data) {
      return {
        success: false,
        message: "Validation failed",
        formData: payload,
      };
    }

    const res = await serverFetch.post("/jobs", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedPayload.data),
    });

    const result = await res.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Failed to create job",
      };
    }

    revalidatePath("/admin/dashboard");

    return {
      success: true,
      message: "Job created successfully",
      data: result.data,
    };
  } catch (error: any) {
    console.error("Error creating job:", error);
    return {
      success: false,
      message: error.message || "Something went wrong while creating the job",
    };
  }
};

export const getAllJobs = async () => {
  try {
    const response = await serverFetch.get("/jobs");
    return { success: true, data: await response.json() };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { success: false };
  }
};

export const getJobById = async (
  jobId: string
) => {
  try {
    const response = await serverFetch.get(`/jobs/${jobId}`);
    return { success: true, data: await response.json() };
  } catch (error) {
    console.error("Error fetching job:", error);
    return { success: false };
  }
};

export const deleteJob = async (
  jobId: string
) => {
  try {
    await serverFetch.delete(`/jobs/${jobId}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting job:", error);
    return { success: false };
  }
};