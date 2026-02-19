import { RichText } from "@/components/RichText";
import { StrapiRichText } from "@/types/strapi";
import Image from "next/image";

interface Props {
    title: string;
    description: StrapiRichText;
}

function AboutHero({ title, description }: Props) {
  return (
    <section className="text-white py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 items-center">
        
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo.jpg"
            alt="Logo Empresa"
            width={400}
            height={400}
            className="rounded-full w-48 h-48 md:w-72 md:h-72 object-cover"
          />
        </div>

        <div className="flex flex-col gap-8 md:col-span-2 text-center md:text-left">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              {title}
            </h1>
            <span className="mt-2 md:mt-4 block h-1 w-24 md:w-40 bg-neutral-500 mx-auto md:mx-0" />
          </div>

          <div className="text-lg md:text-xl">
            <RichText content={description} />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;