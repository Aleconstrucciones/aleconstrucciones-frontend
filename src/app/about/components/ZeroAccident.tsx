import Image from "next/image";
import { RichText } from "@/components/RichText";
import { ZeroAccident } from "@/types/zero-accident";

interface Props {
  data: ZeroAccident;
}

function ZeroAccidentSection({ data }: Props) {

    const heroImageUrl = data.securityHero.responsibleMedia.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.securityHero.responsibleMedia.url}`
        : undefined;

    return (
        <section className="py-20 md:py-28 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                {data.securityHero.title}
                </h2>

                <p className="text-neutral-300 text-lg leading-relaxed">
                {data.securityHero.description}
                </p>

                <div className="mt-6">
                <p className="font-semibold text-white">
                    {data.securityHero.responsibleName}
                </p>
                <p className="text-neutral-400 text-sm uppercase tracking-wide">
                    {data.securityHero.responsibleRole}
                </p>
                </div>
            </div>

            {heroImageUrl && (
                <div className="relative w-full h-88 md:h-100">
                <Image
                    src={heroImageUrl}
                    alt={data.securityHero.responsibleMedia.alternativeText || data.securityHero.title}
                    height={100}
                    width={100}
                    className="object-cover rounded-2xl"
                    unoptimized
                />
                </div>
            )}
            </div>

            <div className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">
                {data.safetyCulture.title}
            </h3>

            <div className="text-neutral-400 text-lg leading-relaxed">
                <RichText content={data.safetyCulture.description} />
            </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
            
            <div>
                <h3 className="text-3xl font-bold mb-6">
                {data.zeroAccidentDefinition.title}
                </h3>

                <ul className="space-y-4">
                {Array.isArray(data.zeroAccidentDefinition.items) &&
                    data.zeroAccidentDefinition.items.map((item, index) => (
                    <li key={index} className="text-neutral-300 text-lg">
                        • {item.text}
                    </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-3xl font-bold mb-6">
                {data.safetyAndHygiene.title}
                </h3>

                <div className="text-neutral-400 text-lg leading-relaxed">
                <RichText content={data.safetyAndHygiene.description} />
                </div>
            </div>
            </div>

        </div>
        </section>
    );
}

export default ZeroAccidentSection;