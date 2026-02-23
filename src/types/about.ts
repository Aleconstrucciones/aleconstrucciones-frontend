import { StrapiRichText } from "./strapi";
import { Value } from "./value";
import { ZeroAccident } from "./zero-accident";

export interface About {
    id: number;
    documentId: string;
    title: string;
    description: StrapiRichText;
    mission: string;
    vision: string;
    value: Value[];
    zeroAccident: ZeroAccident;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}