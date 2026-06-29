export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-2xl">
        🩺
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          MyDiabetes Companion
        </h1>

        <p className="text-sm text-slate-500">
          Your Personal Diabetes Care Platform
        </p>
      </div>
    </div>
  );
}