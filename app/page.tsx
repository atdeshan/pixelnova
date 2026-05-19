import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main id="main" className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
