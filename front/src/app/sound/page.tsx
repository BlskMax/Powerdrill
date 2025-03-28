'use client'
import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import SongList from "@/components/songList/SongList";
import { IAlbum, Isong } from "@/interfaces";
import { mockAlbums, mockSongs } from "@/data/data";
import AlbumList from "@/components/albumList/AlbumList";
import FeaturedVideosList from "@/components/featuredVideos/FeaturedVideos";
import { Bebas_Neue } from "next/font/google";

const  bebas = Bebas_Neue({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

async function fetchSongs (): Promise <Isong[]> {
  return mockSongs
}

async function fecthAlbums (): Promise <IAlbum[]> {
  return mockAlbums
}

async function songComponent () {
  const songs = await fetchSongs();
  const albums = await fecthAlbums();

  const scrollToAlbum = () => {
    const section = document.getElementById('albums');
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
    }
};
  const scrollToVideos = () => {
    const section = document.getElementById('videos');
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
    }
};
  const scrollToSongs = () => {
    const section = document.getElementById('songs');
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
    }
};


  return (
    <main 
    className={styles.fondo}>
    <div className="w-screen h-auto md:mb-[8vh] md:mt-[20vh] mb-[2vh] mt-[4vh] ">

      <div className="flex flex-row justify-evenly w-[80vw] ml-auto mr-auto mt-[15vh] mb-[15vh] ">
        
      <button type="button" className=" hover:rotate-6 "
      onClick={scrollToAlbum}>
            <img
            src="/images/albBtn.png"
            alt="ÁLBUMES"
              className=" h-[8vh] w-auto ">
            </img>
        </button>

      <button type="button" className=" hover:scale-110 "
      onClick={scrollToVideos}>
            <img
            src="/images/vidBtn.png"
            alt="VÍDEOS"
              className=" h-[8vh] w-auto ">
            </img>
        </button>

      <button type="button" className=" hover:-rotate-6 "
      onClick={scrollToSongs}>
            <img
            src="/images/cancBtn.png"
            alt="ÁLBUMES"
              className=" h-[8vh] w-auto ">
            </img>
        </button>
 
      </div>
 
    <div className="flex flex-row" id="albums">
        <img src="/images/albumesImage.png" alt="ALBUMES"
        className=" md:w-[52vw] md:mt-[0vh] md:mb-[5vh] md:ml-[3vw] md:mr-auto
         w-[80vw] mt-[8vh] mb-[3vh] ml-[5vw] "></img>
        </div>

        <section>
        <AlbumList albums={albums} />
      </section>



        <section id="videos">
        <FeaturedVideosList songs={songs}/>
      </section>

      <section id="songs" className="mb-[5vh] ">
        <SongList songs={songs} />
      </section>



    </div>  
    </main>
  );
}

export default songComponent;
