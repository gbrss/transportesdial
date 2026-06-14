import { useState, useEffect } from "react";
import { Droplets, Menu, X } from "lucide-react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#galeria", label: "Galería" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-elegant transition-smooth group-hover:scale-110`}>
            <Droplets className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-bold text-lg ${scrolled ? "text-primary-deep" : "text-white"}`}>
              Transportes Dial
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              Agua Potable · Chile
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                scrolled
                  ? "text-foreground hover:bg-secondary hover:text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:scale-105"
        >
          Cotizar ahora
        </a>

        <button
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-primary-deep" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-card-soft">
          <nav className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary hover:text-primary font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
