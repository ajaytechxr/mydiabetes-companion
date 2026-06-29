import { Card, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <Card className="mx-auto w-full max-w-md shadow-lg rounded-2xl">
      <CardContent className="space-y-6 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-slate-500">{subtitle}</p>
        </div>

        {children}
      </CardContent>
    </Card>
  );
}