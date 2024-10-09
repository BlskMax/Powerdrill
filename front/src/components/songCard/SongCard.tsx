import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IsongProps } from "@/interfaces";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function SongCard ({song}: IsongProps) {

    return (
        <>
        
        <main className="flex flex-col items-center"> 
        
        <div className="border-2 border-purple-700 p-[1vw] bg-black">
        <img src={song.image} alt={song.title}
        className="md:w-[20vw] md:h-[55vh] object-cover ">
        </img>
        </div>

        <h1 className= {`${bebas.variable} font-sans md:text-3xl mt-[2vh] `} >
        {song.title}
        </h1>

        <div>

        </div>

        </main>
        </>
    )
}
export default SongCard;