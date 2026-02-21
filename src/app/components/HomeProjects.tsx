import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Project[];
}

function HomeProjects({ projects }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <span className="inline-flex items-center mb-5 rounded-full border border-accent/30 bg-accent/50 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-description/80 backdrop-blur">
        OBRAS
      </span>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-title">Obras Realizadas</h2>
      <span className="mt-4 block h-0.5 w-30 bg-accent" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
        {projects.map((project) => {
          const imageUrl =
            project.featuredImage?.url &&
            `${project.featuredImage.url}`;

          return (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-4/3"
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover aspect-4/3 transition-transform duration-500 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-background/55 md:bg-background/30 group-hover:bg-black/65 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-title">
                  {project.title}
                </h3>

                <p className="text-xl mb-10 text-description/60">{project.location}</p>

                <span className="button">
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
          className="inline-block button"
        >
          Ver todas las obras
        </Link>
      </div>
    </section>
  );
}

export default HomeProjects;
