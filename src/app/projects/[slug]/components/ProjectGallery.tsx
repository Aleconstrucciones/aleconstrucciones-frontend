"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (!project.gallery || project.gallery.length === 0) return null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section className="w-[90vw] md:w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-title font-semibold">
            Galería
          </h2>
          <span className="mt-1 md:mt-2 lg:mt-4 mb-10 block h-0.5 w-10 md:w-15 lg:w-20 bg-accent origin-center" />
        </div>


        <div className="relative">

          <button
            ref={prevRef}
            className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 text-accent"
          >
            <ChevronLeft size={60} strokeWidth={1.2} />
          </button>

          <button
            ref={nextRef}
            className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 text-accent"
          >
            <ChevronRight size={60} strokeWidth={1.2} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-2xl overflow-hidden"
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation!.prevEl = prevRef.current;
                swiper.params.navigation!.nextEl = nextRef.current;
              }
            }}
          >
            {project.gallery.map((image) => {
              const imageUrl = image.url;

              return (
                <SwiperSlide key={image.id}>
                  <div
                    className="relative aspect-4/3 sm:aspect-video w-full cursor-zoom-in"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}