import type { Metadata } from "next";
import { DashboardNavbar } from "@/components/layout/dashboard-navbar";
import { RouteGuard } from "@/components/layout/route-guard";

export const metadata: Metadata = {
  title: "UMD Auth | Himoyalangan",
  description: "Himoyalangan sahifalar: dashboard va sozlamalar",
};

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <RouteGuard>
      <div className="flex min-h-screen flex-col">
        <DashboardNavbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-14 pt-8 md:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </RouteGuard>
  );
}
