import { supabaseAdmin } from "@/lib/supabaseAdmin";

function validatePayload(payload) {
  const fullName = String(payload.fullName || "").trim();
  const email = String(payload.email || "").trim();
  const phone = String(payload.phone || "").trim();
  const message = String(payload.message || "").trim();

  if (!fullName || !email || !message) {
    return { ok: false, error: "Full name, email and message are required." };
  }

  if (!email.includes("@")) {
    return { ok: false, error: "Please provide a valid email." };
  }

  return {
    ok: true,
    value: { fullName, email, phone, message }
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const validation = validatePayload(req.body || {});
  if (!validation.ok) {
    return res.status(400).json({ error: validation.error });
  }

  if (!supabaseAdmin) {
    return res.status(500).json({
      error: "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    });
  }

  const { error } = await supabaseAdmin.from("consultation_requests").insert({
    full_name: validation.value.fullName,
    email: validation.value.email,
    phone: validation.value.phone || null,
    message: validation.value.message
  });

  if (error) {
    return res.status(500).json({ error: "Could not save your request right now. Please try again." });
  }

  return res.status(200).json({ success: true });
}
