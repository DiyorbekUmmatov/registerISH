import type { Metadata } from "next";
import { SettingsScreen } from "@/components/dashboard/settings-screen";

export const metadata: Metadata = {
  title: "Sozlamalar | UMD Auth",
  description: "Profil, tema va xavfsizlik sozlamalari",
};

export default function SettingsPage() {
  return <SettingsScreen />;
}
