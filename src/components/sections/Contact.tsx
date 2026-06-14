import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal } from "@/components/ScrollReveal";

const WHATSAPP = "https://wa.me/56952076192";

const services = [
  "Arriendo de camiones aljibe",
  "Abastecimiento de agua potable",
  "Suministro para obras y construcción",
  "Llenado de piscinas",
  "Emergencias y cortes de agua",
  "Otro",
];

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido")
    .max(30)
    .regex(/^[0-9+\-s()]+$/, "Solo números y símbolos +, -, ()"),
  email: z.string().trim().email("Correo inválido").max(255),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().trim().min(5, "Cuéntanos un poco más").max(2000),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = { name: "", phone: "", email: "", service: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Revisa el formulario",
        description: "Algunos campos requieren tu atención.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email,
        service: parsed.data.service,
        message: parsed.data.message,
      };
      const { data: inserted, error: dbError } = await supabase
        .from("quote_requests")
        .insert(payload)
        .select("id")
        .single();

      if (dbError) throw dbError;

      const { error: fnError } = await supabase.functions.invoke("send-quote-email", {
        body: { id: inserted.id, ...payload },
      });
      if (fnError) console.warn("Email function error:", fnError);

      setSent(true);
      setForm(initial);
      toast({
        title: "¡Solicitud enviada!",
        description: "Recibimos tu cotización. Te contactaremos a la brevedad.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "No pudimos enviar tu mensaje",
        description: "Intenta nuevamente o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal variant="slideLeft">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contacto
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3 mb-6">
                Hablemos de tu próximo servicio
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Cuéntanos qué necesitas y te enviaremos una cotización rápida y sin compromiso.
              </p>

              <div className="space-y-5">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border hover:shadow-elegant transition-smooth group"
                >
                  <div className="h-12 w-12 rounded-xl bg-whatsapp flex items-center justify-center shadow-float">
                    <MessageCircle className="h-6 w-6 text-whatsapp-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </div>
                    <div className="font-semibold text-primary-deep group-hover:text-primary transition-smooth">
                      +56 9 5207 6192
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+56952076192"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border hover:shadow-elegant transition-smooth"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Teléfono
                    </div>
                    <div className="font-semibold text-primary-deep">+56 9 5207 6192</div>
                  </div>
                </a>
                <a
                  href="mailto:contacto@transportesdial.cl"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border hover:shadow-elegant transition-smooth"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                    <Send className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Correo
                    </div>
                    <div className="font-semibold text-primary-deep">contacto@transportesdial.cl</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Cobertura
                    </div>
                    <div className="font-semibold text-primary-deep">Todo Chile</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            {sent ? (
              <div className="bg-card rounded-3xl p-10 shadow-elegant border border-border/60 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-9 w-9 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-deep mb-3">
                  ¡Gracias por tu solicitud!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Recibimos tu mensaje y te enviamos una copia de confirmación a tu correo.
                  Nuestro equipo se pondrá en contacto contigo muy pronto.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setSent(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-background px-6 py-3 font-semibold text-primary-deep transition-smooth hover:bg-muted"
                  >
                    Enviar otra consulta
                  </button>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" /> Chatear por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-card rounded-3xl p-8 lg:p-10 shadow-elegant border border-border/60"
                noValidate
              >
                <h3 className="font-display text-2xl font-bold text-primary-deep mb-6">
                  Solicita tu cotización
                </h3>
                <div className="space-y-5">
                  <Field label="Nombre" error={errors.name}>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="input"
                      placeholder="Tu nombre completo"
                      autoComplete="name"
                    />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Teléfono" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="input"
                        placeholder="+56 9 ..."
                        autoComplete="tel"
                      />
                    </Field>
                    <Field label="Correo electrónico" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="input"
                        placeholder="tu@correo.cl"
                        autoComplete="email"
                      />
                    </Field>
                  </div>
                  <Field label="Servicio requerido" error={errors.service}>
                    <select
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="input"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Mensaje" error={errors.message}>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="input resize-none"
                      placeholder="Cuéntanos qué necesitas: cantidad de agua, ubicación, fechas, etc."
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Enviar solicitud <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar aceptas que te contactemos para responder tu cotización.
                  </p>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
    {children}
    {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    <style>{`
      .input {
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 0.75rem;
        border: 1px solid hsl(var(--input));
        background: hsl(var(--background));
        outline: none;
        transition: box-shadow .2s, border-color .2s;
      }
      .input:focus { box-shadow: 0 0 0 2px hsl(var(--primary)); border-color: hsl(var(--primary)); }
    `}</style>
  </div>
);

export default Contact;
