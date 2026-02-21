import { RichText } from "@/components/RichText";
import { StrapiRichText } from "@/types/strapi";
import Image from "next/image";

interface Props {
    title: string;
    description: StrapiRichText;
}

function AboutHero({ title, description }: Props) {
  return (
    <section className="py-16 md:py-24 max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] mx-auto">
      <div className="grid grid-cols-1 2xl:grid-cols-3 2xl:gap-15 items-center">
        
        <div className="flex justify-center 2xl:justify-start">
          <Image
            src="/logo.svg"
            alt="Logo Empresa"
            width={400}
            height={400}
            className="w-48 h-48 md:w-72 md:h-72 object-cover"
          />
        </div>

        <div className="flex flex-col mt-5 2xl:mt-0 gap-8 lg:col-span-2 text-center 2xl:text-left">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-title font-semibold">
              {title}
            </h1>
            <span className="mt-2 md:mt-4 block h-1 w-24 md:w-40 bg-accent mx-auto 2xl:mx-0" />
          </div>

          <div className="text-description text-lg md:text-xl">
            <RichText content={description} />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;