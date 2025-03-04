'use client';
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IsongProps } from "@/interfaces";
import { useRouter } from "next/navigation"; 

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function IncludedSongList ({ song }: IsongProps) {

    const router = useRouter();

    const handleSongClick = () => {
        
        if (song.id) {
            router.push(`/sound/songs/${song.id}`);
        }
    }

    return (
        <>
            <main className="flex flex-row items-center ">
                <div className="flex flex-row border-b-2 ">

                <h1 className={`${bebas.variable} font-sans md:text-6xl md:mb-[4vh] md:mr-[1vw] mb-[1vh] text-center text-purple-700`}>
                    {song.albumOrder}.-
                </h1>
                <button
                onClick={handleSongClick}
                className={`${bebas.variable} font-sans md:text-6xl md:mb-[4vh] md:mr-[1vw] mb-[1vh] text-center
                hover:text-purple-700 duration-300 `}>
                    {song.short} {song.subtitle}
                </button>


                </div>
            </main>
        </>
    );
}

export default IncludedSongList;
