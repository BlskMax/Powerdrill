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

        <main>
<div>
  <img src="images/sigShow.png"
  className="w-[40vw] mb-[5vh] mr-auto ml-[3vw]"></img>
</div>

<article className=" flex md:flex-col flex-col place-items-center">
<section className="text-center md:text-center w-[80vw] md:w-[50vw] mr-auto ml-[3vw] ">
  <h1
    className={`${bebas.variable} font-sans text-left text-3xl md:text-4xl space-x-8 text-white uppercase`}
  >
    Café Caribe
  </h1>
  <h1
    className={`${bebas.variable} font-sans text-left text-3xl md:text-8xl space-x-8 text-red-800 uppercase`}
  >
    Coyoacán, cdmx
  </h1>
  <h1
    className={`${bebas.variable} font-sans text-left text-xl md:text-6xl space-x-8 uppercase`}
  >
    Mayo 9, 2025
  </h1>
</section>

  <button
  onClick={() => router.push('/tickets')}
  className={`${bebas.variable} font-sans w-[35vw] md:w-[10vw] h-[5vh] md:h-[8vh] md:mt-[2vh]  text-base md:text-3xl rounded-xl transition-all duration-500 hover:scale-110 border-2 border-purple-700 bg-black bg-opacity-75 `}
  >
  DETALLES
  </button>
</article>

  </main>

  

    )

}

export default FeaturedShow;

