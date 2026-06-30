import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <Card className="mx-auto w-full max-w-md rounded-2xl shadow-xl">
      <CardContent className="space-y-6 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            {title}
          </h1>

          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {children}
      </CardContent>
    </Card>
  );
}