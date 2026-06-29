import Logo from "@/components/shared/Logo";
import StatCard from "@/components/dashboard/StatCard";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl space-y-8 px-8 py-10">

        <Logo />

        <WelcomeBanner />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Blood Glucose"
            value="112 mg/dL"
            subtitle="Current Reading"
          />

          <StatCard
            title="Meals Logged"
            value="3"
            subtitle="Today's Meals"
          />

          <StatCard
            title="Water Intake"
            value="2.1 L"
            subtitle="Daily Goal"
          />

          <StatCard
            title="Exercise"
            value="45 min"
            subtitle="Today's Activity"
          />

        </div>
      </div>
    </main>
  );
}