import { getCookie } from "@/services/auth/tokenHandlers";

interface CustomRequestInit extends RequestInit {
  requiresAuth?: boolean;
}

const base_url = process.env.NEXT_PUBLIC_BASE_API;

const serverFetchHelper = async (
  endpoint: string,
  options: CustomRequestInit,
): Promise<Response> => {
  const { headers, requiresAuth = true, ...restOptions } = options;
  let accessToken = null;

  if (requiresAuth) {
    accessToken = await getCookie("accessToken");
  }

  const response = await fetch(`${base_url}${endpoint}`, {
    headers: {
      ...headers,
      ...(accessToken ? { Cookie: `accessToken=${accessToken}` } : {}),
    },
    ...restOptions,
  });

  return response;
};

export const serverFetch = {
  get: async (
    endpoint: string,
    options: CustomRequestInit = {},
  ): Promise<Response> => serverFetchHelper(endpoint, { ...options, method: "GET" }),

  post: async (
    endpoint: string,
    options: CustomRequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "POST" }),

  put: async (
    endpoint: string,
    options: CustomRequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "PUT" }),

  patch: async (
    endpoint: string,
    options: CustomRequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "PATCH" }),

  delete: async (
    endpoint: string,
    options: CustomRequestInit = {},
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "DELETE" }),
};