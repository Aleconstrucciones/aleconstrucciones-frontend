import { StrapiRichText } from "@/types/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface RichTextProps {
    content: StrapiRichText; //Tipar en futuro
}

export function RichText({ content}: RichTextProps) {
    if (!content) return null;

    return (
        <BlocksRenderer content={content} />
    );
}