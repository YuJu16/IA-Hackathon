
import { Card } from "@/components/ui/card";

export function PartnersSection() {
  const partners = [
    { name: "Université de Paris", category: "academic" },
    { name: "WWF", category: "ngo" },
    { name: "Ministère de la Transition Écologique", category: "government" },
    { name: "Greenpeace", category: "ngo" },
    { name: "ONF", category: "government" },
    { name: "France Nature Environnement", category: "ngo" },
    { name: "CIRAD", category: "research" },
    { name: "CNRS", category: "research" }
  ];

  const mediaLinks = [
    { title: "La déforestation en Amazonie atteint des records alarmants", source: "Le Monde", url: "#" },
    { title: "Les forêts primaires, un patrimoine en danger", source: "Sciences et Avenir", url: "#" },
    { title: "Mobilisation mondiale pour la protection des forêts", source: "France Inter", url: "#" },
    { title: "La biodiversité forestière menacée par la déforestation", source: "National Geographic", url: "#" }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Nos partenaires
          </h2>
          <p className="text-lg text-muted-foreground">
            Ce projet ne serait pas possible sans le soutien de nos partenaires 
            académiques, techniques et institutionnels.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className={`p-6 flex items-center justify-center h-24 ${
              partner.category === "tech" ? "bg-blue-50" : 
              partner.category === "ngo" ? "bg-green-50" : 
              partner.category === "academic" ? "bg-amber-50" : 
              partner.category === "government" ? "bg-purple-50" : "bg-gray-50"
            }`}>
              <span className="font-medium">{partner.name}</span>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Dans les médias</h3>
          <div className="space-y-4">
            {mediaLinks.map((media, index) => (
              <a 
                key={index} 
                href={media.url} 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{media.title}</span>
                  <span className="text-sm text-muted-foreground">{media.source}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
