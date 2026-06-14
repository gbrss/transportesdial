import { Clock, ClipboardCheck, Truck, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Cuéntanos tu necesidad",
    desc: "Completa el formulario o escríbenos por WhatsApp con los detalles del servicio.",
  },
  {
    icon: Clock,
    title: "Recibe tu cotización",
    desc: "Te respondemos en minutos con un precio claro y sin compromiso.",
  },
  {
    icon: Truck,
    title: "Coordinamos el despacho",
    desc: "Agendamos fecha, hora y lugar para entregarte el agua o el camión.",
  },
];

const QuoteCTA = () => (
  <section className="py-20 bg-gradient-soft border-y border-border/60">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Cotización rápida
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3 mb-4">
          Solicita una cotización en minutos
        </h2>
        <p className="text-lg text-muted-foreground">
          Sin trámites largos ni esperas: te entregamos una propuesta a la medida de tu proyecto u obra.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="relative bg-card rounded-2xl p-6 shadow-elegant border border-border/60 hover:shadow-float transition-smooth"
          >
            <div className="absolute -top-4 left-6 h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground font-bold flex items-center justify-center shadow-elegant">
              {i + 1}
            </div>
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary-deep mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
        >
          Solicitar cotización ahora
        </a>
        <a
          href="https://wa.me/56952076192"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-8 py-4 font-semibold text-whatsapp-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
        >
          <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default QuoteCTA;
