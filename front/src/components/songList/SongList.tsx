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

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-[5vw] md:gap-y-[2vw] pl-[2vw] pr-[2vw] ">
        {songs.map ((song: Isong) => (
        <SongCard song={song} key={song.id}/>
        ))}
        </div>

        </main>
        </>
    )
}
export default SongList;