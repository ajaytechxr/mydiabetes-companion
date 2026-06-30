"use client";

import AuthCard from "./AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupForm() {
  return (
    <AuthCard
      title="Create Account"
      subtitle="Start your diabetes journey"
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
          Create Account
        </Button>
      </form>
    </AuthCard>
  );
}