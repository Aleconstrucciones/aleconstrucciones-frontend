"use client";

import { useRef, useState } from "react";
import { Service } from "@/types/service";
import { STRAPI_URL } from "@/lib/api";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";
import "swiper/css";
import "swiper/css/pagination"

interface Props {
  services: Service[];
}

function ServicesGrid({ services }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="relative w-[90%] 2xl:w-full mx-auto my-20">
      
      <button
        ref={prevRef}
        className="hidden xl:block absolute -left-15 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-all duration-300"
      >
        <ChevronLeft size={50} strokeWidth={1.2} />
      </button>

      <button
        ref={nextRef}
        className="hidden xl:block absolute -right-15 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-all duration-300"
      >
        <ChevronRight size={50} strokeWidth={1.2} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        loop
        speed={600}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation!.prevEl = prevRef.current;
            swiper.params.navigation!.nextEl = nextRef.current;
          }
        }}
      >

        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                flex flex-col gap-6 items-center text-center
                rounded-3xl
                min-h-120
                min-w-50
                py-8 sm:py-10 
                px-6
                bg-neutral-900
                shadow-xl
              "
            >
              {service.image?.url && (
                <Image
                  src={`${STRAPI_URL}${service.image.url}`}
                  alt={service.image.alternativeText || service.name}
                  height={220}
                  width={220}
                  className="rounded-2xl"
                />
              )}

              <h2 className="text-xl xl:text-2xl text-white font-semibold">
                {service.name}
              </h2>

              <button
                onClick={() => setSelectedService(service)}
                className="
                  mt-4
                  px-6 py-3
                  text-sm
                  rounded-lg
                  uppercase
                  tracking-wider
                  border-2 border-red-600/80
                  text-white
                  transition-all duration-300
                  hover:scale-115
                "
              >
                Ver detalles
              </button>
            </motion.section>
          </SwiperSlide>
        ))}
      </Swiper>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

export default ServicesGrid;
