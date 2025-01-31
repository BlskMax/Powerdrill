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
        className=" md:w-[40vw] md:mt-[20vh] md:mb-[5vh] md:ml-[3vw] md:mr-auto
         w-[75vw] mt-[14vh] ml-auto mr-[3vw]"></img>
        </div>

      <div className="flex md:pt-[2vh] md:pb-[10vh]
      pt-[5vh]">
        <HomeCards />
      </div>

    <div className="md:mt-[2vh] md:w-[95vw] border-2 border-purple-700 bg-[url('/images/RE7.jpg')] bg-cover bg-black bg-opacity-60 p-[3vw] md:mb-[10vh] mb-[3vh] ml-auto mr-auto">

      <div id="about">
        <h1 className={`${allura.variable} font-sans md:text-8xl text-2xl md:leading-normal md:mb-0 mb-[1vh] leading-5 text-pink-500 text-center`}>La violencia no conoce fechas</h1>
        <p className={`${bebas.variable} font-sans md:w-[70vw] md:text-4xl text-sm ml-auto mr-auto text-white text-center`}>Haz llegado tarde a la fiesta, el grunge está muerto (y no queremos que regrese), no hay más que hartazgo, sueños violentos y gente que no quiere ser ellos mismos.</p>
        <p className={`${bebas.variable} font-sans md:w-[70vw] md:text-4xl text-sm ml-auto mr-auto text-white text-center`}>Entonces el Powerdrill empieza a tocar. </p>
      </div>

      <div
      className="flex flex-col items-center justify-evenly md:mt-0 mt-[2vh] mb-[2vh]">

        <article className="flex flex-row space-x-[5vw]">
          <img src="/images/alvBw.png" alt="ALBUMES" 
            className=" md:w-[20vw] md:h-auto md:ml-0 md:mr-0
            w-[40vw] md:mt-[10vh] md:mb-[5vh] mr-auto ml-auto
            "></img>
 
          <img src="/images/maxBw.png" alt="ALBUMES" 
            className=" md:w-[20vw] md:h-auto md:ml-0 md:mr-0
            w-[40vw] md:mt-[10vh] md:mb-[5vh] mr-auto ml-auto
            "></img>
 
        </article>

            <div className="flex flex-col items-center md:space-y-[1vh] md:mt-0">
                <h1 className={`${allura.variable} font-sans md:text-8xl text-3xl md:w-[50vw] text-purple-700 text-center`}>It 's all over</h1>
                <p className={`${bebas.variable} font-sans md:w-[70vw] md:text-4xl text-sm text-white text-left`}>Powerdrill Valentine es un dúo que nace de la necesidad por crear y que toma forma gracias a las inherentes molestias en el panorama músical underground actual</p>
                <p className={`${bebas.variable} font-sans md:w-[70vw] md:text-4xl text-sm text-purple-700 text-left`}>Nadie tiene energía para nada, la estructura está hecha y el mundo te odía, pero eso no detiene al powerdrill.</p>
                <p className={`${bebas.variable} font-sans md:w-[70vw] md:text-4xl text-sm text-white text-left underline underline-offset-8 decoration-purple-700`}>No es más que un berrinche, pero es el mejor que escucharás jamás.</p>
            </div>
            
      </div>

    </div>

    </div>  

    </main>
  );
}
