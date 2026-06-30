import { createClient } from "@/lib/supabase/client";

export async function addGlucoseReading(data: {
  glucose: number;
  reading_type: string;
  notes?: string;
  recorded_at: string;
}) {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated.");
  }

  return await supabase.from("glucose_logs").insert({
    user_id: user.id,
    glucose: data.glucose,
    reading_type: data.reading_type,
    notes: data.notes ?? null,
    recorded_at: data.recorded_at,
  });
}

export async function getGlucoseReadings() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated.");
  }

  return await supabase
    .from("glucose_logs")
    .select("*")
    .eq("user_id", user.id)
    .order("recorded_at", { ascending: false });
}