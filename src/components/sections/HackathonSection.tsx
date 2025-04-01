
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, MapPin, Calendar, Users, ArrowRight } from "lucide-react";

export function HackathonSection() {
  const challenges = [
    {
      title: "Détection des coupes illégales",
      description: "Développer un algorithme capable de détecter les coupes illégales à partir d'images satellites et d'alerter les autorités en temps réel.",
      skills: ["Computer Vision", "Deep Learning", "Traitement d'images"],
      icon: Code
    },
    {
      title: "Prévision des zones à risque",
      description: "Créer un modèle prédictif qui identifie les zones forestières les plus susceptibles d'être déboisées dans les prochains mois.",
      skills: ["Machine Learning", "Analyse spatiale", "Modélisation prédictive"],
      icon: Code
    },
    {
      title: "Dashboard de monitoring",
      description: "Concevoir une interface utilisateur intuitive permettant aux décideurs de visualiser facilement l'état des forêts et les alertes.",
      skills: ["Frontend", "Data Visualization", "UX Design"],
      icon: Code
    }
  ];

  const faqs = [
    {
      question: "Qui peut participer au hackathon ?",
      answer: "Le hackathon est ouvert à tous : développeurs, data scientists, designers, experts en environnement, étudiants... Aucune expérience préalable en IA n'est nécessaire, des mentors seront présents pour vous accompagner."
    },
    {
      question: "Faut-il venir avec une équipe déjà formée ?",
      answer: "Vous pouvez venir seul ou en équipe. Un temps sera prévu au début de l'événement pour former des équipes équilibrées en compétences."
    },
    {
      question: "Quels sont les critères d'évaluation des projets ?",
      answer: "Les projets seront évalués sur leur impact potentiel, leur faisabilité technique, leur originalité et la qualité de la présentation."
    },
    {
      question: "Y a-t-il des prix à gagner ?",
      answer: "Oui ! Le premier prix est une bourse de 10 000€ pour développer votre projet, ainsi que du mentorat de la part d'experts. D'autres prix seront également décernés par nos partenaires."
    },
    {
      question: "Comment se déroule le hackathon ?",
      answer: "Le hackathon se déroule sur 48 heures, du vendredi soir au dimanche soir. Les équipes travaillent sur leur projet avec l'aide de mentors, puis présentent leur solution devant un jury de professionnels."
    }
  ];

  return (
    <section id="hackathon" className="py-20 bg-forest-pattern">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Hackathon IA For Good : Rejoignez le mouvement !
          </h2>
          <p className="text-lg text-muted-foreground">
            Mettez vos compétences au service de la planète lors de notre hackathon dédié 
            à la lutte contre la déforestation grâce à l'IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/95">
            <CardHeader>
              <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Quand ?</CardTitle>
              <CardDescription>Date et durée de l'événement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">15-17 Novembre 2023</p>
              <p className="text-muted-foreground mt-1">48h d'innovation pour la planète</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95">
            <CardHeader>
              <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Où ?</CardTitle>
              <CardDescription>Lieu de l'événement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Campus IA For Good</p>
              <p className="text-muted-foreground mt-1">42 rue de l'Innovation, Paris</p>
              <p className="text-muted-foreground">Accessible à distance également</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95">
            <CardHeader>
              <div className="mb-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Qui ?</CardTitle>
              <CardDescription>Profils recherchés</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">Développeurs</Badge>
                  <Badge variant="outline" className="mr-2">Data Scientists</Badge>
                </li>
                <li className="flex items-center mt-2">
                  <Badge variant="outline" className="mr-2">Designers</Badge>
                  <Badge variant="outline" className="mr-2">Écologistes</Badge>
                </li>
                <li className="flex items-center mt-2">
                  <Badge variant="outline" className="mr-2">Étudiants</Badge>
                  <Badge variant="outline">Passionnés</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Les défis à relever</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="h-full bg-white/95">
                <CardHeader>
                  <challenge.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {challenge.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Foire aux questions</h3>
          <Accordion type="single" collapsible className="bg-white/95 rounded-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div id="join" className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Prêt à relever le défi ?</h3>
          <p className="text-muted-foreground mb-6">
            Inscrivez-vous dès maintenant au hackathon et contribuez à la création 
            de solutions innovantes contre la déforestation.
          </p>
          <Button size="lg" className="animate-pulse">
            S'inscrire au hackathon <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
