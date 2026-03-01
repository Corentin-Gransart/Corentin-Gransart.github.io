import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelineModal from "@/components/TimelineModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Monitor, Network, BookCheck, Eye, Link as LinkIcon, X } from "lucide-react";

import ateraa2Img from "@/assets/ateraa2.png";
import atjappli2Img from "@/assets/atjappli2.png";
import eifiport2Img from "@/assets/eifiport2.avif";
import sewan2Img from "@/assets/sewan2.png";

const missionsData = [
  {
    title: "Supervision & Maintenance Préventive",
    image: ateraa2Img,
    alt: "Dashboard Atera RMM",
    text: "Surveillance du parc informatique via Atera RMM. Je vérifie l'état de santé des serveurs (CPU, RAM, stockage) et je gère le déploiement des mises à jour de sécurité. L'objectif est d'assurer la continuité de service en anticipant les pannes matérielles.",
    badges: ["Atera RMM", "Monitoring", "Maintenance"],
  },
  {
    title: "Support & Administration Système",
    image: atjappli2Img,
    alt: "Tableau de bord ATJ Services",
    text: "Traitement des demandes d'assistance (Tickets N2). J'interviens sur l'Active Directory pour la gestion des utilisateurs et des droits d'accès. Je dépanne également les problèmes de connectivité courants comme le VPN, les impressions ou le DNS.",
    badges: ["Active Directory", "Support N2", "Windows Server"],
  },
  {
    title: "Infrastructure & Déploiement Physique",
    image: eifiport2Img,
    alt: "Switch PoE et brassage réseau",
    text: "Installation et mise en baie d'équipements (serveurs, switchs, onduleurs) chez les clients. Je réalise le brassage réseau et effectue des tests de connectivité (Ping, Tracert) pour valider le bon fonctionnement des liens physiques et la qualité du signal.",
    badges: ["Hardware", "Brassage", "Tests de connectivité"],
  },
  {
    title: "Gestion de la Téléphonie IP",
    image: sewan2Img,
    alt: "Portail Sewan - Gestion VOIP",
    text: "Administration de la solution VOIP sur le portail Sewan. Je gère l'ajout de nouvelles lignes, la configuration des renvois d'appels et les groupements de postes pour répondre aux besoins spécifiques de chaque entreprise.",
    badges: ["VOIP", "Sewan", "SaaS"],
  },
];

type ModalId = "8h30" | "10h00" | "14h00" | "17h30" | null;

const timelineData = [
  {
    id: "8h30" as const,
    time: "08:30",
    icon: Radio,
    title: "Supervision & RMM",
    desc: "Contrôle de l'état de santé du parc via Atera. Analyse des alertes critiques.",
    link: "/projets/supervision",
    side: "left" as const,
    modalTitle: "Supervision Proactive",
    modalSubtitle: "Outil principal : Atera RMM",
    modalContent: {
      intro: "La maintenance préventive est clé pour garantir la continuité de service chez nos clients.",
      actions: [
        { bold: "Monitoring", text: "Vérification du dashboard Atera (CPU, RAM, Disque, Services arrêtés)." },
        { bold: "Patch Management", text: "Validation et déploiement des mises à jour Windows Server et Workstation." },
        { bold: "Sécurité", text: "Analyse des alertes antivirus et tentatives d'intrusion." },
      ],
      tags: ["Gérer le patrimoine informatique", "Superviser l'infrastructure", "Vérifier la conformité"],
    },
  },
  {
    id: "10h00" as const,
    time: "10:00",
    icon: Monitor,
    title: "Admin Sys & Support N2",
    desc: "Gestion Active Directory, Masterisation de postes et résolution d'incidents complexes.",
    link: "/projets/support",
    side: "right" as const,
    modalTitle: "Administration & Support",
    modalSubtitle: undefined,
    modalContent: {
      intro: "Traitement des tickets escaladés (N2) et préparation des environnements utilisateurs.",
      actions: [
        { bold: "Masterisation", text: "Déploiement d'images Windows 10/11 et configuration des drivers." },
        { bold: "Active Directory", text: "Création de comptes, gestion des GPO et droits d'accès." },
        { bold: "Support N2", text: "Résolution de pannes complexes (DNS, erreurs d'impression serveur, VPN)." },
      ],
      tags: ["Administrer les systèmes", "Gérer les incidents (Ticketing)", "Assister les utilisateurs"],
    },
  },
  {
    id: "14h00" as const,
    time: "14:00",
    icon: Network,
    title: "Interventions sur Site",
    desc: "Déploiement d'infrastructure, brassage réseau et installation autonome chez le client.",
    link: "/projets/reseau",
    side: "left" as const,
    modalTitle: "Déploiement & Réseaux",
    modalSubtitle: undefined,
    modalContent: {
      intro: "Intervention physique chez le client en autonomie ou en binôme pour l'évolution de l'infrastructure.",
      actions: [
        { bold: "Installation", text: "Mise en baie de serveurs et switchs, onduleurs." },
        { bold: "Réseau", text: "Brassage des équipements, test de connectivité, configuration de ports VLAN." },
        { bold: "Diagnostic physique", text: "Test des liaisons câblées et remplacement de composants hardware." },
      ],
      tags: ["Mettre en service des équipements", "Configurer les éléments actifs", "Maintenir la qualité de service"],
    },
  },
  {
    id: "17h30" as const,
    time: "17:30",
    icon: BookCheck,
    title: "Reporting & Documentation",
    desc: "Clôture des tickets, mise à jour de la base de connaissances et procédures.",
    link: undefined,
    side: "right" as const,
    modalTitle: "Documentation & Qualité",
    modalSubtitle: undefined,
    modalContent: {
      intro: "Assurer la traçabilité des interventions est indispensable pour le suivi client et l'équipe.",
      actions: [
        { bold: "Ticketing", text: "Documentation précise de la résolution dans Atera pour la base de connaissances." },
        { bold: "Reporting", text: "Compte-rendu d'intervention auprès du responsable technique." },
        { bold: "Veille", text: "Point rapide sur les nouvelles vulnérabilités (CERT-FR) ou technologies." },
      ],
      tags: ["Organiser son développement prof.", "Élaborer des documents techniques"],
    },
  },
];

