import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-50">
      <div className="glass max-w-lg space-y-4 rounded-2xl border border-white/10 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">404</p>
        <h1 className="text-3xl font-bold">Sahifa topilmadi</h1>
        <p className="text-sm text-slate-300">
          Qidirgan sahifangiz mavjud emas yoki ko&apos;chirilgan. Asosiy sahifaga qayting.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/dashboard">
            <Button variant="primary">Dashboard</Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="outline">Kirish</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
