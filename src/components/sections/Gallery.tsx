import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const images = [
  { src: g1, alt: "Entrega de agua potable a vivienda rural" },
  { src: g2, alt: "Agua fresca saliendo de manguera de camión aljibe" },
  { src: g3, alt: "Flota de camiones aljibe Transportes Dial" },
  { src: g4, alt: "Llenado de estanque en obra de construcción" },
  { src: g5, alt: "Camión aljibe en ruta cordillerana" },
  { src: g6, alt: "Operador de Transportes Dial" },
];

const Gallery = () => (
  <section id="galeria" className="py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">Galería</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-deep mt-3">
          Nuestro trabajo en terreno
        </h2>
      </div>
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5" stagger={0.1}>
        {images.map((img, i) => (
          <StaggerItem
            key={i}
            variant="maskReveal"
            className={`group relative overflow-hidden rounded-2xl shadow-card-soft ${
              i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover transition-smooth group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Gallery;
