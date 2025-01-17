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

    const scrollToSection = () => {
        const section = document.getElementById('letra');
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    };
    
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
            <section className="w-screen h-auto">
                
                {song ? (
                <main className="flex md:flex-col flex-col md:mt-[16vh] mt-[12vh]">

                    <button type="button" onClick={() => router.push('/sound')}>    
                        <FaArrowAltCircleLeft className="md:text-5xl md:ml-[3vw]
                        text-2xl"/>
                    </button>

                    <div className="md:w-screen md:mt-[5vh] md:flex-row flex-col flex">
                    <img src={song.image} 
                    className="md:w-[30vw] w-[50vw] object-cover border-2 border-white p-[1vw] bg-black md:ml-auto md:mr-auto ml-auto mr-auto "/>

                    <div className="md:mr-auto md:mt-auto md:mb-auto text-center ">
                    <h1 className= {`${allura.variable} font-sans md:text-8xl text-white text-center
                    text-4xl`} >
                    {song.short}</h1>
                    <h1 className= {`${allura.variable} font-sans md:text-5xl text-pink-500 text-center
                    text-xl md:mb-[5vh] mb-[2vh] `} >
                    {song.subtitle}</h1>
                    
                    
                        {song.available ? (

                    <div className="flex flex-row text-center space-x-[5vw] justify-center mt-[1vh] ">
                    <a href={song.download} target="_blank" rel="noopener noreferrer">
                    <button className={`${bebas.variable} font-sans md:w-[16vw] md:h-[10vh] w-[30vw] md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2  bg-black hover:border-purple-700 `}>DESCARGAR</button>
                    </a>

                    <a href={song.listen} target="_blank" rel="noopener noreferrer">
                    <button className={`${bebas.variable} font-sans md:w-[16vw] md:h-[10vh] w-[30vw] md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2  bg-black hover:border-purple-700 `}>ESCUCHAR</button>
                    </a>
                    </div>
                        ) : (
                            <div>
                                <h1 className="md:text-2xl text-xs w-[70vw] md:w-[30vw] ml-auto mr-auto border-2 md:p-[2vh] bg-black text-purple-500 ">Esta canción pronto estará disponible para escuchar y descargar</h1>
                            </div>
                        )
                    }

                    
                        <button type="button" onClick={scrollToSection}
                        className={`${bebas.variable} font-sans md:text-5xl text-sm  transition-all duration-500 hover:text-pink-500
                        md:mt-[5vh] md:opacity-100 opacity-0
                        `}>Lyrics</button>

                    </div>
                    </div>

                    <section className="flex flex-col md:w-[50vw] md:mt-0 mt-[1vh] items-center justify-center ">

                    </section>

                    <section className="md:pb-[12vh] mb-[5vh] text-center md:mt-[10vh] mt-[0vh] " id="letra">
                    <h1 className= {`${bebas.variable} font-sans md:text-7xl text-4xl md:mb-[5vh] mb-[2vh]` } >
                        Lyrics
                    </h1>
                        <img src={song.lyrics} 
                        className="md:w-[70vw] w-[70vw] border-2 border-white p-[1vw] bg-black md:ml-auto md:mr-auto ml-auto mr-auto "/>
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
