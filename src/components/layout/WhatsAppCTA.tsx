"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phone = "5492215624299";
  const message = "Hola! Quisiera solicitar una cotización.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showTooltip) return;

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 4000);

    return () => clearTimeout(hideTimer);
  }, [showTooltip]);

  const tooltipVisible = hovered || showTooltip;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="fixed bottom-5 md:bottom-15 right-5 md:right-15 z-50 flex items-center"
        >
          <AnimatePresence>
            {tooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="mr-3 px-4 py-2 rounded-lg bg-white text-black text-sm shadow-xl whitespace-nowrap"
              >
                ¿Necesitás ayuda?
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/50 shadow-2xl backdrop-blur-md"
          >
            <FaWhatsapp size={32} className="text-emerald-200" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WhatsAppCTA;
