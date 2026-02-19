import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

interface Props {
  services: Service[];
}

function HomeServices({ services }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
        <span className="inline-flex items-center mb-5 rounded-full border border-white/15 bg-white/10 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-white/80 backdrop-blur">
            SERVICIOS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Nuestros Principales Servicios</h2>
        <span className="mt-4 block h-0.5 w-30 origin-left bg-neutral-500" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-15">
            {services.map((service) => {
                const imageUrl =
                    service.image?.url &&
                    `${service.image.url}`;

                return (
                    <div
                    key={service.id}
                    className="flex flex-col gap-5 form-input border-2 border-red-500/40 p-10 rounded-xl"
                    >
                    {imageUrl && (
                        <Image
                        src={imageUrl}
                        alt={service.name}
                        width={100}
                        height={100}
                        className="self-center rounded-xl"
                        />
                    )}

                        <h3 className="text-2xl font- text-center px-4">
                        {service.name}
                        </h3>
                    </div>
                );
            })}
        </div>
        <div className="flex justify-center mt-10">
            <Link href={"/services"} className="inline-block bg-white/30 text-white px-8 py-3 rounded-xl hover:bg-neutral-800 transition">Todos los servicios</Link>
        </div>
    </section>
  );
}

export default HomeServices;
