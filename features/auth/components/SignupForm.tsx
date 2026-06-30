"use client";

import { useState } from "react";

import AuthCard from "./AuthCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { signUp } from "../services/auth.service";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await signUp(email, password);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(
      "Account created successfully! Please check your email to verify your account."
    );
  }

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start your diabetes journey"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </AuthCard>
  );
}