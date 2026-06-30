"use client";

import AuthCard from "./AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue"
    >
      <form className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
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