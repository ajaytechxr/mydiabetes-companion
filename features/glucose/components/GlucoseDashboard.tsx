"use client";

import { useEffect, useState } from "react";

import AddGlucoseForm from "./AddGlucoseForm";
import GlucoseHistory from "./GlucoseHistory";

import { getGlucoseReadings } from "../services/glucose.service";

export interface GlucoseReading {
  id: string;
  glucose: number;
  reading_type: string;
  notes: string | null;
  recorded_at: string;
}

export default function GlucoseDashboard() {
  const [readings, setReadings] = useState<GlucoseReading[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadReadings() {
    setLoading(true);

    const { data, error } = await getGlucoseReadings();

    if (!error && data) {
      setReadings(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadReadings();
  }, []);

  return (
    <div className="space-y-8">
      <AddGlucoseForm onSaved={loadReadings} />

      <GlucoseHistory
        readings={readings}
        loading={loading}
      />
    </div>
  );
}