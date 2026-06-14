import { Droplets, ShieldCheck, Truck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const About = () => (
  <section id="nosotros" className="py-24 bg-gradient-soft">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal variant="slideLeft">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Sobre Nosotros</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3 mb-6 leading-tight">
              Especialistas en transporte y abastecimiento de agua potable
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En <strong className="text-foreground">Transportes Dial</strong> llevamos más de una década entregando soluciones confiables de agua potable a hogares, empresas, faenas y proyectos en todo Chile. Operamos con una flota moderna de camiones aljibe certificados y personal altamente capacitado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos comprometemos con cada cliente: tiempos de entrega cumplidos, agua de calidad garantizada y atención cercana en cada servicio.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.12}>
          {[
            { icon: Droplets, title: "Agua certificada", text: "Calidad garantizada según normativa chilena vigente." },
            { icon: Truck, title: "Flota moderna", text: "Camiones aljibe de distintas capacidades y autonomía." },
            { icon: ShieldCheck, title: "Servicio seguro", text: "Personal calificado y protocolos estrictos." },
            { icon: Droplets, title: "Atención 24/7", text: "Respondemos emergencias en horarios extendidos." },
          ].map((f, i) => (
            <StaggerItem key={i} variant="scaleUp">
              <div className="bg-card rounded-2xl p-6 shadow-card-soft border border-border/50 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-elegant">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary-deep mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default About;
