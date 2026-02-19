import { Value } from "@/types/value";
import Image from "next/image";

interface Props {
    values: Value[];
}

function AboutValues({ values }: Props) {
  return (
    <section className="py-16 md:py-20">
      <div className="flex flex-col items-center gap-12">

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Nuestros Valores
          </h2>
          <span className="mt-2 md:mt-4 block h-1 w-24 md:w-40 bg-neutral-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
          {values.map((value) => {
            const logoUrl = `${value.logo.url}`;

            return (
              <div
                key={value.id}
                className="flex flex-col items-center text-center gap-4 border border-neutral-700 p-6 rounded-2xl hover:shadow-lg transition"
              >
                {value.logo.url && (
                  <Image
                    src={logoUrl}
                    alt={value.logo.alternativeText || value.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                )}
                <h3 className="text-xl md:text-2xl font-semibold">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base tracking-wide text-neutral-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutValues;