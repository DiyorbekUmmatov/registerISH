import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/auth-layout";
import { ForgotForm } from "@/components/auth/forgot-form";

export const metadata: Metadata = {
  title: "Parolni tiklash | UMD Auth",
  description: "Email orqali parolni tiklash havolasini yuborish (demo).",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Parolni unutdingizmi?"
      subtitle="Email kiriting — demo reset havolasi hosil bo'ladi."
      illustrationHint="Reset tokenlar localStorage'da saqlanadi"
    >
      <ForgotForm />
    </AuthLayout>
  );
}
