import Sidebar from "@/components/modules/dashboard/Sidebar";
import DashboardNavbar from "@/components/modules/dashboard/DashboardNavbar";
import { getCurrentUser } from "@/services/auth/auth";
import { IUser } from "@/types";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Please log in to access the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardNavbar user={user as IUser} />
        <main className="flex-1 p-2 md:p-4">{children}</main>
      </div>
    </div>
  );
}
