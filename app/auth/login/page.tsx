import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/auth-layout";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Kirish | UMD Auth",
  description: "Premium autentifikatsiya tajribasi - kirish sahifasi",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Hisobingizga kiring"
      subtitle="Premium UI, kuchli validatsiya va silliq animatsiyalar bilan demo autentifikatsiya."
      illustrationHint="Framer Motion page transition + glassmorphism"
    >
      <LoginForm />
    </AuthLayout>
  );
}
