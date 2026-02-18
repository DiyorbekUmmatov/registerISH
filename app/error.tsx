"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-50">
        <div className="glass max-w-md space-y-4 rounded-2xl border border-white/10 p-6 text-center">
          <h2 className="text-xl font-bold">Kutilmagan xato</h2>
          <p className="text-sm text-slate-300">
            Ilova ishlash jarayonida nosozlik yuz berdi. Qayta urinib ko&apos;ring.
          </p>
          <Button onClick={reset}>Qayta urinish</Button>
        </div>
      </body>
    </html>
  );
}
