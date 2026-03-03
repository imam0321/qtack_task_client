/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod";
import { parse } from "cookie"
import jwt, { JwtPayload } from "jsonwebtoken";
import { setCookie, deleteCookie, getCookie } from "./tokenHandlers";
import { getDefaultDashboardRoute, isValidRedirectForRole, UserRole } from "@/lib/auth.utils";
import { redirect } from "next/navigation";

export const loginUser = async (_currentState: any, formData: FormData): Promise<any> => {
  try {
    let accessTokenObject: null | any = null;
    const redirectPath = formData.get("redirectPath") || null;

    const payload = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    const validatedPayload = zodValidator(payload, loginValidationZodSchema);

    if (!validatedPayload.success) {
      return {
        success: false,
        message: "Validation failed",
        formData: payload,
        errors: validatedPayload.errors,
      }
    }

    const { data } = validatedPayload;

    const backendPayload = {
      email: data.email,
      password: data.password
    }

    const res = await serverFetch.post("/auth/login", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(backendPayload)
    });

    const result = await res.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Invalid email or password",
      };
    }

    const setCookieHeaders = res.headers.getSetCookie();

    if (setCookieHeaders && setCookieHeaders.length > 0) {
      setCookieHeaders.forEach((cookie: string) => {
        const parseCookie = parse(cookie);

        if (parseCookie["accessToken"]) {
          accessTokenObject = parseCookie;
        }
      })
    } else {
      return {
        success: false,
        message: "Authentication failed. Please try again.",
      };
    }

    if (!accessTokenObject) {
      return {
        success: false,
        message: "Authentication failed. Please try again.",
      };
    }

    await setCookie("accessToken", accessTokenObject.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: parseInt(accessTokenObject["Max-Age"]) || 60 * 60 * 24,
      path: accessTokenObject.Path || "/"
    })


    const verifyToken: JwtPayload | string = jwt.verify(accessTokenObject.accessToken, process.env.JWT_ACCESS_SECRET as string)

    if (typeof verifyToken === "string") {
      return {
        success: false,
        message: "Authentication failed. Please try again.",
      };
    }

    const userRole: UserRole = verifyToken.role;

    if (redirectPath) {
      const requestedPath = redirectPath.toString();
      if (isValidRedirectForRole(requestedPath, userRole)) {
        redirect(`${requestedPath}${requestedPath.includes("?") ? "&" : "?"}loggedIn=true`);
      } else {
        redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
      }
    } else {
      redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
    }

  } catch (error: any) {
    if (error?.digest?.startsWith && typeof error.digest === "string" && error.digest.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    return {
      success: false,
      message: error.message || "Login failed. Please try again."
    }
  }
}

export const logoutUser = async () => {
  await deleteCookie("accessToken");
  redirect("/login?loggedOut=true");
};

export const getCurrentUser = async () => {
  const token = await getCookie("accessToken");
  if (!token) return null;

  try {
    const decoded = jwt.decode(token) as JwtPayload;
    return decoded;
  } catch {
    return null;
  }
};

