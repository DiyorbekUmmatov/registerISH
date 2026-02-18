export default function AuthLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-50">
      <div className="glass flex items-center gap-3 rounded-2xl border border-white/10 px-6 py-4">
        <div className="h-3 w-3 animate-ping rounded-full bg-indigo-400" />
        <p className="text-sm">UI yuklanmoqda...</p>
      </div>
    </div>
  );
}
