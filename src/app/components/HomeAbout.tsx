import { RichText } from "@/components/RichText";
import { About } from "@/types/about";
import Image from "next/image";

interface Props {
  about: About;
}

function HomeAbout({ about }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="inline-flex items-center mb-5 rounded-full border border-accent/30 bg-accent/50 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-description/80 backdrop-blur">
            NOSOTROS
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-title">
            Sobre Nosotros
          </h2>

          <span className="mt-4 block h-0.5 w-30 bg-accent" />

          <div className="mt-15 text-base sm:text-lg md:text-xl leading-relaxed text-description">
            <RichText content={about.description} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            
            <div className="card p-6 text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl text-title font-bold border-b border-accent/50 pb-2">
                20<span className="text-xl">+</span>
              </p>
              <p className="mt-4 text-sm sm:text-base text-description font-light">
                Años de experiencia.
              </p>
            </div>

            <div className="card p-6 text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl text-title font-bold border-b border-accent/50 pb-2">
                40<span className="text-xl">+</span>
              </p>
              <p className="mt-4 text-sm sm:text-base text-description font-light">
                Obras finalizadas con éxito.
              </p>
            </div>

            <div className="card p-6 text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl text-title font-bold border-b border-accent/50 pb-2">
                100<span className="text-xl">%</span>
              </p>
              <p className="mt-4 text-sm sm:text-base text-description font-light">
                Asesoramiento personalizado.
              </p>
            </div>

          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={600}
            height={600}
            className="hidden md:block w-60 sm:w-72 md:w-80 lg:w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default HomeAbout;
