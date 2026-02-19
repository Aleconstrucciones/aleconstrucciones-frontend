import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="flex flex-col items-center border-t border-gray-800 mt-20 bg-black text-white">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 max-w-5xl px-6 py-14">
                <div className="text-center sm:text-left">
                    <h3 className="mb-5 font-semibold tracking-wide">
                        ALE CONSTRUCCIONES
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Construcción con foco en calidad, diseño y atención personalizada.
                    </p>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="mb-5 font-semibold tracking-wide">
                        NAVEGACIÓN
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-gray-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Servicios</Link></li>
                        <li><Link href="/projects">Proyectos</Link></li>
                        <li><Link href="/provider">Proveedores</Link></li>
                        <li><Link href="/about">Nosotros</Link></li>
                        <li><Link href="/contact">Contacto</Link></li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="mb-5 font-semibold tracking-wide">
                        CONTACTO
                    </h3>
                    <div className="flex flex-col gap-3 text-sm text-gray-400">
                        <span className="flex items-center justify-center sm:justify-start gap-3">
                            <Phone size={18} /> Teléfono
                        </span>
                        <span className="flex items-center justify-center sm:justify-start gap-3">
                            <Mail size={18} /> Correo Electrónico
                        </span>
                        <span className="flex items-center justify-center sm:justify-start gap-3">
                            <MapPin size={18} /> Ubicación
                        </span>
                    </div>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="mb-5 font-semibold tracking-wide">
                        REDES
                    </h3>
                    <div className="flex justify-center sm:justify-start gap-4">
                        <span className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition">
                            <Instagram size={18} />
                        </span>
                        <span className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition">
                            <Facebook size={18} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-gray-800 w-full px-6 py-6 text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Ale Constructora. Todos los derechos reservados.
            </div>
        </footer>
    )
}
