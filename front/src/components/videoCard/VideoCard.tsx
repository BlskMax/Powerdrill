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

function VideoCard({ song }: IsongProps) {

    const router = useRouter();

    const handleSongClick = () => {
        
        if (song.id) {
            router.push(`/sound/songs/${song.id}`);
        }
    }

    return (
        <>

            {song.availableMusicVideo &&

            <main className="flex flex-col items-start bg-white bg-opacity-95 h-[67vh] ">
                <div className="relative p-[1vw] ">
                    <img
                        src={song.thumbnail}
                        alt={song.short}
                        className="md:w-[30vw] md:h-[50vh] w-[36vw] h-[18vh] object-cover duration-300 hover:opacity-70 "
                    />

                    <section className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white">
                        <a href={song.musicVideo} target="_blank">
                        <button
                            className="font-bold md:text-4xl hover:scale-110 duration-300"
                        >

                            <img
                            src="/images/ver.png"
                            alt="DETALLES"
                            className="md:w-[6vw] w-[24vw] opacity-80 hover:opacity-100 duration-300"
                            />
                        </button>
                        </a>
                    </section>

                </div>
                    <section className="bg-black w-[20vw] mt-[2vh] mr-auto ml-auto ">
                        <h1 className={`${bebas.variable} font-sans text-center text-xl md:text-6xl space-x-8 uppercase`}>
                            {song.videoType}
                        </h1>
                    </section>
            </main>
}
        </>
    );
}

export default VideoCard;
