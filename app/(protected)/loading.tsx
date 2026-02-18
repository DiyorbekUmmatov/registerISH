export default function ProtectedLoading() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-4 px-4 py-10 md:px-6 lg:px-8">
      <div className="skeleton h-40 w-full" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <div className="skeleton h-28 w-full" />
        <div className="skeleton h-28 w-full" />
        <div className="skeleton h-28 w-full" />
      </div>
      <div className="grid gap-3 lg:grid-cols-[1.7fr_1fr]">
        <div className="skeleton h-64 w-full" />
        <div className="skeleton h-64 w-full" />
      </div>
    </div>
  );
}
