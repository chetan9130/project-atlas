import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  useLocomotiveScroll();

  return (
    <>
      <ScrollProgress />
      <div data-scroll-container>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
