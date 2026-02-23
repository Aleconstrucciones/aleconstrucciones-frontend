import Image from "next/image";
import { RichText } from "@/components/RichText";
import { ZeroAccident } from "@/types/zero-accident";

interface Props {
  data: ZeroAccident;
}

function ZeroAccidentSection({ data }: Props) {
  const heroImageUrl = data?.securityHero?.responsibleMedia?.url;
  if (!data) return null;

  return (
    <article className="flex flex-col gap-12 sm:gap-16 lg:gap-24 py-16 sm:py-20 lg:py-28 bg-background">

      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-title uppercase font-semibold tracking-tight">
          Accidente cero
        </h1>
        <span className="mt-3 h-1 w-32 sm:w-48 md:w-64 bg-accent rounded-full" />
      </div>

      <div className="max-w-[85vw] md:max-w-[70vw] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 lg:gap-24">

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-title leading-tight">
                {data.securityHero.title}
              </h2>
              <span className="block mt-2 h-1 w-24 sm:w-32 bg-accent rounded-full mx-auto lg:mx-0" />
            </div>

            <p className="text-description text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              {data.securityHero.description}
            </p>
          </div>

          {heroImageUrl && (
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-8">
              <div className="flex flex-col order-2 sm:order-1 text-center sm:text-left border-t sm:border-t-0 sm:border-r border-accent pt-4 sm:pt-0 max-w-md">
                <p className="font-semibold text-description text-lg">
                  {data.securityHero.responsibleName}
                </p>
                <p className="text-xs uppercase tracking-widest text-description/60 mt-2">
                  {data.securityHero.responsibleRole}
                </p>
              </div>

              <div className="flex order-1 sm:order-2 relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={heroImageUrl}
                  alt={
                    data.securityHero.responsibleMedia?.alternativeText ||
                    data.securityHero.title
                  }
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">

          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-title">
                {data.safetyCulture.title}
              </h3>
              <span className="block mt-2 h-1 w-20 sm:w-28 bg-accent rounded-full" />
            </div>

            <div className="text-description text-base sm:text-lg leading-relaxed space-y-4">
              <RichText content={data.safetyCulture.description} />
            </div>
          </div>

          <div className="flex flex-col gap-12">

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-title">
                {data.zeroAccidentDefinition.title}
              </h3>
              <span className="block mt-2 mb-6 h-1 w-16 sm:w-24 bg-accent rounded-full" />

              <ul className="space-y-4">
                {Array.isArray(data.zeroAccidentDefinition.items) &&
                  data.zeroAccidentDefinition.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-description text-base sm:text-lg"
                    >
                      <span className="justify-center w-5 h-5 text-accent">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-title">
                {data.safetyAndHygiene.title}
              </h3>
              <span className="block mt-2 mb-6 h-1 w-16 sm:w-24 bg-accent rounded-full" />

              <div className="text-description text-base sm:text-lg leading-relaxed space-y-4">
                <RichText content={data.safetyAndHygiene.description} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}

export default ZeroAccidentSection;