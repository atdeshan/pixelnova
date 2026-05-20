import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Founders from "@/components/sections/Founders";
import Services from "@/components/sections/Services";
import Why from "@/components/sections/Why";
import FeaturedOffer from "@/components/sections/FeaturedOffer";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main id="main" className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Founders />
      <Services />
      <Why />
      <FeaturedOffer />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
