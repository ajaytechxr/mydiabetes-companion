import AddGlucoseForm from "@/features/glucose/components/AddGlucoseForm";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold">
          My Dashboard
        </h1>

        <AddGlucoseForm />
      </div>
    </main>
  );
}