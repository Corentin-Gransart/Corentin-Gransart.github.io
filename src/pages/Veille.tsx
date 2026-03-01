import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Rss, ExternalLink, Shield, Server, Cloud, Bug, Calendar } from "lucide-react";

const veilleSources = [
  { name: "CERT-FR (ANSSI)", url: "https://www.cert.ssi.gouv.fr/", desc: "Alertes et avis de sécurité officiels du gouvernement français." },
  { name: "Le Monde Informatique", url: "https://www.lemondeinformatique.fr/", desc: "Actualités IT, réseaux et cybersécurité." },
  { name: "IT-Connect", url: "https://www.it-connect.fr/", desc: "Tutoriels et articles sur l'administration système et réseau." },
  { name: "Cisco Networking Academy", url: "https://www.netacad.com/", desc: "Ressources pédagogiques sur les fondamentaux réseau." },
];

const articles = [
  {
    icon: Shield,
    date: "Février 2026",
    title: "Explosion des ransomwares ciblant les PME françaises",
    summary: "Le CERT-FR alerte sur une recrudescence des attaques par rançongiciel visant les TPE/PME. Les vecteurs principaux restent le phishing et les accès RDP exposés. L'ANSSI recommande la segmentation réseau, les sauvegardes hors-ligne et l'authentification multifacteur (MFA).",
    tags: ["Cybersécurité", "Ransomware", "PME"],
    impact: "Chez ATJ Services, cela m'a conduit à vérifier systématiquement les politiques de sauvegarde NAS (Hyper Backup) et à sensibiliser les clients sur le phishing.",
  },
  {
    icon: Cloud,
    date: "Janvier 2026",
    title: "Microsoft 365 Copilot : l'IA dans l'administration IT",
    summary: "Microsoft intègre Copilot dans l'Admin Center de Microsoft 365, permettant d'automatiser la gestion des licences, la détection d'anomalies de connexion et la création de rapports de conformité.",
    tags: ["Cloud", "Microsoft 365", "IA"],
    impact: "Cette évolution impacte directement ma mission de gestion du tenant M365, en me permettant d'automatiser certaines tâches de reporting.",
  },
  {
    icon: Server,
    date: "Décembre 2025",
    title: "Windows Server 2025 : les nouveautés pour l'infra",
    summary: "Lancement de Windows Server 2025 avec des améliorations sur Hyper-V (live migration accélérée), Active Directory (politiques de mot de passe granulaires) et le support natif de SMB over QUIC pour les accès distants sécurisés.",
    tags: ["Windows Server", "Hyper-V", "Active Directory"],
    impact: "Ces fonctionnalités s'inscrivent dans la continuité de mes compétences en virtualisation et administration AD chez ATJ Services.",
  },
  {
    icon: Bug,
    date: "Novembre 2025",
    title: "Vulnérabilité critique dans les NAS Synology (CVE-2025-XXXX)",
    summary: "Une faille critique a été découverte dans le service SMB de DSM 7.x, permettant une exécution de code à distance. Synology a publié un correctif en urgence. Les administrateurs sont invités à mettre à jour immédiatement.",
    tags: ["NAS", "Synology", "Sécurité"],
    impact: "J'ai immédiatement procédé à la vérification et mise à jour des NAS Synology du parc client, conformément à ma mission de MCO.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Veille = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="pt-[70px] section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <span className="tag-badge mb-4 inline-block">Épreuve E5 — Culture numérique</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4"
        >
          Veille <span className="highlight">Technologique</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Suivi continu des évolutions en cybersécurité, infrastructure et cloud pour rester compétitif sur le terrain.
        </motion.p>
      </div>
    </section>

    {/* Méthode */}
    <section className="section-padding bg-card">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
          Ma Méthode de <span className="highlight">Veille</span>
        </h2>
        <div className="glass-card p-6 md:p-8">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Ma veille s'articule autour de <strong className="text-foreground">trois axes</strong> : la cybersécurité (alertes CERT-FR, vulnérabilités), l'évolution des infrastructures (Windows Server, virtualisation) et les outils cloud (Microsoft 365, NAS).
            </p>
            <p>
              J'utilise un système de <strong className="text-foreground">flux RSS</strong> (Feedly) couplé à des alertes Google et au suivi des bulletins ANSSI. Chaque article pertinent est archivé et mis en lien avec mes missions chez ATJ Services.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-sm font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <Rss size={16} className="text-primary" /> Mes Sources Principales
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {veilleSources.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <ExternalLink size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{source.name}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{source.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Articles */}
    <section className="section-padding">
      <div className="container">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-10 text-center">
          Articles <span className="highlight">Sélectionnés</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((article, i) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={article.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{article.summary}</p>

                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 mb-3">
                      <p className="text-sm text-foreground">
                        <strong className="text-primary">↳ Impact sur mes missions :</strong> {article.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="tag-badge text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Veille;
