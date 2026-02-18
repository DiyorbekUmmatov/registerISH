import type { Metadata } from "next";
import { DashboardScreen } from "@/components/dashboard/dashboard-screen";

export const metadata: Metadata = {
  title: "Dashboard | UMD Auth",
  description: "Himoyalangan dashboard — demo statistika va faollik",
};

export default function DashboardPage() {
  return <DashboardScreen />;
}
