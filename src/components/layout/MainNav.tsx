
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, TreeDeciduous, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { label: "Accueil", href: "#hero" },
    { label: "Problématique", href: "#problem" },
    { label: "Nos Solutions", href: "#solutions" },
    { label: "Hackathon", href: "#hackathon" },
    { label: "Agir", href: "#action" },
    { label: "Partenaires", href: "#partners" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreeDeciduous className="h-8 w-8 text-forest-dark" />
          <span className="font-bold text-lg md:text-xl tracking-tight">
            Forest Protection
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary animated-underline font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection("#join")}>Participer</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md animate-slide-in-right">
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary py-2 px-4 text-left font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("#join")} className="mt-2">
              Participer
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
