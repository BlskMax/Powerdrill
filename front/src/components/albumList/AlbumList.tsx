import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import SongCard from "../songCard/SongCard";
import { IAlbum, IAlbumListProps, Isong, ISongListProps } from "@/interfaces";
import AlbumCard from "../albumCard/AlbumCard";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AlbumList ({albums}: IAlbumListProps) {
    return (
        <>
        
        <main className=" w-screen mt-[1vh] flex flex-row justify-evenly flex-wrap"> 

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-[5vw] md:gap-y-[2vw] pl-[2vw] pr-[2vw] ">
        {albums.map ((album: IAlbum) => (
        <AlbumCard album={album} key={album.id}/>
        ))}
        </div>

        </main>
        </>
    )
}
export default AlbumList;