'use client'
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { GoClockFill } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function FeaturedShow () {
    
    const router = useRouter();

    return (

        <section>
<div>
  <img src="images/sigShow.png"
  className="w-[40vw] mb-[5vh] ml-auto mr-auto"></img>
</div>

<article className=" flex md:flex-col flex-col place-items-center">
<section className="text-center md:text-center w-[80vw] md:w-[50vw] ">
  <h1
    className={`${bebas.variable} font-sans text-center text-3xl md:text-4xl space-x-8 text-white uppercase`}
  >
    El Cabaré
  </h1>
  <h1
    className={`${bebas.variable} font-sans text-center text-3xl md:text-8xl space-x-8 text-red-800 uppercase`}
  >
    CUERNAVACA, MORELOS
  </h1>
  <h1
    className={`${bebas.variable} font-sans text-center text-xl md:text-6xl space-x-8 uppercase`}
  >
    ABRIL 12, 2025
  </h1>
</section>

  <button
  onClick={() => router.push('/tickets')}
  className={`${bebas.variable} font-sans w-[35vw] md:w-[10vw] h-[5vh] md:h-[8vh] md:mt-[2vh]  text-base md:text-3xl rounded-xl transition-all duration-500 hover:scale-110 border-2 border-purple-700 bg-black bg-opacity-75 `}
  >
  DETALLES
  </button>
</article>

  </section>

  

    )

}

export default FeaturedShow;

