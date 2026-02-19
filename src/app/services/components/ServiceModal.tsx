"use client";

import { Service } from "@/types/service";
import { STRAPI_URL } from "@/lib/api";
import { RichText } from "@/components/RichText";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
          className="fixed inset-0 z-50 flex items-center justify-center p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              bg-neutral-900
              border border-neutral-800
              rounded-2xl lg:rounded-3xl
              w-full
              max-w-6xl
              max-h-[95vh]
              shadow-2xl
              overflow-hidden
              flex flex-col
            "
          >
            <div className="relative top-5 md:top-0 flex justify-center md:block p-8 pb-0">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-white border border-red-600/70 px-5 py-2 rounded-full hover:bg-red-600/20 transition"
              >
                <ArrowLeft size={22} />
                Volver a los servicios
              </button>
            </div>

            <div className="overflow-y-auto px-8 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-8">
                
                {service.image?.url && (
                  <div className="flex flex-col items-center">
                    <Image
                      src={`${STRAPI_URL}${service.image.url}`}
                      alt={service.image.alternativeText || service.name}
                      height={450}
                      width={450}
                      className="object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                )}

                <div className="lg:border-l border-neutral-800 lg:pl-12 col-span-1 lg:col-span-2">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center sm:text-start text-white">
                      {service.name}
                    </h2>

                    <Link
                      href="/contact"
                      className="
                        border border-red-600/70
                        text-white
                        text-center
                        py-3 px-6
                        rounded-lg
                        hover:bg-red-600/20
                        transition-all duration-300
                        whitespace-nowrap
                      "
                    >
                      Solicitar presupuesto
                    </Link>
                  </div>

                  <span className="block h-0.5 w-40 bg-neutral-600 mb-8" />

                  {service.description && (
                    <div className="text-white/70 leading-10 text-lg">
                      <RichText content={service.description} />
                    </div>
                  )}
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceModal;
