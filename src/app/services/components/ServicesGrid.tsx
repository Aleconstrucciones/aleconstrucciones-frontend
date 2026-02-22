"use client";

import { useRef, useState } from "react";
import { Service } from "@/types/service";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
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
    <div className="relative w-[80%] mx-auto my-20">
      
      <button
        ref={prevRef}
        className="hidden xl:block absolute -left-15 top-1/2 -translate-y-1/2 z-10 text-accent"
      >
        <ChevronLeft size={50} strokeWidth={1.2} />
      </button>

      <button
        ref={nextRef}
        className="hidden xl:block absolute -right-15 top-1/2 -translate-y-1/2 z-10 text-accent"
      >
        <ChevronRight size={50} strokeWidth={1.2} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        loop
        speed={1500}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation!.prevEl = prevRef.current;
            swiper.params.navigation!.nextEl = nextRef.current;
          }
        }}
      >
        //
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <div
                className="relative w-full h-75 xl:h-95 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {service.image?.url && (
                  <Image
                    src={service.image.url}
                    alt={service.image.alternativeText || service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-background/55 group-hover:bg-background/65 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-title text-2xl xl:text-3xl font-semibold tracking-wide">
                    {service.name}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                className="
                  w-full
                  py-3
                  border-2 border-accent/50
                  text-sm
                  uppercase
                  tracking-wider
                  text-title
                  hover:bg-accent/50
                  transition-all duration-300
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
