import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import unifiImg from "@/assets/unifi.avif";
import eifiportImg from "@/assets/eifiport.avif";
import sewanImg from "@/assets/sewan.png";
import webexImg from "@/assets/webex.jpg";
import ateraImg from "@/assets/atera.png";
import atjappliImg from "@/assets/atjappli.png";

const projectsData: Record<string, {
  title: string;
  hero: string;
  context: string;
  problem: string;
  solution: string;
  analysis: string;
  tags: string[];
  images: { src: string; alt: string; caption: string }[];
}> = {
  supervision: {
    title: "Gestion du patrimoine & Supervision",
    hero: "Supervision Wi-Fi & Analyse de spectre",
    context: "Chez ATJ Services, la supervision proactive de l'infrastructure réseau est essentielle pour garantir la qualité de service. L'outil UniFi permet d'analyser en temps réel l'environnement radio des bornes Wi-Fi.",
    problem: "Des interférences radio dégradaient les performances Wi-Fi chez plusieurs clients. Il fallait identifier les canaux saturés et optimiser le placement des bornes d'accès.",
    solution: "Utilisation de l'analyseur de spectre UniFi pour cartographier les interférences. Reconfiguration des canaux et de la puissance d'émission des bornes. Mise en place d'alertes Atera pour le monitoring continu.",
    analysis: "Cette mission m'a permis de comprendre les enjeux de la gestion du patrimoine informatique au-delà du simple inventaire matériel. L'analyse réflexive porte sur la qualité de service et l'optimisation continue de l'infrastructure sans fil.",
    tags: ["Gérer le patrimoine informatique", "Superviser l'infrastructure", "Qualité de service"],
    images: [
      { src: unifiImg, alt: "Analyseur de spectre UniFi", caption: "Analyse de l'environnement radio pour optimiser les bornes Wi-Fi et éviter les interférences." },
      { src: ateraImg, alt: "Dashboard Atera RMM", caption: "Dashboard Atera pour le monitoring continu du parc informatique." },
    ],
  },
  reseau: {
    title: "Réseau & VOIP",
    hero: "Déploiement d'infrastructure réseau & Téléphonie IP",
    context: "Les interventions terrain chez ATJ Services impliquent le déploiement physique d'équipements réseau (switchs PoE, bornes Wi-Fi) et la configuration de services téléphoniques IP via le portail Sewan.",
    problem: "Nécessité d'isoler les flux caméras des flux données sur l'infrastructure client tout en maintenant la continuité de la téléphonie IP lors des migrations.",
    solution: "Configuration de VLANs dédiés via l'interface contrôleur UniFi. Brassage physique des équipements sur switch 48 ports PoE. Configuration des renvois d'appels et de la VOIP via le portail Sewan pour assurer la continuité de service.",
    analysis: "Le déploiement d'infrastructure nécessite une vision globale : de la couche physique (câblage, brassage) à la couche applicative (VOIP, QoS). La mise à disposition d'un service utilisateur fonctionnel est l'objectif final de chaque intervention.",
    tags: ["Configurer les éléments actifs", "Mettre en service des équipements", "Continuité de service"],
    images: [
      { src: eifiportImg, alt: "Switch 48 ports PoE UniFi", caption: "Déploiement d'infrastructure : Gestion du brassage et configuration des VLANs pour isoler les flux caméras des flux données." },
      { src: sewanImg, alt: "Portail Sewan - Gestion d'appels", caption: "Configuration des renvois d'appels et de la VOIP pour assurer la continuité de service des clients." },
    ],
  },
  support: {
    title: "Support & SysAdmin",
    hero: "Administration système & Support N2",
    context: "Le support technique de niveau 2 chez ATJ Services couvre la résolution d'incidents complexes, la masterisation de postes et l'administration Active Directory. Les outils collaboratifs comme Webex facilitent le suivi des déploiements.",
    problem: "Gestion d'un volume croissant de tickets N2 nécessitant des compétences variées : problèmes DNS, configuration VPN, erreurs d'impression serveur, et coordination avec les équipes distantes.",
    solution: "Mise en place de procédures standardisées pour les incidents récurrents. Utilisation d'Atera pour le ticketing et la documentation. Scripts PowerShell pour l'automatisation des tâches répétitives. Communication via Webex pour les déploiements multi-sites.",
    analysis: "Le travail en mode projet et la communication sont aussi importants que la compétence technique pure. L'utilisation d'outils collaboratifs et la documentation rigoureuse permettent d'assurer la traçabilité et la qualité du support.",
    tags: ["Administrer les systèmes", "Gérer les incidents", "Travail en mode projet"],
    images: [
      { src: webexImg, alt: "Webex - Outil collaboratif", caption: "Utilisation d'outils collaboratifs pour le suivi des déploiements avec les équipes distantes." },
      { src: atjappliImg, alt: "ATJ Services - Tableau de bord", caption: "Tableau de bord interne ATJ Services pour la gestion des tickets et interventions." },
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[70px] section-padding container text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Projet non trouvé</h1>
          <Link to="/missions" className="text-primary mt-4 inline-block">Retour aux missions</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-[70px] section-padding bg-card">
        <div className="container">
          <Link to="/missions" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft size={16} /> Retour aux missions
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-3"
          >
            {project.hero}
          </motion.h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-badge">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl space-y-10">
          {/* Images */}
          <div className="grid gap-6">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                <p className="p-4 text-sm text-muted-foreground italic">{img.caption}</p>
              </motion.div>
            ))}
          </div>

          {[
            { title: "🎯 Contexte", content: project.context },
            { title: "⚠️ Problème rencontré", content: project.problem },
            { title: "✅ Solution mise en œuvre", content: project.solution },
            { title: "🔍 Analyse réflexive", content: project.analysis },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6"
            >
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
