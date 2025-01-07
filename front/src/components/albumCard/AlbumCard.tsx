'use client'
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IAlbumProps, IsongProps } from "@/interfaces";
import { useRouter } from "next/navigation";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AlbumCard ({ album }: IAlbumProps) {
    
    const router = useRouter();

    const handleAlbumClick = () => {

        if (album.id) {
            router.push(`/sound/albums/${album.id}`)
        }
    }

    return (
        <>
        <main className="flex flex-col items-center">
            <div className="relative border-2 border-pink-500 p-[1vw] bg-black">
                <img 
                    src={album.image}
                    alt={album.title}
                    className="md:w-[30vw] md:h-[65vh] w-[60vw] h-[30vh] object-cover duration-300 hover:opacity-70
                    "
                />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white">
                        <button
                            onClick={handleAlbumClick}
                            className="font-bold md:text-4xl border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:border-purple-700 hover:scale-110 duration-300"
                        >
                            DETALLES
                        </button>
                    </div>
            </div>
            <div>
                <h1 className={`${bebas.variable} font-sans md:text-5xl md:mt-[3vh] md:mb-[1vh] mb-[0vh] text-center`}>
                    {album.title}
                </h1>

                <h2 className={`${bebas.variable} font-sans md:text-3xl text-base md:mt-[0vh] md:mb-[2vh] mb-[1vh] text-center`}>
                    {album.release}    
                </h2>
            </div>


        </main>
        </>
    )
}

export default AlbumCard;