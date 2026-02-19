import { StrapiMedia } from "@/types/strapi";
import Image from "next/image";

interface Props {
    logo: StrapiMedia[];
}

function Providers({logo}: Props) {

    return (
        <div className="mt-16 md:mt-24">
            <h2 className="text-2xl sm:text-3xl text-center font-bold mb-10">
                Nuestros Proveedores
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
                {logo.map((item) => {

                    const logoUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.url}`

                    return(
                        <div 
                            key={item.id} 
                            className="flex items-center justify-center p-4 w-full"
                        >
                            {item.url && (
                                <Image 
                                    src={logoUrl} 
                                    alt={item.alternativeText || "Proveedor"} 
                                    width={120} 
                                    height={120}
                                    className="object-contain max-h-20 w-auto"
                                    unoptimized 
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Providers;