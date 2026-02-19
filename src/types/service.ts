import { StrapiRichText } from "./strapi";
import { StrapiMedia } from "./strapi";

export interface Service {
    id: number;
    documentId: string;
    name: string;
    description?: StrapiRichText;
    image?: StrapiMedia;
    order?: number;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}