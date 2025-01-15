'use client'
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockAlbums, mockSongs, purpleLove } from "@/data/data";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { IAlbum, Isong } from "@/interfaces";
import { Allura, Bebas_Neue } from "next/font/google";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import IncludedSongCard from "@/components/includedSongCard/includedSongCard";

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

const AlbumDetailPage = () => {
    const params = useParams(); 
    const id = params["album-detail"]
    const [album, setAlbum] = useState <IAlbum | null>(null);
    console.log(params["album-detail"]);

    const songs = purpleLove;

    
    useEffect(() => {
        if (id) {
            const albumDetail = mockAlbums.find((album) => album.id === Number(id));
            console.log(albumDetail);
            
            if (albumDetail) {
                setAlbum(albumDetail);
            } else {
                console.error("album not found");
            }
        }
    }, [id]);

    const router = useRouter();
    const pathname = usePathname();
    

    return (
        <main className={styles.fondo}>
            <section className="w-screen h-auto">
                
                {album ? (
                <main className="flex md:flex-col flex-col md:mt-[16vh] mt-[12vh]">

                    <button type="button" onClick={() => router.push('/sound')}>    
                        <FaArrowAltCircleLeft className="md:text-5xl md:ml-[3vw]
                        text-2xl"/>
                    </button>

                    <div className="md:w-screen md:mt-[5vh] md:flex-row flex-col flex">
                    <img src={album.image} 
                    className="md:w-[30vw] w-[50vw] object-cover border-2 border-white p-[1vw] bg-black md:ml-auto md:mr-auto ml-auto mr-auto "/>

                    <div className="md:mr-auto md:mt-auto md:mb-auto text-center ">
                    <h1 className= {`${allura.variable} font-sans md:text-8xl text-pink-500 text-center
                    text-4xl md:mb-[5vh]`} >
                    {album.title}</h1>
                    
                    
                        {album.available ? (

                    <div className="flex flex-row text-center space-x-[5vw] justify-center mt-[1vh] ">
                    <a href={album.download} target="_blank" rel="noopener noreferrer">
                    <button className={`${bebas.variable} font-sans md:w-[16vw] md:h-[10vh] w-[30vw] md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2  bg-black hover:border-purple-700 `}>DESCARGAR</button>
                    </a>

                    <a href={album.listen} target="_blank" rel="noopener noreferrer">
                    <button className={`${bebas.variable} font-sans md:w-[16vw] md:h-[10vh] w-[30vw] md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2  bg-black hover:border-purple-700 `}>ESCUCHAR</button>
                    </a>
                    </div>
                        ) : (
                            <div>
                                <h1 className={`${bebas.variable} font-sans md:text-5xl text-xs w-[70vw] md:w-[30vw] ml-auto mr-auto border-2 border-purple-700 md:p-[2vh] bg-black text-white`}>
                                    Disponible: {album.release} </h1>
                            </div>
                        )
                    }

                    </div>
                    </div>

                    <section className="flex flex-col md:w-[50vw] md:mt-0 mt-[3vh] ">
                        <img src="/images/incluidas.png"
                        className=" md:w-[40vw] md:mt-[10vh] md:mb-[10vh] md:mr-[3vw] md:ml-[3vw]
                        w-[60vw] mt-[10vh] mb-[3vh] ml-[6vw]">
                        </img>
                    </section>
                    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-[5vw] md:gap-y-[2vw] gap-x-[4vw] gap-y-[2vh] pl-[2vw] pr-[2vw] md:mb-[10vh] md:pl-[3vw] md:pr-[3vw] ">
                        {songs.map ((song: Isong) => (
                            <IncludedSongCard song={song} key={song.id}/>
                        ))}
                    </div>


                </main>
                ) : (
                    <p>Album not found</p>
                )}
            </section>
        </main>
    );
};

export default AlbumDetailPage;
