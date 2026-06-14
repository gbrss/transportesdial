import { Zap, BadgeCheck, MapPin, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Rapidez", text: "Respuesta inmediata y entregas en el menor tiempo posible." },
  { icon: BadgeCheck, title: "Cumplimiento", text: "Honramos cada compromiso de horarios y volúmenes." },
  { icon: MapPin, title: "Cobertura", text: "Servicio en zonas urbanas y rurales a lo largo de Chile." },
  { icon: HeartHandshake, title: "Atención personalizada", text: "Te asesoramos según las necesidades reales de tu proyecto." },
];

const Benefits = () => (
  <section id="beneficios" className="py-24 bg-gradient-deep relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent blur-3xl" />
    </div>
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">¿Por qué elegirnos?</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
          Cuatro razones que nos diferencian
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 transition-smooth hover:bg-white/10 hover:-translate-y-1"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <b.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">{b.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
