
import { Card } from "@/components/ui/card";

export function PartnersSection() {
  const partners = [
    { name: "Université de Paris", category: "academic" },
    { name: "Microsoft AI for Earth", category: "tech" },
    { name: "WWF", category: "ngo" },
    { name: "Ministère de la Transition Écologique", category: "government" },
    { name: "Google.org", category: "tech" },
    { name: "Greenpeace", category: "ngo" },
    { name: "École Polytechnique", category: "academic" },
    { name: "INRIA", category: "research" }
  ];

  const mediaLinks = [
    { title: "L'IA au secours des forêts amazoniennes", source: "Le Monde", url: "#" },
    { title: "Comment l'intelligence artificielle révolutionne la protection de l'environnement", source: "Sciences et Avenir", url: "#" },
    { title: "Hackathon IA For Good : 48h pour sauver les forêts", source: "France Inter", url: "#" },
    { title: "Les nouvelles technologies au service de la biodiversité", source: "National Geographic", url: "#" }
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
