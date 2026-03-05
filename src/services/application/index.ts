"use server";

import { serverFetch } from "@/lib/server-fetch";

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
