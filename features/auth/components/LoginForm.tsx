"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthCard from "./AuthCard";

export default function LoginForm() {
  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue to MyDiabetes Companion"
    >
      <form className="space-y-4">
        <Input
          type="email"
          placeholder="Email address"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button className="w-full">
          Sign In
        </Button>
      </form>
    </AuthCard>
  );
}