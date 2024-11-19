'use client'
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockSongs } from "@/data/data";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { Isong } from "@/interfaces";
import { Allura, Bebas_Neue } from "next/font/google";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const allura = Allura({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const SongDetailPage = () => {
    const params = useParams(); 
    const id = params["song-detail"]
    const [song, setSong] = useState <Isong | null>(null);
    console.log(params["song-detail"]);
    
    useEffect(() => {
        if (id) {
            const songDetail = mockSongs.find((song) => song.id === Number(id));
            console.log(songDetail);
            
            if (songDetail) {
                setSong(songDetail);
            } else {
                console.error("song not found");
            }
        }
    }, [id]);

    const router = useRouter();
    const pathname = usePathname();

    return (
        <main className={styles.fondo}>
            <section className="w-screen h-screen">
                
                {song ? (
                <main className="flex md:flex-row flex-col md:mt-[16vh] mt-[12vh]  ">

                    <button type="button" onClick={() => router.push('/sound')}>    
                        <FaArrowAltCircleLeft className="md:text-5xl md:ml-[3vw]
                        text-2xl"/>
                    </button>

                    <div className="md:w-[50vw] md:mt-[10vh] ">
                    <img src={song.image} 
                    className="md:w-[30vw] w-[70vw] border-2 border-purple-700 p-[1vw] bg-black md:ml-auto md:mr-auto ml-auto mr-auto "/>
                    </div>

                    <section className="flex flex-col md:w-[50vw] md:mt-0 mt-[3vh] items-center justify-center ">
                    <h1 className= {`${allura.variable} font-sans md:text-8xl md:border-b-4 border-b-0 border-white text-pink-500 text-center
                    text-5xl md:leading-[10vh] leading-[8vh] mb-[1vh]`} >
                    {song.title}</h1>

                    <div className="flex flex-col text-center">
                    <a href={song.download} target="_blank" rel="noopener noreferrer">
                        <button>
                            <h1 className= {`${bebas.variable} font-sans md:text-5xl text-4xl hover:text-purple-700 duration-150` } >Descarga gratuita</h1>
                        </button>
                    </a>

                    <a href={song.listen} target="_blank" rel="noopener noreferrer">
                        <button className="md:mt-0 mt-[1vh] ">
                        <h1 className= {`${bebas.variable} font-sans md:text-5xl text-4xl hover:text-purple-700 duration-150` } >Escuchar</h1>
                        </button>
                    </a>
                    </div>
                    </section>

                </main>
                ) : (
                    <p>Song not found</p>
                )}
            </section>
        </main>
    );
};

export default SongDetailPage;
