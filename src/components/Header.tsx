import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Missions", path: "/missions" },
  { label: "Stack Technique", path: "/competences" },
  { label: "Compétences E4", path: "/tableau-e4" },
  
  { label: "Contact", path: "/contact", isContact: true },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-card/80 border-b border-border h-[70px]">
      <div className="container h-full flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-extrabold text-foreground">
          C.Gransart<span className="text-primary">.IT</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors relative ${
                item.isContact
                  ? "px-4 py-2 border border-primary rounded text-primary hover:bg-primary hover:text-primary-foreground"
                  : location.pathname === item.path
                  ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <DarkModeToggle />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[70px] left-0 w-full bg-card border-b border-border py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
