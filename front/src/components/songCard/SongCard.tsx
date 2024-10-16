'use client'
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IsongProps } from "@/interfaces";
import { useRouter } from "next/compat/router";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function SongCard({ song }: IsongProps) {

    const router = useRouter();

    const handleSongClick = () => {
        router.push(`/song/${song.id}`);
    }

    return (
        <>
            <main className="flex flex-col items-center">
                <div className="relative border-2 border-purple-700 p-[1vw] bg-black">
                    <img
                    src={song.image}
                        alt={song.title}
                        className="md:w-[20vw] md:h-[55vh] object-cover duration-300 hover:opacity-70"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white">
                    <button
                    onClick={handleSongClick}
                    className="font-extrabold md:text-4xl border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:border-purple-700 duration-200">
                            DETALLES
                    </button>
                    </div>
                </div>

                <h1 className={`${bebas.variable} font-sans md:text-3xl mt-[2vh]`}>
                    {song.title}
                </h1>
            </main>
        </>
    );
}

export default SongCard;
