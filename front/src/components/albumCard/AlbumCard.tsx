import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IAlbumProps, IsongProps } from "@/interfaces";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AlbumCard ({album}: IAlbumProps) {

    return (
        <>
        
        <main className="flex flex-col items-center"> 
        
        <div className="border-2 border-purple-700 p-[1vw] bg-black">
        <img src={album.image} alt={album.title}
        className="md:w-[20vw] md:h-[40vh] object-cover ">
        </img>
        </div>

        <h1 className= {`${bebas.variable} font-sans md:text-3xl mt-[2vh] `} >
        {album.title}
        </h1>

        <div>

        </div>

        </main>
        </>
    )
}
export default AlbumCard;