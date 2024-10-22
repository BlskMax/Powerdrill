import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { Allura, Bebas_Neue } from "next/font/google";
import Carrousel from "@/components/carrousel/Carrousel";
import HomeCards from "@/components/homeCards/HomeCards";

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


export default function Home() {
  return (
    <main 
    className={styles.fondo}>

    <div className="w-screen h-auto">

    <div className="flex flex-row">
        <img src="/images/pvLogo.png" alt="ALBUMES"
        className=" md:w-[40vw] md:mt-[20vh] md:mb-[3vh] md:ml-[3vw] md:mr-auto
         w-[60vw] mt-[10vh] mb-[10vh] mr-auto ml-auto"></img>
        </div>

      <div className="flex pt-24 md:pt-[2vh] md:pb-[25vh]">
        <HomeCards />
      </div>

    <div className="md:mt-[2vh] border-2 border-purple-700 bg-black bg-opacity-60 p-5">

      <div>
        <h1 className={`${allura.variable} font-sans md:text-7xl text-pink-500 text-center`}>Experimenta al San Valentin más violento de tu vida</h1>
        <p className={`${bebas.variable} font-sans md:w-[70vw] md:text-4xl ml-auto mr-auto text-white text-center`}>Haz llegado tarde a la fiesta, ya no hay más que hartazgo, sueños violentos y gente que no quiere ser ellos mismos. Entonces Powerdrill Valentine empieza a tocar. </p>
      </div>

      <div className="flex flex-row items-center justify-evenly">
        <img src="/images/drill.jpg" alt="ALBUMES" 
        className=" md:w-[20vw] md:ml-0 md:mr-0
         w-[60vw] mt-[10vh] mb-[10vh] mr-auto ml-auto
         object-fill border-2"></img>

            <div className="flex flex-col items-end space-y-[3vh] ">
                <h1 className={`${allura.variable} font-sans md:text-7xl md:w-[50vw] text-purple-700 text-right`}>Texto edgy en grande</h1>
                <p className={`${bebas.variable} font-sans md:w-[40vw] md:text-3xl text-white text-right`}>Powerdrill Valentine es un dúo que nace de la necesidad por crear y que toma forma gracias a las inherentes molestias en el panorama músical actual</p>
            </div>
            
      </div>

    </div>

    </div>  

    </main>
  );
}
