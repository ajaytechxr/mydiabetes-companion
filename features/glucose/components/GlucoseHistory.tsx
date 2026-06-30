"use client";

import { GlucoseReading } from "./GlucoseDashboard";

interface GlucoseHistoryProps {
  readings: GlucoseReading[];
  loading: boolean;
}

export default function GlucoseHistory({
  readings,
  loading,
}: GlucoseHistoryProps) {
  if (loading) {
    return <p>Loading readings...</p>;
  }

  if (readings.length === 0) {
    return <p>No glucose readings yet.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">
        Recent Readings
      </h2>

      {readings.map((reading) => (
        <div
          key={reading.id}
          className="rounded-lg border bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">
              {reading.glucose} mg/dL
            </span>

            <span className="rounded bg-slate-100 px-2 py-1 text-sm">
              {reading.reading_type}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-600">
            {new Date(reading.recorded_at).toLocaleString()}
          </p>

          {reading.notes && (
            <p className="mt-2">
              {reading.notes}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}