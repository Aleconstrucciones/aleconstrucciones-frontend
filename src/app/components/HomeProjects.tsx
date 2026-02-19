import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Project[];
}

function HomeProjects({ projects }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <span className="inline-flex items-center mb-5 rounded-full border border-white/15 bg-white/10 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-white/80 backdrop-blur">
        OBRAS
      </span>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Obras Realizadas</h2>
      <span className="mt-4 block h-0.5 w-30 origin-left bg-neutral-500" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
        {projects.map((project) => {
          const imageUrl =
            project.featuredImage?.url &&
            `${project.featuredImage.url}`;

          return (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-xl mb-10">{project.location}</p>

                <span className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                  Ver proyecto
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-block bg-white/30 text-white px-8 py-3 rounded-xl hover:bg-neutral-800 transition"
        >
          Ver todas las obras
        </Link>
      </div>
    </section>
  );
}

export default HomeProjects;
