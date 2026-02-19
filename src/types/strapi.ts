export interface StrapiTextNode {
    type: "text";
    text: string;
}

export interface StrapiParagraph {
    type: "paragraph";
    children: StrapiTextNode[];
}


export interface StrapiMedia {
    id: number;
    url: string;
    alternativeText?: string;
    width: number;
    height: number;
}

export type StrapiRichText = StrapiParagraph[];