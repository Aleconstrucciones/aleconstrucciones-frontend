"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface Props {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        w-full
        flex
        flex-col
        md:flex-row
        ${!isEven ? "md:flex-row-reverse" : ""}
        rounded-2xl
        overflow-hidden
        border-2
        border-red-600/50
      `}
    >
      <div className="relative w-full md:w-1/2 h-62 sm:h-80 md:h-105">
        {project.featuredImage && (
          <Image
            src={project.featuredImage.url}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="md:w-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-12">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                {project.location}
              </p>
            </div>

            <p className="text-sm text-gray-400">
              {new Date(project.startDate).getFullYear()}
              {project.endDate &&
                ` - ${new Date(project.endDate).getFullYear()}`}
            </p>
          </div>

          {project.shortDescription && (
            <p className="text-sm sm:text-base leading-relaxed text-gray-600">
              {project.shortDescription}
            </p>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 w-fit inline-block px-5 py-2.5 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Ver Proyecto
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