const Missions = () => {
  const [openModal, setOpenModal] = useState<ModalId>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-[70px] section-padding bg-card">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4"
          >
            Au Cœur de <span className="highlight">l'Infrastructure</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Mon quotidien d'alternant SISR chez ATJ Services : De la supervision proactive à l'intervention terrain.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-16">
            Journée Type & <span className="highlight">Responsabilités</span>
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden" />

            <div className="space-y-12">
              {timelineData.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: item.side === "left" ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-5 z-10" />

                    {/* Card */}
                    <div
                      className={`ml-10 md:ml-0 md:w-[45%] ${item.side === "left" ? "md:pr-8" : "md:pl-8"} cursor-pointer`}
                      onClick={() => setOpenModal(item.id)}
                    >
                      <div className="glass-card p-5 hover:shadow-lg group">
                        <div className="tag-badge mb-3 text-xs">{item.time}</div>
                        <h3 className="font-heading font-bold text-foreground flex items-center gap-2 mb-2">
                          <Icon size={18} className="text-primary" /> {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                        <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          <Eye size={12} /> Détails techniques
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Missions détaillées */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
            Mes <span className="highlight">Missions</span> au quotidien
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {missionsData.map((mission, i) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <img
                  src={mission.image}
                  alt={mission.alt}
                  className="w-full h-48 object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setLightbox({ src: mission.image, alt: mission.alt })}
                />
                <div className="p-5">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{mission.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{mission.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {mission.badges.map((badge) => (
                      <span key={badge} className="tag-badge text-xs">{badge}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card text-center">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Ces missions valident mes compétences E4</h2>
          <p className="text-muted-foreground mb-6">Je mets en œuvre des solutions d'infrastructure, systèmes et réseaux au quotidien.</p>
          <a href="/competences" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
            Voir le tableau de compétences
          </a>
        </div>
      </section>

      {/* Modals */}
      {timelineData.map((item) => (
        <TimelineModal
          key={item.id}
          isOpen={openModal === item.id}
          onClose={() => setOpenModal(null)}
          title={item.modalTitle}
          subtitle={item.modalSubtitle}
        >
          <p>{item.modalContent.intro}</p>
          <h4 className="font-semibold text-foreground mt-4">Actions techniques :</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {item.modalContent.actions.map((a) => (
              <li key={a.bold}>
                <strong className="text-foreground">{a.bold} :</strong> {a.text}
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 rounded-lg bg-muted border border-border">
            <h4 className="font-semibold text-foreground text-xs mb-2">Compétences BTS SIO (SISR) :</h4>
            <div className="flex flex-wrap gap-2">
              {item.modalContent.tags.map((t) => (
                <span key={t} className="tag-badge text-[10px]">{t}</span>
              ))}
            </div>
          </div>
        </TimelineModal>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 md:right-0 text-white/80 hover:text-white transition-colors z-10"
              >
                <X size={28} />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Missions;
