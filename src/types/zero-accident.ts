import { StrapiMedia, StrapiRichText } from "./strapi";

export interface ZeroAccident {
    securityHero: SecurityHero;
    safetyCulture: SafetyCulture;
    zeroAccidentDefinition: ZeroAccidentDefinition;
    safetyAndHygiene: SafetyAndHygiene;
}

export interface SecurityHero {
    title: string;
    description: string;
    responsibleName: string;
    responsibleRole: string;
    responsibleMedia: StrapiMedia;
}

export interface SafetyCulture {
    title: string;
    description: StrapiRichText;
}

export interface ZeroAccidentDefinition {
    title: string;
    items: ZeroAccidentItem[];
}

export interface ZeroAccidentItem {
    text: string;
}

export interface SafetyAndHygiene {
    title: string;
    description: StrapiRichText;
}