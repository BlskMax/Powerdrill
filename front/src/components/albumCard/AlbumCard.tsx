import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IAlbumProps, IsongProps } from "@/interfaces";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AlbumCard({ album }: IAlbumProps) {
    return (
        <>
            <main className="flex flex-col items-center">
                <div className="relative border-2 border-purple-700 p-[1vw] bg-black">
                    <img
                        src={album.image}
                        alt={album.title}
                        className="md:w-[20vw] md:h-[40vh] object-cover duration-300 hover:opacity-70"
                    />

                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white p-4">
                        
                        {album.songs.map((song) => (
                            <div key={song.id} className="song-info">
                                <p className={`${bebas.variable} font-sans md:text-2xl`}>
                                    {song.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className={`${bebas.variable} font-sans md:text-3xl mt-[2vh]`}>
                    {album.title}
                </h1>
            </main>
        </>
    );
}

export default AlbumCard;
