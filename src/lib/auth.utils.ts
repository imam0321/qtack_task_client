export type UserRole = "admin" | "user";

export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authRoutes = ["/login"];

export const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

export const userProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard/],
  exact: [],
};

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => route === pathname);
};

export const isRouterMatches = (
  pathname: string,
  routes: RouteConfig,
): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }

  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};

export const getRouteOwner = (pathname: string): "admin" | "user" | null => {
  if (isRouterMatches(pathname, adminProtectedRoutes)) return "admin";
  if (isRouterMatches(pathname, userProtectedRoutes)) return "user";
  return null;
};

export const getDefaultDashboardRoute = (role: UserRole): string => {
  switch (role) {
    case "admin":
      return "/admin/dashboard";
    case "user":
      return "/user/dashboard";
    default:
      return "/";
  }
}

export const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole,
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);
  const normalizedRole = role?.toLowerCase?.() || "";
  if (routeOwner === normalizedRole) {
    return true;
  }

  return false;
};
