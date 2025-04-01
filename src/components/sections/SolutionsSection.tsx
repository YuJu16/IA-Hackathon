
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Scan, Satellite, Shield, ArrowUpRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Patrouilles communautaires",
      description: "Mobilisation des communautés locales pour la surveillance et la protection active de leurs forêts.",
      icon: Shield,
      examples: [
        "Formation des gardiens forestiers locaux",
        "Création de réseaux de surveillance communautaire",
        "Mise en place de systèmes d'alerte locaux"
      ]
    },
    {
      title: "Restauration forestière",
      description: "Programmes de reboisement et de restauration des écosystèmes forestiers avec les communautés locales.",
      icon: Satellite,
      examples: [
        "Pépinières communautaires d'arbres natifs",
        "Techniques de régénération naturelle assistée",
        "Corridors écologiques pour la biodiversité"
      ]
    },
    {
      title: "Gestion durable",
      description: "Mise en place de pratiques d'exploitation forestière durables et respectueuses de l'environnement.",
      icon: Brain,
      examples: [
        "Formation aux techniques d'agroforesterie",
        "Certification forestière communautaire",
        "Développement de produits forestiers non ligneux"
      ]
    },
    {
      title: "Éducation environnementale",
      description: "Sensibilisation et formation des communautés locales à la protection des forêts.",
      icon: Scan,
      examples: [
        "Programmes éducatifs dans les écoles",
        "Ateliers de sensibilisation communautaire",
        "Partage des connaissances traditionnelles"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Gardiens de la Forêt - Brésil",
      description: "Programme de formation des communautés autochtones pour la protection et la surveillance de leur territoire forestier.",
      impact: "Protection de plus de 5 000 km² de forêt amazonienne"
    },
    {
      title: "Initiative Maya - Guatemala",
      description: "Projet de gestion forestière communautaire combinant savoirs traditionnels et pratiques durables.",
      impact: "Restauration de 2 500 hectares de forêt et création de 200 emplois locaux"
    },
    {
      title: "Green Belt Movement - Kenya",
      description: "Mouvement de femmes pour la reforestation et l'autonomisation des communautés rurales.",
      impact: "Plus de 51 millions d'arbres plantés et 30 000 femmes formées"
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 forest-gradient">
            Solutions communautaires pour la protection des forêts
          </h2>
          <p className="text-lg text-muted-foreground">
            L'engagement des communautés locales et les savoirs traditionnels sont essentiels pour protéger 
            durablement nos forêts et assurer leur préservation pour les générations futures.
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
          <h3 className="text-2xl font-semibold mb-6 text-center">Cas concrets de protection des forêts</h3>
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
