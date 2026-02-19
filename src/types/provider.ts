import { StrapiMedia } from "./strapi";
import { StrapiRichText } from "./strapi";

export interface Provider {
    id: number;
    documentId: string;
    description: StrapiRichText;
    logo: StrapiMedia[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}