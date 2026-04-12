"use client";

import { Client } from "@/types/client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

interface Props {
  clients: Client[];
}

function HomeClients({ clients }: Props) {
  return (
    <section className="flex flex-col max-w-7xl mx-auto px-6 py-20">
      <div>
        <span className="inline-flex items-center mb-5 rounded-full border border-accent/30 bg-accent/50 px-2 py-1 md:px-3 md:py-2 text-xs tracking-[0.15rem] text-description/80 backdrop-blur">
          NOSOTROS
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-title">
          Confían en Nosotros
        </h2>

        <span className="mt-2 lg:mt-4 block h-0.5 w-30 bg-accent" />
      </div>

      <div className="">
        <Marquee className="mt-16" speed={70} gradient gradientColor="#0b090a" gradientWidth={200}>
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center px-6 md:px-12 h-32 md:h-56 shrink-0"
            >
              <Image
                src={client.logo.url}
                alt={client.logo.alternativeText || client.name}
                width={220}
                height={110}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default HomeClients;