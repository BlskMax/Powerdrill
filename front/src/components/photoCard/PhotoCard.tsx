'use client'
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IAlbumProps, IPictureProps, IsongProps } from "@/interfaces";
import { useRouter } from "next/navigation";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function PhotoCard ({ picture }: IPictureProps) {


    return (
        <>
        <main className="flex flex-col items-center">
            <div className="">
                <img 
                    src={picture.photoDir}
                    alt={picture.name}
                    className="
                    "
                />
            </div>
        </main>
        </>
    )
}

export default PhotoCard;