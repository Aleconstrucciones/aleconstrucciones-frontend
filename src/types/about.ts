import { StrapiRichText } from "./strapi";
import { Value } from "./value";

export interface About {
    id: number;
    documentId: string;
    title: string;
    description: StrapiRichText;
    mission: string;
    vision: string;
    value: Value[]; 
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}