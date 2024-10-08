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
        <div className="absolute top-0 flex flex-col md:flex-row w-full items-center p-4 md:space-x-8 justify-between">
        <section className="flex justify-start w-full md:w-auto items-center md:space-x-10">
    <button type="button" onClick={() => router.push('/')}>
        <div className="relative h-16 md:h-[10vh] w-16 md:w-[10vh]">
            <img src="/images/pvBasic.png" alt="logo" className="absolute h-full w-full logo duration-500 hover:scale-105 cursor-pointer" />
            <img src="/images/pvBasicPurple.png" alt="logo-hover" className="absolute h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
    </button>
        </section>              


            <section className="flex flex-row justify-end w-full md:w-auto space-x-4 md:space-x-12">


                    <button type="button" onClick={() => router.push('/sound')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>Sound</h1>
                    </button>

                    <button type="button" onClick={() => router.push('/tickets')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>Tickets</h1>
                    </button>
 
                    <button type="button" onClick={() => router.push('/store')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>Store</h1>
                    </button>

                    <button type="button" onClick={() => router.push('/about')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>About</h1>
                    </button>

            </section>
        </div>
</main>

    );
}

export default Navbar;
