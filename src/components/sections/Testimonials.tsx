import { Star, Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "María González",
    role: "Administradora de Condominio, Colina",
    text: "Llevamos años trabajando con Transportes Dial. Siempre puntuales y con la mejor disposición. El abastecimiento nunca nos ha fallado.",
  },
  {
    name: "Roberto Silva",
    role: "Jefe de Obra, Constructora Andes",
    text: "Necesitábamos camiones aljibe para una faena exigente y respondieron al instante. Servicio profesional y precios competitivos.",
  },
  {
    name: "Carla Muñoz",
    role: "Parcela en Curacaví",
    text: "Vivo en un sector sin red de agua y ellos son mi solución desde hace 3 años. Atención cercana y agua de excelente calidad.",
  },
];

const Testimonials = () => (
  <section id="testimonios" className="py-24 bg-gradient-soft">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonios</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3">
          Clientes que confían en nosotros
        </h2>
      </div>
      <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.15}>
        {testimonials.map((t, i) => (
          <StaggerItem key={i} variant={i % 2 === 0 ? "slideLeft" : "slideRight"}>
            <article className="relative bg-card rounded-2xl p-8 shadow-card-soft border border-border/50 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary-deep">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Testimonials;
