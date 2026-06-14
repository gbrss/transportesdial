import { Truck, Droplets, ArrowRight, Check } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const WA = (msg: string) => `https://wa.me/56952076192?text=${encodeURIComponent(msg)}`;

const services = [
  {
    icon: Truck,
    title: "Arriendo de Camiones Aljibe",
    desc: "Flota disponible para faenas, obras, mineras, eventos y emergencias. Distintas capacidades según tu necesidad.",
    features: ["Diversas capacidades", "Operadores capacitados", "Contratos flexibles", "Cobertura nacional"],
    cta: "Hola, necesito arrendar un camión aljibe",
  },
  {
    icon: Droplets,
    title: "Abastecimiento de Agua Potable",
    desc: "Entrega de agua potable certificada a hogares, condominios, empresas, colegios y zonas rurales sin acceso a red.",
    features: ["Agua certificada", "Entrega programada", "Estanques de cualquier tamaño", "Servicio de emergencia"],
    cta: "Hola, necesito abastecimiento de agua potable",
  },
];

const Services = () => (
  <section id="servicios" className="py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Servicios</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3 mb-4">
          Soluciones a medida en agua potable
        </h2>
        <p className="text-lg text-muted-foreground">
          Dos servicios principales pensados para cubrir cada necesidad, desde un hogar hasta una gran faena industrial.
        </p>
      </div>

      <StaggerContainer className="grid md:grid-cols-2 gap-8" stagger={0.18}>
        {services.map((s) => (
          <StaggerItem key={s.title} variant="scaleUp">
            <article className="group relative bg-card rounded-3xl p-8 lg:p-10 border border-border/60 shadow-card-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-smooth" />
              <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-elegant">
                  <s.icon className="h-8 w-8 text-primary-foreground" strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-deep mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
                        <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA(s.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Solicitar cotización <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Services;
