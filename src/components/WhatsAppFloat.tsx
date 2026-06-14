import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56952076192?text=Hola%20Transportes%20Dial%2C%20necesito%20informaci%C3%B3n%20sobre%20sus%20servicios";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-float transition-smooth hover:scale-105 hover:shadow-glow animate-float"
  >
    <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
    <span className="hidden sm:inline font-semibold">WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
