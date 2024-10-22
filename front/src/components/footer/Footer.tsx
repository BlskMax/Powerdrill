import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function Footer () {
    return (
        <>
        
        <main className=" bg-black w-screen mt-[1vh] flex flex-row
        justify-between align-center items-center"> 

            <section className=" text-purple-700  pl-[1vw] flex flex-col justify-center
                items-start space-y-1">
                    <h1 className= {`${bebas.variable} font-sans md:text-2xl
                    text-lg leading-5 mb-[1vh]`} >
                    Está página ha sido creada por Max Galarza</h1>

                <div className="flex flex-row items-center space-x-[1vw]">
                
            <a href="https://www.instagram.com/blsk_max/" target="_blank" rel="noopener noreferrer">
                <button>
                <img src="/images/instaWh.png" alt="tiktok"
                    className="cosmo transition-transform md:w-[3vw] w-[10vw]
                    duration-300 hover:scale-125 cursor-pointer"
                />
                </button>
            </a>

            <a href="https://x.com/Blsk_Max" target="_blank" rel="noopener noreferrer">
            <button type="button">
                <img src="/images/xWh.png" alt="tiktok"
                    className="cosmo transition-transform md:w-[3vw] w-[10vw]
                    duration-300 hover:scale-125 cursor-pointer"
                />
            </button>
            </a>

            
            <a href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/" target="_blank" rel="noopener noreferrer">
            <button>
                <img src="/images/inWh.png" alt="linkedin"
                    className="cosmo transition-transform md:w-[3vw] w-[10vw]
                    duration-300 hover:scale-125 cursor-pointer"
                />

            </button>
            </a>

            <a href="https://github.com/BlskMax" target="_blank" rel="noopener noreferrer">
            <button>
                <img src="/images/gitWh.png" alt="github"
                    className="cosmo transition-transform  md:w-[3vw] w-[10vw]
                    duration-300 hover:scale-125 cursor-pointer"
                />

            </button>
            </a>

                </div>
                    
            </section>   

            <section className=" text-white flex flex-col justify-center pr-[1vw]
                items-end ">
                    <h1 className= {`${bebas.variable} font-sans md:text-2xl text-right mb-[1vh]`} >
                    Fall for the valentine</h1>

                <div className="flex flex-row items-center space-x-[1vw]">
            
            <a href="https://www.instagram.com/the_powerdrill_valentine/" target="_blank" rel="noopener noreferrer">
            <button>
                <img src="/images/insPur.png" alt="tiktok"
                    className="cosmo transition-transform md:w-[3vw] w-[10vw]
                    duration-300 hover:scale-105 cursor-pointer"
                />
            </button>
            </a>      
            </div>

            </section>         

        </main>
        </>
    )
}
export default Footer