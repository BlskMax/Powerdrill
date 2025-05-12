'use client'
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
import { Isong, ISongListProps, IsongProps } from "@/interfaces";
import { featuredMusicVideos } from "@/data/data";
import VideoCard from "../videoCard/VideoCard";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

 function FeaturedVideosList ({songs}: ISongListProps) {
     
    return (

        <>
        
        <main className=" w-screen mt-[1vh] flex flex-row justify-evenly flex-wrap mb-[10vh] "> 

            <div className="ml-auto mr-[5vw] mb-[5vh] ">
                <img
                src="/images/musicVids.png"
                className="w-[35vw] mb-[5vh] mt-[5vh] ">
                </img>
            </div>

        <div className="grid grid-cols-2 md:gap-x-[5vw] md:gap-y-[2vw] gap-x-[4vw] gap-y-[2vh] pl-[2vw] pr-[2vw]  ">
        {songs.map ((song: Isong) => (
        <VideoCard song={song} key={song.id}/>
        ))}
        </div>

        </main>
        </>


    )

}

export default FeaturedVideosList;

