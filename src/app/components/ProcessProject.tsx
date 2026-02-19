import { CalendarClock, FileCheck, Handshake, Pencil, Search } from "lucide-react";


function ProcessProject() {

    return (
        <section className="flex flex-col max-w-7xl mx-auto px-6 py-16">
            <div>
                <span className="inline-flex items-center mb-5 rounded-full border border-white/15 bg-white/10 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-white/80 backdrop-blur">PROCESO</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Proceso de un Proyecto</h2>
                <span className="mt-4 block h-0.5 w-30 origin-left bg-neutral-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-center mt-15">
                <div className="flex flex-col items-center gap-5">
                    <div className="border-2 border-white rounded-4xl p-5">
                        <Search size={50} strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <p className="text-xl tracking-wide">1. Evaluacion de necesidades</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="border-2 border-white rounded-4xl p-5">
                        <Pencil size={50} strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <p className="text-xl tracking-wide">2. Planificacion en etapas y presupuesto</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="border-2 border-white rounded-4xl p-5">
                        <FileCheck size={50} strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <p className="text-xl tracking-wide">3. Aprobacion del presupuesto</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="border-2 border-white rounded-4xl p-5">
                        <CalendarClock size={50} strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <p className="text-xl tracking-wide">4. Estipulacion de fechas de inicio y terminacion</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="border-2 border-white rounded-4xl p-5">
                        <Handshake size={50} strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <p className="text-xl tracking-wide">5. Entrega del trabajo a conformidad del propietario</p>
                </div>
            </div>
        </section>
    );
}

export default ProcessProject;