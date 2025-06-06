import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import SongCard from "../songCard/SongCard";
import { Isong, ISongListProps } from "@/interfaces";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function SongList ({songs}: ISongListProps) {
    return (
        <>
        
        <main className=" w-screen mt-[1vh] flex flex-row justify-evenly flex-wrap"> 

        <img src="/images/cancionesImage.png" alt="CANCIONES"
        className=" md:w-[40vw] md:mt-[2vh] md:mb-[10vh]
         w-[60vw] mt-[2vh] mb-[3vh] mr-auto ml-auto"></img>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-[5vw] md:gap-y-[2vw] gap-x-[4vw] gap-y-[2vh] pl-[2vw] pr-[2vw]  ">
        {songs.map ((song: Isong) => (
        <SongCard song={song} key={song.id}/>
        ))}
        </div>

        </main>
        </>
    )
}
export default SongList;