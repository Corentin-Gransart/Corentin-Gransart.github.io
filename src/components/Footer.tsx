import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-2">Corentin Gransart</h3>
          <p className="text-sm text-muted-foreground">Technicien Systèmes & Réseaux en devenir.</p>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Mail size={14} /> corentin.gransart@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin size={14} /> Sauchy-Cauchy / Arras</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/missions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Missions</Link>
          <Link to="/competences" className="text-sm text-muted-foreground hover:text-primary transition-colors">Stack Technique</Link>
          <Link to="/tableau-e4" className="text-sm text-muted-foreground hover:text-primary transition-colors">Compétences E4</Link>
          
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="flex gap-3">
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
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 Corentin Gransart. Portfolio conçu pour le BTS SIO SISR.
      </div>
    </div>
  </footer>
);

export default Footer;
