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
                    <h1 className= {`${bebas.variable} font-sans text-xl`} >
                    Está página ha sido creada por Max Galarza</h1>

                <div className="flex flex-row items-center space-x-[1vw]">
                
            <a href="https://www.instagram.com/blsk_max/" target="_blank" rel="noopener noreferrer">
                <button>
                <Image src="/images/instaWh.png" alt="tiktok"
                    className="cosmo transition-transform 
                    duration-300 hover:scale-125 cursor-pointer"
                height={100} width={40}  />
                </button>
            </a>

            <a href="https://x.com/Blsk_Max" target="_blank" rel="noopener noreferrer">
            <button type="button">
                <Image src="/images/xWh.png" alt="tiktok"
                    className="cosmo transition-transform 
                    duration-300 hover:scale-125 cursor-pointer"
                height={100} width={40}  />
            </button>
            </a>

            
            <a href="https://www.linkedin.com/in/alejandro-maximiliano-galarza-ornelas-9b503b2b2/" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/inWh.png" alt="linkedin"
                    className="cosmo transition-transform 
                    duration-300 hover:scale-125 cursor-pointer"
                height={100} width={40}  />

            </button>
            </a>

            <a href="https://github.com/BlskMax" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/gitWh.png" alt="github"
                    className="cosmo transition-transform 
                    duration-300 hover:scale-125 cursor-pointer"
                height={100} width={40}  />

            </button>
            </a>

                </div>
                    
            </section>   

            <section className=" text-white flex flex-col justify-center pr-[1vw]
                items-end ">
                    <h1 className= {`${bebas.variable} font-sans text-xl`} >
                    Fall for the valentine</h1>

                <div className="flex flex-row items-center space-x-[1vw]">
            
            <a href="https://www.instagram.com/the_powerdrill_valentine/" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/insPur.png" alt="tiktok"
                    className="cosmo transition-transform 
                    duration-300 hover:scale-105 cursor-pointer"
                height={100} width={40}  />
            </button>
            </a>      
            </div>

            </section>         

        </main>
        </>
    )
}
export default Footer