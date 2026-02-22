"use client";

import { Service } from "@/types/service";
import { RichText } from "@/components/RichText";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  service: Service | null;
  onClose: () => void;
}

function ServiceModal({ service, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (service) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              card
              relative
              w-full
              max-w-5xl
              max-h-[90vh]
              shadow-2xl
              overflow-hidden
              flex flex-col
            "
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-accent hover:bg-accent/50 transition"
            >
              <X size={20} className="text-title" />
            </button>

            <div className="overflow-y-auto p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
                {service.image?.url && (
                  <div className="w-full aspect-4/3 relative">
                    <Image
                      src={service.image.url}
                      alt={service.image.alternativeText || service.name}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                )}

                <div className="flex flex-col justify-between">
                  
                  <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-title">
                      {service.name}
                    </h2>
                    <span className="block h-0.5 w-20 bg-accent mt-1 md:mt-2 mb-8" />
                    {service.description && (
                      <div className="text-description leading-relaxed text-base md:text-lg">
                        <RichText content={service.description} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Link
                  href={`/contact?type=cotizacion&service=${encodeURIComponent(service.name.toLowerCase())}`}
                  className="button w-full sm:w-auto inline-flex justify-center"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceModal;