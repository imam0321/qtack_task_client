/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { revalidatePath } from "next/cache";

import { createJobApplicationValidationZodSchema } from "@/zod";

export const createJobApplication = async (
  _currentState: any,
  formData: FormData,
): Promise<any> => {
  try {
    const payload = {
      jobId: formData.get("jobId"),
      name: formData.get("name"),
      email: formData.get("email"),
      resumeLink: formData.get("resumeLink"),
      coverNote: formData.get("coverNote"),
    };

    const validatedPayload = zodValidator(
      payload,
      createJobApplicationValidationZodSchema,
    );

    if (!validatedPayload.success) {
      return {
        success: false,
        message: "Validation failed",
        formData: payload,
        errors: validatedPayload.errors,
      };
    }

    const { data } = validatedPayload;

    const res = await serverFetch.post("/applications", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Failed to submit application",
      };
    }

    revalidatePath("/admin/dashboard");
    return {
      success: true,
      message: "Application submitted successfully",
      data: result.data,
    };
  } catch (error: any) {
    console.error("Error submitting application:", error);
    return { success: false, message: error.message || "Something went wrong" };
  }
};

export const getAllApplications = async (queryString?: string) => {
  try {
    const response = await serverFetch.get(
      `/applications${queryString ? `?${queryString}` : ""}`,
      {
        next: { tags: ["applications"] },
        requiresAuth: true,
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching applications:", error);
    return { success: false };
  }
};
