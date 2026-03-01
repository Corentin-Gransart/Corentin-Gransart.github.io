import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkMesh from "@/components/NetworkMesh";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Network, Shield, Server, Eye, ArrowRight } from "lucide-react";
import moiImg from "@/assets/moi.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[70px]">
        <NetworkMesh />
        <div className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} custom={0} className="tag-badge mb-5">
              BTS SIO • Option SISR • Lycée Henri Wallon
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-heading font-extrabold text-foreground mb-5 leading-tight">
              Corentin Gransart<br />
              <span className="gradient-text">Systèmes & Réseaux</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-8 max-w-xl">
              En alternance chez <strong className="text-foreground">ATJ Services</strong>. Je transforme mes acquis théoriques en expertise terrain : déploiement d'infrastructures, supervision RMM et support utilisateur.
              
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                to="/missions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:translate-y-[-2px] transition-transform"
              >
                <Network size={18} /> Consulter mon Dossier E5
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Mon Profil
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              De la technique à <span className="highlight">la stratégie</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Actuellement en deuxième année de BTS SIO au lycée Henri Wallon (Valenciennes), je construis mon expertise au sein d'ATJ Services.
            </p>
            <p className="text-muted-foreground mb-4">
              Mon rôle dépasse la simple maintenance. J'interviens sur la <strong className="text-foreground">masterisation de postes</strong>, la gestion des tickets incidents <strong className="text-foreground">N1 / N2</strong> via la solution <strong className="text-foreground">Atera</strong>, et le maintien en condition opérationnelle d'infrastructures Windows Server et Linux.
            </p>
            <p className="text-muted-foreground mb-8">
              Animé par une curiosité technologique et une grande autonomie, mon ambition est de piloter des projets d'envergure en <strong className="text-foreground">cybersécurité et infrastructure</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "RMM", label: "Gestion Atera & Zabbix" },
                { value: "2+", label: "Années d'expérience" },
                { value: "SISR", label: "Infra & Virtualisation" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <span className="block text-xl font-heading font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <img src={moiImg} alt="Corentin Gransart" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-3 flex items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
                <Shield size={20} className="text-primary" />
                <span className="text-xs font-semibold text-foreground">Sécurité & Réseaux</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Teaser */}
      <section className="section-padding bg-card">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-foreground mb-3"
          >
            Mon Arsenal <span className="highlight">Technique</span>
          </motion.h2>
          <p className="text-muted-foreground mb-10">Les outils que je maîtrise au quotidien chez ATJ Services.</p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Server, label: "Windows Server" },
              { icon: Server, label: "Linux" },
              { icon: Server, label: "Hyper-V" },
              { icon: Network, label: "Réseau" },
              { icon: Eye, label: "Supervision" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass-card p-5 flex flex-col items-center gap-2 w-28">
                <Icon size={28} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          <Link to="/competences" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Voir le détail des compétences <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
