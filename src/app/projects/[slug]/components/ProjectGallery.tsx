"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { STRAPI_URL } from "@/lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <h2 className="text-2xl font-semibold mb-8">Galería</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl overflow-hidden"
        >
          {project.gallery.map((image) => {
            const imageUrl = `${STRAPI_URL}${image.url}`;

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
