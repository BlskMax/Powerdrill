'use client'
import { Allura, Bebas_Neue } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const allura = Allura({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function Navbar() {

    const router = useRouter();
    const pathname = usePathname();

    return (
<main>
    <div className="bg-black absolute top-0 flex flex-row md:flex-row w-full items-center md:p-2 p-[1vw] md:space-x-8 justify-between border-b-2 border-purple-700">
        
        {/* Logo */}
        <section className="flex justify-start w-full md:w-auto items-center md:space-x-10">
            <button type="button" onClick={() => router.push('/')}>
                <div className="relative h-8 md:h-[8vh] w-16 md:w-[8vh] md:mt-[1vh] md:mb-[1vh]">
                    <img src="/images/pvBasic.png" alt="logo" className="md:absolute md:h-full md:w-full w-[10vw] logo duration-500 hover:scale-105 cursor-pointer" />
                    <img src="/images/pvBasicPurple.png" alt="logo-hover" className="md:absolute md:h-full md:w-full w-[10vw] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
            </button>
        </section>

        {/* Botones */}
        <section className="md:flex md:flex-row items-center w-[100vw] md:w-auto space-x-[4vw] md:space-x-12 md:pr-[1vw]">

            {pathname !== '/sound' && (                        
                <button type="button" onClick={() => router.push('/sound')}>
                    <div className="relative w-[20vw] md:w-[10vw] h-[5vh] md:h-[8vh] group">
                        <img 
                            src="/images/soundButt.png" 
                            alt="Sound" 
                            className="absolute top-0 left-0 w-full h-full object-contain md:opacity-100 opacity-0 group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <img 
                            src="/images/soundGlow.png" 
                            alt="Sound Hover" 
                            className="absolute top-0 left-0 w-full h-full object-contain md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </button>
            )}

            {pathname !== '/tickets' && (
                <button type="button" onClick={() => router.push('/tickets')}>
                    <div className="relative w-[20vw] md:w-[10vw] h-[5vh] md:h-[8vh] group">
                        <img 
                            src="/images/showButt.png" 
                            alt="Tickets" 
                            className="absolute top-0 left-0 w-full h-full object-contain md:opacity-100 opacity-0 group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <img 
                            src="/images/showGlow.png" 
                            alt="Tickets Hover" 
                            className="absolute top-0 left-0 w-full h-full object-contain md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </button>
            )}

            {/* {pathname !== '/store' && (
                <button type="button" onClick={() => router.push('/store')}>
                    <div className="relative w-[20vw] md:w-[10vw] h-[5vh] md:h-[8vh] group">
                        <img 
                            src="/images/merchButt.png" 
                            alt="Store" 
                            className="absolute top-0 left-0 w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <img 
                            src="/images/merchGlow.png" 
                            alt="Store Hover" 
                            className="absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </button>
            )} */}

        </section>
    </div>
</main>


    );
}

export default Navbar;
