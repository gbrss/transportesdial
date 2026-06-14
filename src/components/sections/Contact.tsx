import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WHATSAPP = "https://wa.me/56952076192";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}. Tel: ${form.phone}. ${form.message}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "¡Gracias!", description: "Te estamos redirigiendo a WhatsApp para completar el contacto." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3 mb-6">
              Hablemos de tu próximo servicio
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Cuéntanos qué necesitas y te enviaremos una cotización rápida y sin compromiso.
            </p>

            <div className="space-y-5">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border hover:shadow-elegant transition-smooth group">
                <div className="h-12 w-12 rounded-xl bg-whatsapp flex items-center justify-center shadow-float">
                  <MessageCircle className="h-6 w-6 text-whatsapp-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-primary-deep group-hover:text-primary transition-smooth">+56 9 5207 6192</div>
                </div>
              </a>
              <a href="tel:+56952076192" className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border hover:shadow-elegant transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Teléfono</div>
                  <div className="font-semibold text-primary-deep">+56 9 5207 6192</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-soft border border-border">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Cobertura</div>
                  <div className="font-semibold text-primary-deep">Todo Chile</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-card rounded-3xl p-8 lg:p-10 shadow-elegant border border-border/60"
          >
            <h3 className="font-display text-2xl font-bold text-primary-deep mb-6">Envíanos un mensaje</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="+56 9 ..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                  placeholder="Cuéntanos qué servicio necesitas..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
              >
                Enviar mensaje <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
