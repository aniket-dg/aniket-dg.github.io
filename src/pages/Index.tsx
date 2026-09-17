
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProfessionalHighlights from "@/components/ProfessionalHighlights";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import InteractiveBackendShowcase from "@/components/InteractiveBackendShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveBackendShowcase />
      <About />
      <Experience />
      <ProfessionalHighlights />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
