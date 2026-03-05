/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createJobValidationZodSchema } from "@/zod";
import { revalidatePath, revalidateTag } from "next/cache";

export const createJob = async (
  _currentState: any,
  formData: FormData,
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

    const validatedPayload = zodValidator(
      payload,
      createJobValidationZodSchema,
    );

    if (!validatedPayload.success) {
      return {
        success: false,
        message: validatedPayload.errors
          ? "Validation failed"
          : "Internal validation error",
        formData: payload,
        errors: validatedPayload.errors,
      };
    }

    const { data } = validatedPayload;

    const submitData = new FormData();
    submitData.append("data", JSON.stringify(data));

    const file = formData.get("file");
    if (file instanceof File && file.size > 0) {
      submitData.append("file", file);
    }

    // Backend implicitly expects category for filtering/listing if needed outside the JSON blob
    data.category?.forEach((cat: string) => submitData.append("category", cat));

    const res = await serverFetch.post("/jobs", { body: submitData });
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
      message: "Job posted successfully",
      data: result.data,
    };
  } catch (error: any) {
    console.error("Error creating job:", error);
    return { success: false, message: error.message || "Something went wrong" };
  }
};

export const getAllJobs = async (queryString?: string) => {
  try {
    const response = await serverFetch.get(
      `/jobs${queryString ? `?${queryString}` : ""}`,
      {
        next: { tags: ["jobs"] },
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { success: false };
  }
};

export const getJobById = async (jobId: string) => {
  try {
    const response = await serverFetch.get(`/jobs/${jobId}`);
    return { success: true, data: await response.json() };
  } catch (error) {
    console.error("Error fetching job:", error);
    return { success: false };
  }
};

export const deleteJob = async (jobId: string) => {
  try {
    await serverFetch.delete(`/jobs/${jobId}`);
    revalidateTag("jobs", "max");
    return { success: true };
  } catch (error) {
    console.error("Error deleting job:", error);
    return { success: false };
  }
};
