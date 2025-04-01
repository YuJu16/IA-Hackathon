
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Scan, Satellite, Shield, ArrowUpRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Analyse d'images satellites",
      description: "L'IA analyse les images satellites pour détecter les changements dans la couverture forestière en temps réel.",
      icon: Satellite,
      examples: [
        "Global Forest Watch utilise l'IA pour surveiller les forêts dans le monde entier",
        "Détection de la déforestation illégale avec 95% de précision",
        "Alertes rapides permettant d'intervenir avant des dommages irréversibles"
      ]
    },
    {
      title: "Reconnaissance des motifs",
      description: "Les algorithmes de deep learning identifient les schémas de déforestation et prédisent les zones à risque.",
      icon: Brain,
      examples: [
        "Prédiction des zones à risque avec une semaine d'avance",
        "Identification des routes forestières illégales",
        "Analyse des facteurs socio-économiques liés à la déforestation"
      ]
    },
    {
      title: "Monitoring acoustique",
      description: "Des capteurs acoustiques combinés à l'IA détectent les sons de machines et véhicules dans les zones protégées.",
      icon: Scan,
      examples: [
        "Détection des tronçonneuses à plusieurs kilomètres",
        "Distinction entre activités légales et illégales",
        "Système d'alerte précoce pour les gardes forestiers"
      ]
    },
    {
      title: "Prédiction et prévention",
      description: "L'IA analyse les données historiques pour prévoir et prévenir la déforestation future.",
      icon: Shield,
      examples: [
        "Modélisation de scénarios de déforestation",
        "Optimisation des patrouilles de protection",
        "Identification des facteurs clés de déforestation par région"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Amazon Conservation Association",
      description: "Utilisation de l'IA pour détecter l'exploitation forestière illégale en Amazonie en temps réel.",
      impact: "Réduction de 37% de la déforestation illégale dans les zones surveillées"
    },
    {
      title: "Rainforest Connection",
      description: "Téléphones recyclés transformés en capteurs acoustiques qui détectent le bruit des tronçonneuses.",
      impact: "Protection de plus de 3 000 km² de forêt tropicale"
    },
    {
      title: "Microsoft AI for Earth",
      description: "Programme qui soutient les organisations utilisant l'IA pour protéger les écosystèmes.",
      impact: "Plus de 500 projets financés dans 81 pays"
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 ai-gradient">
            L'IA comme solution à la déforestation
          </h2>
          <p className="text-lg text-muted-foreground">
            L'intelligence artificielle offre des outils puissants pour surveiller les forêts, 
            détecter la déforestation en temps réel et optimiser les efforts de conservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="h-full border-t-4 border-t-primary">
              <CardHeader>
                <div className="mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {solution.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowUpRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Cas concrets d'utilisation de l'IA</h3>
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h4 className="text-xl font-medium mb-2">{study.title}</h4>
                  <p className="text-muted-foreground">{study.description}</p>
                </div>
                <div className="md:w-1/3 bg-primary/10 p-4 rounded-lg flex items-center justify-center">
                  <p className="font-medium text-primary">{study.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
