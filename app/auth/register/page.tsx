import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/auth-layout";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Ro'yxatdan o'tish | UMD Auth",
  description: "Premium dizayn va validatsiya bilan yangi hisob yaratish",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Yangi akkaunt yarating"
      subtitle="Uzbek tilida, micro-interactionlar bilan boyitilgan, SaaS darajasidagi UI."
      illustrationHint="Password kuchliligi va gradient kartalar"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
