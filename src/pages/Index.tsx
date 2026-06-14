import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import QuoteCTA from "@/components/sections/QuoteCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Gallery />
      <Testimonials />
      <QuoteCTA />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
