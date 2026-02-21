"use client";

import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  const imageUrl = project.featuredImage?.url
    ? `${project.featuredImage.url}`
    : null;

  return (
    <section className="relative w-full h-[50vh] min-h-75 md:h-[60vh] lg:h-[70vh]">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl">
          {project.title}
        </h1>
      </div>
    </section>
  );
}
