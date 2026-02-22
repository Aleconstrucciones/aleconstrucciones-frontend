import { StrapiMedia } from "./strapi";

export interface Client {
    id: number;
    name: string;
    logo: StrapiMedia
}