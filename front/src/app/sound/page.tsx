import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import SongList from "@/components/songList/SongList";
import { IAlbum, Isong } from "@/interfaces";
import { mockAlbums, mockSongs } from "../../../public/data";
import AlbumList from "@/components/albumList/AlbumList";

async function fetchSongs (): Promise <Isong[]> {
  return mockSongs
}

async function fecthAlbums (): Promise <IAlbum[]> {
  return mockAlbums
}

async function songComponent () {
  const songs = await fetchSongs();
  const albums = await fecthAlbums();


  return (
    <main 
    className={styles.fondo}>
    <div className="w-screen h-auto mb-[8vh] mt-[28vh]">

    <div className="flex flex-row">
        <img src="/images/albumesImage.png" alt="ALBUMES"
        className=" md:w-[52vw] md:mt-[10vh] md:mb-[10vh] md:ml-[3vw] md:mr-auto
         w-[60vw] mt-[10vh] mb-[10vh] mr-auto ml-auto"></img>
        </div>

        <section>
        <AlbumList albums={albums} />
      </section>


      <div className="flex flex-row">
        <img src="/images/cancionesImage.png" alt="CANCIONES"
        className=" md:w-[40vw] md:mt-[10vh] md:mb-[10vh] md:mr-[3vw] md:ml-auto
         w-[60vw] mt-[10vh] mb-[10vh] mr-auto ml-auto"></img>
        </div>

      <section>
        <SongList songs={songs} />
      </section>

    </div>  
    </main>
  );
}

export default songComponent;
