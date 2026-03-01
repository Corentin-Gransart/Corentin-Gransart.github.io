import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, BookOpen } from "lucide-react";

const competences = [
  {
    bloc: "Bloc 1 — Support et mise à disposition de services informatiques",
    items: [
      { code: "B1.1", label: "Gérer le patrimoine informatique", missions: ["Inventaire parc via Atera", "Gestion licences M365"] },
      { code: "B1.2", label: "Répondre aux incidents et aux demandes", missions: ["Tickets N1/N2 Atera", "Support AnyDesk"] },
      { code: "B1.3", label: "Développer la présence en ligne", missions: ["Portfolio BTS SIO"] },
      { code: "B1.4", label: "Travailler en mode projet", missions: ["Déploiement NAS Synology", "Migration M365"] },
      { code: "B1.5", label: "Mettre à disposition un service informatique", missions: ["Déploiement postes clients", "Config VoIP Sewan"] },
      { code: "B1.6", label: "Organiser son développement professionnel", missions: ["Veille CERT-FR", "Autoformation IT-Connect"] },
    ],
  },
  {
    bloc: "Bloc 2 — Administration des systèmes et des réseaux (SISR)",
    items: [
      { code: "B2.1", label: "Administrer le réseau ou les systèmes", missions: ["Active Directory", "GPO", "DNS/DHCP"] },
      { code: "B2.2", label: "Superviser l'infrastructure", missions: ["Monitoring Atera & Zabbix", "Alertes CPU/RAM/Disque"] },
      { code: "B2.3", label: "Maintenir et dépanner", missions: ["MCO serveurs", "Diagnostic réseau", "Hyper Backup"] },
      { code: "B2.4", label: "Sécuriser l'infrastructure", missions: ["Segmentation VLAN", "Pare-feu basique", "Mises à jour DSM"] },
      { code: "B2.5", label: "Mettre en place et vérifier les sauvegardes", missions: ["NAS Synology RAID", "Hyper Backup", "Cloud Sync"] },
    ],
  },
];

const TableauE4 = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="pt-[70px] section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <span className="tag-badge mb-4 inline-block">Référentiel BTS SIO — SISR</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-4"
        >
          Tableau de <span className="highlight">Compétences E4</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Correspondance entre mes missions chez ATJ Services et les compétences du référentiel officiel.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-5xl space-y-12">
        {competences.map((bloc, bi) => (
          <motion.div
            key={bloc.bloc}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: bi * 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen size={20} className="text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-heading font-bold text-foreground">{bloc.bloc}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-heading font-bold text-foreground w-20">Code</th>
                    <th className="text-left py-3 px-4 font-heading font-bold text-foreground">Compétence</th>
                    <th className="text-left py-3 px-4 font-heading font-bold text-foreground">Missions associées</th>
                  </tr>
                </thead>
                <tbody>
                  {bloc.items.map((item) => (
                    <tr key={item.code} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4">
                        <span className="tag-badge text-xs">{item.code}</span>
                      </td>
                      <td className="py-3 px-4 text-foreground font-medium">{item.label}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {item.missions.map((m) => (
                            <span key={m} className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                              <CheckCircle2 size={10} className="text-primary" />
                              {m}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default TableauE4;
