import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Server, HardDrive, Monitor, Layers, Network, GitBranch, Phone,
  Globe, Satellite, Eye, Headset, Search,
  UserCheck, Lightbulb, Users, Shield, Wifi,
} from "lucide-react";

const systemCards = [
  {
    icon: Monitor,
    title: "Infrastructure Windows",
    color: "from-blue-500/20 to-blue-600/10",
    details: [
      "Préparation et déploiement de postes clients.",
      "Gestion des comptes utilisateurs sur Active Directory.",
      "Maintenance des serveurs de fichiers et droits d'accès.",
    ],
  },
  {
    icon: HardDrive,
    title: "Stockage & Sauvegarde — NAS Synology",
    color: "from-emerald-500/20 to-emerald-600/10",
    details: [
      "Configuration de serveurs NAS Synology (RAID 1, 5, 10).",
      "Gestion des partages SMB/NFS.",
      "Mise en place de stratégies de sauvegarde (Hyper Backup, Cloud Sync).",
      "Maintien en condition opérationnelle (mises à jour DSM, santé des disques).",
    ],
  },
  {
    icon: Layers,
    title: "Virtualisation & Linux",
    color: "from-orange-500/20 to-orange-600/10",
    details: [
      "Gestion de machines virtuelles sur Hyper-V.",
      "Maintenance de serveurs de monitoring.",
      "Utilisation de la CLI Linux pour le diagnostic et les logs.",
    ],
  },
];

const networkItems = [
  { icon: GitBranch, title: "Fondamentaux & Architecture", desc: "Brassage de baies réseau, installation de bornes Wi-Fi et test de connectivité." },
  { icon: Shield, title: "Routage & Sécurité", desc: "Configuration de routeurs et pare-feux basiques. Segmentation simple pour isoler les flux." },
  { icon: Phone, title: "VoIP & Téléphonie", desc: "Installation et configuration de téléphones IP pour les clients." },
  { icon: Globe, title: "Cloud & DNS", desc: "Gestion des mails et utilisateurs sur le tenant Microsoft 365 (Admin Center)." },
];

const tools = [
  { icon: Satellite, name: "Atera", desc: "Gestion centralisée du parc, déploiement d'agents et ticketing.", accent: true },
  { icon: Headset, name: "AnyDesk", desc: "Support à distance rapide et sécurisé pour les utilisateurs.", accent: false },
  { icon: Eye, name: "Zabbix", desc: "Surveillance de l'état des serveurs et des équipements réseau.", accent: true },
];

const softSkills = [
  { icon: Search, label: "Capacité d'analyse" },
  { icon: UserCheck, label: "Fiabilité & Rigueur" },
  { icon: Lightbulb, label: "Curiosité Tech" },
  { icon: Users, label: "Travail d'équipe" },
];

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

const Competences = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="pt-[70px] section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <span className="tag-badge mb-4 inline-block">BTS SIO — Option SISR</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4"
        >
          Stack <span className="highlight">Technique</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Environnements, outils et compétences mobilisés au quotidien dans mes missions terrain chez <strong className="text-foreground">ATJ Services</strong>.
        </motion.p>
      </div>
    </section>

    {/* Systems & Storage */}
    <section className="section-padding">
      <div className="container">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Server size={22} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground leading-tight">Systèmes & Stockage</h2>
            <p className="text-xs text-muted-foreground">Maintien en Condition Opérationnelle (MCO)</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {systemCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-base mb-3">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Network & Terrain */}
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Network size={22} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-secondary-foreground leading-tight">Réseaux & Services Terrain</h2>
            <p className="text-xs text-muted-foreground">Interventions physiques & logiques</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {networkItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex gap-4 items-start p-5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Tools & RMM */}
    <section className="section-padding">
      <div className="container">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Wifi size={22} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground leading-tight">Outils & Support</h2>
            <p className="text-xs text-muted-foreground">Remote Monitoring & Management (RMM)</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-5 rounded-xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${tool.accent ? 'bg-primary/15' : 'bg-muted'}`}>
                  <Icon size={20} className={tool.accent ? 'text-primary' : 'text-muted-foreground'} />
                </div>
                <h4 className="font-heading font-bold text-foreground text-sm mb-1">{tool.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Soft Skills */}
    <section className="section-padding bg-card">
      <div className="container text-center">
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">Savoir-Être</h3>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Qualités essentielles pour mes interactions clients et le travail en équipe.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {softSkills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="w-28 h-28 rounded-full border-2 border-primary/30 flex flex-col items-center justify-center gap-1 hover:border-primary/60 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300"
              >
                <Icon size={24} className="text-primary" />
                <span className="text-[10px] font-semibold text-foreground text-center leading-tight px-2">{s.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Competences;
