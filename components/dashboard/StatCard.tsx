import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-6">
        <p className="text-sm text-slate-500">{title}</p>

        <h2 className="mt-3 text-3xl font-bold">{value}</h2>

        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
}