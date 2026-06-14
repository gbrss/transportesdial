// Edge function: envía correo de notificación al equipo y confirmación al cliente.
// Usa Lovable Emails (send-transactional-email) cuando el dominio esté configurado.
// Mientras tanto, registra la solicitud y responde 200 para no bloquear el formulario.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const TEAM_EMAIL = "contacto@transportesdial.cl";

interface Payload {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json()) as Payload;
    if (!body?.id || !body?.email) {
      return json({ error: "invalid_payload" }, 400);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const results: Record<string, unknown> = {};

    // 1) Notificación al equipo
    const teamRes = await trySend(supabase, {
      templateName: "quote-team-notification",
      recipientEmail: TEAM_EMAIL,
      idempotencyKey: `quote-team-${body.id}`,
      templateData: body,
    });
    results.team = teamRes;

    // 2) Confirmación al cliente
    const clientRes = await trySend(supabase, {
      templateName: "quote-client-confirmation",
      recipientEmail: body.email,
      idempotencyKey: `quote-client-${body.id}`,
      templateData: body,
    });
    results.client = clientRes;

    const allSent = teamRes.ok && clientRes.ok;
    if (allSent) {
      await supabase
        .from("quote_requests")
        .update({ email_sent: true })
        .eq("id", body.id);
    }

    return json({ ok: true, sent: allSent, results });
  } catch (e) {
    console.error("send-quote-email error:", e);
    return json({ ok: false, error: String(e) }, 200); // 200 para no romper UX
  }
});

async function trySend(
  supabase: ReturnType<typeof createClient>,
  payload: {
    templateName: string;
    recipientEmail: string;
    idempotencyKey: string;
    templateData: Record<string, unknown>;
  },
) {
  try {
    const { data, error } = await supabase.functions.invoke("send-transactional-email", {
      body: payload,
    });
    if (error) {
      console.warn("send-transactional-email error:", error.message);
      return { ok: false, error: error.message };
    }
    return { ok: true, data };
  } catch (e) {
    console.warn("send-transactional-email exception:", e);
    return { ok: false, error: String(e) };
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
