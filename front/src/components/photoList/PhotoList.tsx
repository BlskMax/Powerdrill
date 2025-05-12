import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import SongCard from "../songCard/SongCard";
import { IAlbum, IAlbumListProps, IPicture, IPictureListProps, Isong, ISongListProps } from "@/interfaces";
import AlbumCard from "../albumCard/AlbumCard";
import PhotoCard from "../photoCard/PhotoCard";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function PhotoList ({pictures}: IPictureListProps) {
    return (
        <main className=" w-screen mt-[18vh] flex flex-row justify-evenly flex-wrap"> 

            <div className="flex md:space-x-[3vw]">
                {pictures.map ((picture:IPicture) => (
                    <PhotoCard picture={picture} key={picture.id}/>
                ))}
            </div>
        </main>
    )
}

export default PhotoList;