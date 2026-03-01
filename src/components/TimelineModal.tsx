import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const TimelineModal = ({ isOpen, onClose, title, subtitle, children }: TimelineModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          className="glass-card p-6 md:p-8 w-full max-w-lg relative border-l-4 border-l-primary"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
            <X size={22} />
          </button>
          <h2 className="font-heading text-xl font-bold text-primary mb-1">{title}</h2>
          {subtitle && <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">{subtitle}</p>}
          <div className="text-sm text-card-foreground space-y-3">{children}</div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TimelineModal;
