"use client";

import { useState } from "react";
import { addGlucoseReading } from "../services/glucose.service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AddGlucoseForm() {
  const [glucose, setGlucose] = useState("");
  const [readingType, setReadingType] = useState("Fasting");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await addGlucoseReading({
      glucose: Number(glucose),
      reading_type: readingType,
      notes,
      recorded_at: new Date().toISOString(),
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("✅ Glucose reading saved successfully!");

    setGlucose("");
    setNotes("");
    setReadingType("Fasting");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto"
    >
      {message && (
        <Alert>
          <AlertDescription>
            {message}
          </AlertDescription>
        </Alert>
      )}

      <Input
        type="number"
        placeholder="Blood Glucose (mg/dL)"
        value={glucose}
        onChange={(e) => setGlucose(e.target.value)}
        required
      />

      <select
        value={readingType}
        onChange={(e) => setReadingType(e.target.value)}
        className="w-full rounded-md border p-2"
      >
        <option>Fasting</option>
        <option>Before Meal</option>
        <option>After Meal</option>
        <option>Bedtime</option>
      </select>

      <Input
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Reading"}
      </Button>
    </form>
  );
}