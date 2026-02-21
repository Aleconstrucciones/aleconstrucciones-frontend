import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

interface Props {
  services: Service[];
}

function HomeServices({ services }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <span className="inline-flex items-center mb-5 rounded-full border border-accent/30 bg-accent/50 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-description/80 backdrop-blur">
        SERVICIOS
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-title">
        Nuestros Principales Servicios
      </h2>
      <span className="mt-4 block h-0.5 w-30 bg-accent" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-15">
        {services.map((service) => {
          const imageUrl = service.image?.url && `${service.image.url}`;

          return (
            <Link
            key={service.id}
            href={"/services"}
            className="group relative aspect-square overflow-hidden rounded-2xl"
            >
                {imageUrl && (
                    <Image
                    src={imageUrl}
                    alt={service.name}
                    fill
                    className="
                        object-cover
                        transition-transform duration-700
                        md:group-hover:scale-110
                    "
                    />
                )}

                <div
                    className="
                    absolute inset-0
                    bg-background/55
                    md:bg-background/30
                    md:group-hover:bg-background/65
                    transition-all duration-500
                    "
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3
                    className="
                        text-title
                        text-lg sm:text-2xl md:text-3xl
                        font-semibold
                        text-center px-4
                        transition-all duration-500
                        opacity-100
                        md:opacity-0
                        md:group-hover:opacity-100
                    "
                    >
                    {service.name}
                    </h3>
                </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <Link href={"/services"} className="inline-block button">
          Todos los servicios
        </Link>
      </div>
    </section>
  );
}

export default HomeServices;