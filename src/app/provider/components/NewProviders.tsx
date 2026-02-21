import { StrapiRichText } from "@/types/strapi";
import { RichText } from "@/components/RichText";
import Link from "next/link";

interface Props {
    description: StrapiRichText;
}

function NewProviders({description}: Props) {

    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-16 md:my-20">

            <div className="flex flex-col lg:col-span-2 gap-6 md:gap-8 px-6 md:px-10 py-6 rounded-lg">
                <div className="text-base md:text-lg">
                    <RichText content={description} />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <Link 
                    href={"/contact"} 
                    className="button text-sm md:text-base text-center"
                >
                    SUMATE COMO PROVEEDOR
                </Link>
            </div>
        </div>
    );
}

export default NewProviders;