"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const setCookie = async (
  key: string,
  value: string,
  options: Partial<ResponseCookie>,
) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, options);
};

export const getCookie = async (key: string) => {
  try {
    const cookieStore = await cookies();
    return cookieStore.get(key)?.value || null;
  } catch (error) {
    // In static generation, cookies() will throw an error. 
    // We catch it to allow the page to be rendered statically (as a guest).
    return null;
  }
};

export const deleteCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
