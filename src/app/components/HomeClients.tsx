"use client";

import { Client } from "@/types/client";
import Image from "next/image";

interface Props {
    clients: Client[];
}

function HomeClients({ clients }: Props) {
    if (!clients || clients.length === 0) return null;

    return (
        <section className="flex flex-col max-w-7xl mx-auto px-6 py-20 overflow-hidden">
            <div>
                <span className="inline-flex items-center mb-5 rounded-full border border-accent/30 bg-accent/50 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-description/80 backdrop-blur">
                    NOSOTROS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-title">
                    Confían en Nosotros
                </h2>
                <span className="mt-2 lg:mt-4 block h-0.5 w-30 bg-accent" />
            </div>

            <div className="relative w-full overflow-hidden mt-15
                before:absolute before:left-0 before:top-0 before:h-full before:w-20 
                before:bg-linear-to-r before:from-background before:to-transparent before:z-10
                after:absolute after:right-0 after:top-0 after:h-full after:w-20 
                after:bg-linear-to-l after:from-background after:to-transparent after:z-10"
            >

                <div className="flex w-max animate-marquee">
                    <div className="flex">
                        {clients.map((client) => (
                            <div
                                key={`first-${client.id}`}
                                className="flex items-center justify-center px-12 h-40 md:h-64"
                            >
                                <Image
                                    src={client.logo.url}
                                    alt={client.logo.alternativeText || client.name}
                                    width={240}
                                    height={140}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex">
                        {clients.map((client) => (
                            <div className="flex items-center justify-center px-12 h-40 md:h-64">
                                <Image
                                    src={client.logo.url}
                                    alt={client.logo.alternativeText || client.name}
                                    width={240}
                                    height={140}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeClients;