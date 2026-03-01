import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-[70px] section-padding">
        <div className="container max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-foreground mb-2 text-center"
          >
            Échangeons sur <span className="highlight">l'Avenir</span>
          </motion.h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto text-center mb-12">
            Disponible pour une alternance • Secteur Arras / Cambrai.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-border bg-card shadow-sm p-8 md:p-10"
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Collaborons ensemble</h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Technicien Systèmes et Réseaux en poste chez ATJ Services — Étudiant BTS SIO SISR au Lycée Henri Wallon (Valenciennes).
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Mobile", value: "07 60 32 32 17", href: "tel:+33760323217" },
                { icon: Mail, label: "Email", value: "corentin.gransart@gmail.com", href: "mailto:corentin.gransart@gmail.com" },
                { icon: MapPin, label: "Localisation", value: "Secteur Arras / Cambrai / Hauts-de-France" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="block text-foreground font-medium hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t border-border">
              <a
                href="https://www.linkedin.com/in/corentin-gransart-223862233/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:corentin.gransart@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
