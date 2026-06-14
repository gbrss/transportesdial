import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-transportes-dial.png.asset.json";
import { ScrollReveal } from "@/components/ScrollReveal";

const Footer = () => (
  <footer className="bg-primary-deep text-white">
    <ScrollReveal variant="fadeBlur">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo.url} alt="Logo Transportes Dial" className="h-12 w-12 rounded-full object-cover shadow-glow" />
            <div>
              <div className="font-display font-bold text-lg">Transportes Dial</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Agua Potable · Chile</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Arriendo de camiones aljibe y abastecimiento de agua potable con cobertura nacional.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-white">Navegación</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#nosotros" className="hover:text-primary-glow transition-smooth">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-primary-glow transition-smooth">Servicios</a></li>
            <li><a href="#beneficios" className="hover:text-primary-glow transition-smooth">Beneficios</a></li>
            <li><a href="#galeria" className="hover:text-primary-glow transition-smooth">Galería</a></li>
            <li><a href="#contacto" className="hover:text-primary-glow transition-smooth">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-white">Síguenos</h4>
          <div className="flex gap-3 mb-4">
            <a
              href="https://wa.me/56952076192"
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-whatsapp flex items-center justify-center transition-smooth"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/transportesdial.cl"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/transportesdial.cl"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-white/70">+56 9 5207 6192</p>
          <p className="text-sm text-white/70">@transportesdial.cl</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Transportes Dial. Todos los derechos reservados.</p>
        <p>Servicio de agua potable y camiones aljibe en Chile.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
