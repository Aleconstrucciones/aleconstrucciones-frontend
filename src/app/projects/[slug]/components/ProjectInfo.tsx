import { Project } from "@/types/project";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Props {
  project: Project;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <section className="w-full max-w-5xl">
      <div className="flex flex-col items-center xl:items-start">
        <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-center text-title font-semibold">Información del Proyecto</h2>
        <span className="mt-1 md:mt-2 lg:mt-4 mb-10 block h-0.5 w-20 md:w-25 lg:w-30 bg-accent origin-center" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm md:text-base">
        <InfoItem label="Cliente" value={project.client ?? "—"} />
        <InfoItem label="Ubicación" value={project.location} />
        <InfoItem
          label="Estado"
          value={project.status === "activo" ? "En ejecución" : "Finalizado"}
        />
        <InfoItem
          label="Superficie"
          value={project.surface ? `${project.surface} m²` : "—"}
        />
        <InfoItem
          label="Inicio"
          value={format(new Date(project.startDate), "MMMM yyyy", {
            locale: es,
          })}
        />
        <InfoItem
          label="Finalización"
          value={
            project.endDate
              ? format(new Date(project.endDate), "MMMM yyyy", {
                  locale: es,
                })
              : "En curso"
          }
        />
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-accent pb-3">
      <span className="text-title tracking-wide text-sm">{label}</span>
      <span className="text-description/40 tracking-wider font-medium">{value}</span>
    </div>
  );
}
