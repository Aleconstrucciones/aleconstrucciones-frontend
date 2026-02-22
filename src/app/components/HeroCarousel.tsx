"use client"

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSlide } from "@/types/hero-slide";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface HeroCarouselProps {
    slides: HeroSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    if (!slides || slides.length === 0) return null;

    return (
        <section className="relative w-full h-[80vh] md:h-screen">

            <button
                ref={prevRef}
                className="hidden xl:block absolute left-5 top-1/2 -translate-y-1/2 z-10 text-accent"
            >
                <ChevronLeft size={60} strokeWidth={1.2} />
            </button>

            <button
                ref={nextRef}
                className="hidden xl:block absolute right-5 top-1/2 -translate-y-1/2 z-10 text-accent"
            >
                <ChevronRight size={60} strokeWidth={1.2} />
            </button>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 20000, disableOnInteraction: false }}
                loop
                className="h-full"
                onBeforeInit={(swiper) => {
                    if (typeof swiper.params.navigation !== "boolean") {
                        swiper.params.navigation!.prevEl = prevRef.current;
                        swiper.params.navigation!.nextEl = nextRef.current;
                    }
                }}
            >
                {slides.map((slide) => {
                    const imageUrl = `${slide.image.url}`;

                    return(
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-[80vh] md:h-screen">
                                <Image
                                src={imageUrl}
                                alt={slide.image.alternativeText || slide.title}
                                fill
                                className="object-cover"
                                priority={slide.type === "slogan"}
                                />
                                <div className="absolute inset-0 bg-background/50" />
                                <div className="absolute inset-0 flex items-center">
                                    <div className="container mx-auto px-6">
                                        <div className="max-w-2xl lg:max-w-4xl flex flex-col gap-6 md:gap-8">
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-title">
                                            {slide.title}
                                        </h1>
                                        {slide.description && (
                                            <p className="text-base sm:text-xl md:text-2xl text-description leading-relaxed">
                                            {slide.description}
                                            </p>
                                        )}

                                        {slide.ctaText && slide.ctaLink && (
                                            <div>
                                            <a
                                                href={slide.ctaLink}
                                                target="_blank"
                                                className="
                                                inline-block
                                                bg-accent
                                                text-title
                                                px-8 py-4
                                                font-semibold
                                                tracking-wide
                                                rounded-md
                                                hover:opacity-90
                                                transition
                                                "
                                            >
                                                {slide.ctaText}
                                            </a>
                                            </div>
                                        )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}