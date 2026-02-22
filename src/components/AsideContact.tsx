function AsideContact() {
    return (
        <aside className="card p-6 lg:p-8 shadow-xl lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold text-title tracking-wide">
                ¿Preferís escribirnos directo?
            </h2>
            <p className="text-description/70 mt-2 tracking-wide">
                Abrí el chat de Whatsapp y envianos un mensaje.
            </p>
            <a 
                href="" 
                target="_blank" 
                className="mt-6 inline-block rounded-xl w-full text-center font-medium tracking-wide button"
            >
                Whatsapp
            </a>
    
            <div className="mt-9 grid gap-1">
                <div className="flex items-start gap-5">
                    <span className="w-5 h-5 bg-accent/30 text-accent/80 rounded-full self-center place-content-center place-items-center">
                        <svg className="w-5 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <div>
                        <h3 className="text-lg text-title font-medium">Atención personalizada</h3>
                        <p className="text-sm text-description/70">Un asesor te responde.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <span className="w-5 h-5 bg-accent/30 text-accent/80 rounded-full self-center place-content-center place-items-center">
                        <svg className="w-5 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <div>
                        <h3 className="text-lg font-medium text-title">Respuestas en el día</h3>
                        <p className="text-sm text-description/70">Horarios hábiles de X a X.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <span className="w-5 h-5 bg-accent/30 text-accent/80 rounded-full self-center place-content-center place-items-center">
                        <svg className="w-5 md:w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <div>
                        <h3 className="text-lg font-medium text-title">Asesoramiento sin cargo</h3>
                        <p className="text-sm text-description/70">Nos contás y te guiamos.</p>
                    </div>
                </div>
    
                <div className="bg-background border border-accent/50 rounded-2xl mt-9 text-description p-4">
                    <p className="text-description/70">También podés completar el formulario y te respondemos por correo con los detalles.</p>
                </div>
            </div>
        </aside>
    )
}

export default AsideContact;