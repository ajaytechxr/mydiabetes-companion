import GlucoseDashboard from "@/features/glucose/components/GlucoseDashboard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">
          My Dashboard
        </h1>

        <GlucoseDashboard />
      </div>
    </main>
  );
}