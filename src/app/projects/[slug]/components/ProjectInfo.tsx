import { Project } from "@/types/project";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Props {
  project: Project;
}

export default function ProjectInfo({ project }: Props) {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold mb-8">Información del Proyecto</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-base">
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
    <div className="flex flex-col gap-1 border-b pb-3">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
