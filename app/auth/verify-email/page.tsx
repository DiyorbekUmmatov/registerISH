import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/auth-layout";
import { VerifyEmailCard } from "@/components/auth/verify-email-card";

export const metadata: Metadata = {
  title: "Emailni tasdiqlash | UMD Auth",
  description: "Demo verify email sahifasi",
};

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Emailni tasdiqlang"
      subtitle="Umuman demo: emailga yuborilgan linkni bosdingiz deb faraz qilamiz."
      illustrationHint="Tasdiqlash holati UI"
    >
      <VerifyEmailCard />
    </AuthLayout>
  );
}
