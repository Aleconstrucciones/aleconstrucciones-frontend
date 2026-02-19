import { StrapiRichText } from "./strapi";
import { StrapiMedia } from "./strapi";

export type ProjectStatus = "activo" | "finalizado";
export interface Project {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    shortDescription?: string;
    description?: StrapiRichText;
    featuredImage?: StrapiMedia;
    gallery: StrapiMedia[];
    status: ProjectStatus;
    location: string;
    surface?: number;
    client?: string;
    startDate: string;
    endDate: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;  
}