
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
          <div className="h-full w-full bg-green-gradient opacity-90"></div>
        </div>
      </div>
      
      {/* Floating leaves animation */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Leaf 
          key={i}
          className="absolute text-white opacity-30 animate-leaf-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 15}s`
          }}
          size={20 + Math.random() * 30}
        />
      ))}
      
      <div className="container relative z-10 py-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-6 animate-fade-in">
            L'IA au service des forêts : <br />
            <span className="text-white/90">Agissons ensemble!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Une nouvelle technologie pour un ancien problème. Découvrez comment l'intelligence artificielle 
            révolutionne la lutte contre la déforestation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button onClick={() => scrollToSection("#join")} size="lg" className="bg-white text-forest-dark hover:bg-white/90">
              Participer au hackathon <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => scrollToSection("#problem")} variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
