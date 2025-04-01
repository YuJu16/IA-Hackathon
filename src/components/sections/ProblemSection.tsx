
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, TreeDeciduous, CloudOff, Droplets } from "lucide-react";

export function ProblemSection() {
  const stats = [
    { 
      label: "Hectares de forêt perdus chaque année", 
      value: 4.7, 
      unit: "millions", 
      icon: TreeDeciduous,
      color: "text-red-600" 
    },
    { 
      label: "Espèces menacées en raison de la déforestation", 
      value: 80, 
      unit: "%", 
      icon: AlertTriangle,
      color: "text-amber-600"
    },
    { 
      label: "Émissions de CO2 provenant de la déforestation", 
      value: 15, 
      unit: "%", 
      icon: CloudOff,
      color: "text-blue-600"
    },
    { 
      label: "Perte d'eau douce due à la déforestation", 
      value: 30, 
      unit: "%", 
      icon: Droplets,
      color: "text-cyan-600"
    }
  ];

  const impacts = [
    {
      id: "biodiversity",
      label: "Biodiversité",
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-medium">Perte de biodiversité alarmante</h4>
          <p>
            La déforestation est l'une des principales causes d'extinction d'espèces. 
            Les forêts tropicales abritent plus de 50% des espèces terrestres sur seulement 
            7% de la surface terrestre. Chaque année, des milliers d'espèces disparaissent 
            avant même d'avoir été découvertes.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>80% des amphibiens, 75% des oiseaux et 68% des mammifères menacés d'extinction vivent dans les forêts.</li>
            <li>Un seul hectare de forêt tropicale peut contenir jusqu'à 300 espèces d'arbres différentes.</li>
            <li>La destruction des habitats naturels est responsable de 85% des espèces menacées ou en danger.</li>
          </ul>
        </div>
      )
    },
    {
      id: "climate",
      label: "Climat",
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-medium">Impact climatique dévastateur</h4>
          <p>
            Les forêts sont des puits de carbone naturels qui absorbent environ 2,6 milliards de tonnes 
            de CO2 par an. La déforestation libère ce carbone dans l'atmosphère et réduit la capacité 
            de la Terre à absorber les émissions futures.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La déforestation est responsable d'environ 15% des émissions mondiales de gaz à effet de serre.</li>
            <li>Les forêts tropicales humides stockent 460 tonnes de carbone par hectare en moyenne.</li>
            <li>La déforestation modifie les régimes de précipitations locaux et régionaux, augmentant le risque de sécheresses.</li>
          </ul>
        </div>
      )
    },
    {
      id: "communities",
      label: "Communautés",
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-medium">Impact sur les communautés locales</h4>
          <p>
            Plus de 1,6 milliard de personnes dépendent directement des forêts pour leur subsistance. 
            La déforestation menace les populations autochtones et rurales qui vivent dans ou à proximité 
            des forêts depuis des générations.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>70% des personnes vivant dans l'extrême pauvreté dépendent des ressources naturelles pour leur survie.</li>
            <li>Les communautés autochtones protègent 80% de la biodiversité mondiale sur leurs territoires.</li>
            <li>La disparition des forêts provoque des déplacements forcés, des conflits pour les ressources et la perte des savoirs traditionnels.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="problem" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 forest-gradient">
            Pourquoi la déforestation est un problème majeur
          </h2>
          <p className="text-lg text-muted-foreground">
            Chaque minute, nous perdons l'équivalent de 27 terrains de football en surface forestière. 
            Découvrez les chiffres et les impacts de cette crise environnementale globale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden animate-grow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-bold">{stat.value}{stat.unit}</h3>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <Progress value={75} className="mt-4 h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="biodiversity" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            {impacts.map((impact) => (
              <TabsTrigger key={impact.id} value={impact.id}>
                {impact.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {impacts.map((impact) => (
            <TabsContent key={impact.id} value={impact.id} className="mt-6 p-6 bg-white rounded-lg shadow-sm">
              {impact.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
