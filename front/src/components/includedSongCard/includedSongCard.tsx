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

function IncludedSongCard ({ song }: IsongProps) {

    const router = useRouter();

    const handleSongClick = () => {
        
        if (song.id) {
            router.push(`/sound/songs/${song.id}`);
        }
    }

    return (
        <>
            <main className="flex flex-col-reverse items-center">
                <div className="relative border-2 border-purple-700 p-[1vw] bg-black">
                    <img
                        src={song.image}
                        alt={song.title}
                        className="md:w-[36vw] md:h-[38vh] w-[36vw] h-[18vh] object-cover duration-300 hover:opacity-70"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white">
                        <button
                            onClick={handleSongClick}
                            className="font-bold md:text-4xl border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:border-pink-500 hover:scale-110 duration-300"
                        >
                            DETALLES
                        </button>
                    </div>
                </div>

                <h1 className={`${bebas.variable} font-sans md:text-3xl md:mb-[2vh] mb-[1vh] text-center`}>
                    {song.title}
                </h1>
            </main>
        </>
    );
}

export default IncludedSongCard;