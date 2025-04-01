
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Heart } from "lucide-react";

export function ActionSection() {
  const actions = [
    {
      title: "Réduire sa consommation de papier",
      description: "Privilégiez le numérique, imprimez en recto-verso et recyclez votre papier.",
      impact: "Moyen",
      difficulty: "Facile"
    },
    {
      title: "Éviter les produits contenant de l'huile de palme",
      description: "Lisez les étiquettes et choisissez des alternatives sans huile de palme.",
      impact: "Fort",
      difficulty: "Moyen"
    },
    {
      title: "Acheter du bois certifié FSC",
      description: "Pour vos meubles et objets en bois, vérifiez la présence du label FSC.",
      impact: "Fort",
      difficulty: "Facile"
    },
    {
      title: "Réduire sa consommation de viande",
      description: "L'élevage est responsable de 80% de la déforestation en Amazonie.",
      impact: "Fort",
      difficulty: "Moyen"
    },
    {
      title: "Soutenir les associations de protection des forêts",
      description: "Faites un don ou devenez bénévole pour des organisations dédiées.",
      impact: "Fort",
      difficulty: "Facile"
    },
    {
      title: "Sensibiliser son entourage",
      description: "Partagez vos connaissances et encouragez des pratiques responsables.",
      impact: "Moyen",
      difficulty: "Facile"
    }
  ];

  const organizations = [
    {
      name: "Rainforest Alliance",
      description: "Travaille avec les agriculteurs, les forestiers et les entreprises pour une gestion durable des forêts.",
      website: "https://www.rainforest-alliance.org"
    },
    {
      name: "World Wildlife Fund (WWF)",
      description: "Œuvre pour la conservation des forêts et la lutte contre la déforestation mondiale.",
      website: "https://www.worldwildlife.org"
    },
    {
      name: "Greenpeace",
      description: "Campagnes actives contre la déforestation et pour la protection des forêts primaires.",
      website: "https://www.greenpeace.org"
    }
  ];

  return (
    <section id="action" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Agir au quotidien
          </h2>
          <p className="text-lg text-muted-foreground">
            Chacun peut contribuer à la lutte contre la déforestation par des gestes simples. 
            Découvrez comment faire la différence à votre échelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {actions.map((action, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className={`font-medium ${action.impact === "Fort" ? "text-green-600" : "text-amber-600"}`}>
                      {action.impact}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulté</p>
                    <p className={`font-medium ${action.difficulty === "Facile" ? "text-green-600" : "text-amber-600"}`}>
                      {action.difficulty}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Associations et initiatives à soutenir</h3>
          <div className="space-y-6">
            {organizations.map((org, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:w-3/4">
                    <CardTitle className="text-xl mb-2">{org.name}</CardTitle>
                    <CardDescription className="text-base">{org.description}</CardDescription>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <a href={org.website} target="_blank" rel="noopener noreferrer">
                        Visiter le site <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="bg-primary p-6 md:w-1/4 flex items-center justify-center">
                    <Button variant="secondary" asChild>
                      <a href={org.website + "/donate"} target="_blank" rel="noopener noreferrer">
                        <Heart className="mr-2 h-4 w-4" /> Faire un don
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Chaque geste compte</h3>
          <p className="text-muted-foreground mb-6">
            N'oubliez pas que la lutte contre la déforestation est un effort collectif. 
            Même les plus petites actions, lorsqu'elles sont multipliées par des millions 
            de personnes, peuvent avoir un impact significatif.
          </p>
          <Button>
            Partager sur les réseaux sociaux
          </Button>
        </div>
      </div>
    </section>
  );
}
