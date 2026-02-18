import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/auth-layout";
import { ResetForm } from "@/components/auth/reset-form";

export const metadata: Metadata = {
  title: "Parolni yangilash | UMD Auth",
  description: "Reset token yordamida parolni yangilash (demo).",
};

type Props = {
  searchParams?: { token?: string };
};

export default function ResetPasswordPage({ searchParams }: Props) {
  const token = searchParams?.token ?? "";

  return (
    <AuthLayout
      title="Parolni yangilash"
      subtitle="Tokenni tekshirib, yangi parol o'rnating."
      illustrationHint="Reset tokenlar 1 soat amal qiladi"
    >
      {token ? (
        <ResetForm token={token} />
      ) : (
        <div className="space-y-4 text-center text-slate-200">
          <p className="text-lg font-semibold">Token topilmadi</p>
          <p className="text-sm text-slate-400">Havola orqali kiring yoki yangi token oling.</p>
        </div>
      )}
    </AuthLayout>
  );
}
