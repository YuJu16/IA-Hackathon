
import { MainNav } from "@/components/layout/MainNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { HackathonSection } from "@/components/sections/HackathonSection";
import { ActionSection } from "@/components/sections/ActionSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";

const Index = () => {
  // Gestion du scroll pour le déplacement vers les sections
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }
    };

    // Vérifie si un hash est présent lors du chargement initial
    handleHashChange();

    // Écoute les changements de hash
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <MainNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <VideoSection />
        <SolutionsSection />
        <HackathonSection />
        <ActionSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
