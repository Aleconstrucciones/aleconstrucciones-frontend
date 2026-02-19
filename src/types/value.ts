import { StrapiMedia } from "./strapi";

export interface Value {
    id: number;
    logo: StrapiMedia;
    title: string;
    description: string;
}