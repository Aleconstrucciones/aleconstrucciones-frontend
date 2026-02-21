import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="flex flex-col items-center border-t border-accent/50 mt-20 bg-card/20">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 max-w-6xl px-6 py-14">
                <div className="text-center sm:text-left">
                    <div className="flex justify-center md:justify-start gap-2">
                        <Image src={"logo-nav.svg"} alt="Logo" width={25} height={25} className="self-start" />
                        <h3 className="mb-5 text-title font-semibold tracking-wide">
                            ALE CONSTRUCCIONES
                        </h3>
                    </div>
                    <p className="text-description/60 text-sm leading-relaxed">
                        Construcción con foco en calidad, diseño y atención personalizada.
                    </p>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="mb-5 text-title font-semibold tracking-wide">
                        NAVEGACIÓN
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-description/60">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Servicios</Link></li>
                        <li><Link href="/projects">Proyectos</Link></li>
                        <li><Link href="/provider">Proveedores</Link></li>
                        <li><Link href="/about">Nosotros</Link></li>
                        <li><Link href="/contact">Contacto</Link></li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="mb-5 text-title font-semibold tracking-wide">
                        CONTACTO
                    </h3>
                    <div className="flex flex-col gap-3 text-sm text-description/60">
                        <span className="flex items-center justify-center sm:justify-start gap-3">
                            <Phone size={18} className="text-accent/50" /> Teléfono
                        </span>
                        <span className="flex items-center justify-center sm:justify-start gap-3">
                            <Mail size={18} className="text-accent/50" /> Correo Electrónico
                        </span>
                        <span className="flex items-center justify-center sm:justify-start gap-3">
                            <MapPin size={18} className="text-accent/50" /> Ubicación
                        </span>
                    </div>
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="mb-5 text-title font-semibold tracking-wide">
                        REDES
                    </h3>
                    <div className="flex justify-center sm:justify-start gap-4">
                        <span className="p-2 border-2 border-accent/50 rounded-full hover:scale-110 transition">
                            <Instagram size={20} className="text-accent/50" />
                        </span>
                        <span className="p-2 border-2 border-accent/50 rounded-full hover:scale-110 transition">
                            <Facebook size={20} className="text-accent/50" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-accent/50 w-full px-6 py-6 text-xs text-description/60">
                &copy; {new Date().getFullYear()} Ale Constructora. Todos los derechos reservados.
            </div>
        </footer>
    )
}
