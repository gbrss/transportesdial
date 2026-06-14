import heroTruck from "@/assets/hero-truck.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56952076192?text=Hola%20Transportes%20Dial%2C%20necesito%20una%20cotizaci%C3%B3n";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroTruck}
        alt="Camión aljibe de Transportes Dial en cordillera chilena"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>

    <div className="container relative z-10 py-32">
      <div className="max-w-3xl animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20 mb-6">
          <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
          Servicio disponible en todo Chile
        </span>

        <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
          Agua potable donde
          <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
            la necesites, cuando la necesites.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
          Arriendo de camiones aljibe y abastecimiento de agua potable con cobertura nacional, rapidez de respuesta y atención personalizada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-semibold text-whatsapp-foreground shadow-float transition-smooth hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            Cotizar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-7 py-4 text-base font-semibold text-white transition-smooth hover:bg-white/20"
          >
            Ver servicios
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
          {[
            { n: "+10", l: "Años de experiencia" },
            { n: "24/7", l: "Disponibilidad" },
            { n: "100%", l: "Cobertura nacional" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">{s.n}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
