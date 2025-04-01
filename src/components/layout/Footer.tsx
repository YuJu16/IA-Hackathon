import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TreeDeciduous, Mail, Twitter, Linkedin, Github, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreeDeciduous className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">IA For Forest</span>
            </div>
            <p className="text-gray-400 mb-4">
              L'intelligence artificielle au service de la préservation des forêts
              et de la biodiversité mondiale.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigation rapide</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#problem" className="text-gray-400 hover:text-white transition-colors">La problématique</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions IA</a></li>
              <li><a href="#hackathon" className="text-gray-400 hover:text-white transition-colors">Hackathon</a></li>
              <li><a href="#action" className="text-gray-400 hover:text-white transition-colors">Agir</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Open Data</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Restez informé</h4>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour suivre nos actualités et nos événements.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Votre email" className="bg-gray-800 border-gray-700" />
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2023 IA For Forest Hackathon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
