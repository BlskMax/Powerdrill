'use client'
import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { Allura, Bebas_Neue } from "next/font/google";
import Carrousel from "@/components/carrousel/Carrousel";
import HomeCards from "@/components/homeCards/HomeCards";
import { IDate, IProduct, Isong } from "@/interfaces";
import { mockAlbums, mockDates, mockMerch, mockSongs } from "@/data/data";
import { GoClockFill } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";
import FeaturedShow from "@/components/featuredShow/FeaturedShow";
import FeaturedVideos from "@/components/featuredVideos/FeaturedVideos";
import { useEffect, useState } from "react";
import MeetPower1 from "@/components/meetPower1/MeetPower1";
import MeetPower2 from "@/components/meetPower2/MeetPower2";

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

async function fetchProducts (): Promise <IProduct[]> {
  return mockMerch.sort(() => Math.random() - 0.5)
}

async function fetchSongs (): Promise <Isong[]> {
  return mockSongs
}

async function fetchShows (): Promise <IDate[]> {
  return mockDates
}


export default function Home() {

  const [songs, setSongs] = useState<Isong[]>([]);

  const [dates , setDate] = useState<IDate[]>([]);

  useEffect(() => {
    async function loadSongs() {
      const fetchedSongs = await fetchSongs();
      setSongs (fetchedSongs);
    }

    loadSongs();
  }, []);

  useEffect(() => {
    async function loadLatestShow() {
      const fetchedShows = await fetchShows();
      setDate (fetchedShows);
    }

    loadLatestShow();
  }, []);

  return (
    <main 
    className={styles.fondo}>

    <div className="w-screen h-auto">

    <div className="flex flex-row">
        <img src="/images/pvLogo.png" alt="ALBUMES"
        className=" md:w-[40vw] md:mt-[20vh] md:mb-[5vh] md:ml-[3vw] md:mr-auto
         w-[75vw] mt-[14vh] ml-auto mr-[3vw]"></img>
        </div>

      <div className="flex md:pt-[2vh] md:pb-[10vh]
      pt-[5vh]">
        <HomeCards />
      </div>

      <section className="mb-[5vh] ">
      <FeaturedShow />
      </section>

      <section id="about">
      <MeetPower2 />
      </section>

      <FeaturedVideos songs={songs} />


      

    </div>  

    </main>
  );
}
