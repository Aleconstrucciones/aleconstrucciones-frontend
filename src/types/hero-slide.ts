export interface HeroSlide {
    id: number;
    title: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    type?: "slogan" | "financing" | "process";
    order?: number;
    image: {
        id: number;
        url: string;
        alternativeText?: string;
    };
}