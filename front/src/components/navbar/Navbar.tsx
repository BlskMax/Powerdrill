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
                    <img src="/images/ccLogo.png" alt="logo" className="h-16 md:h-24 logo duration-500 hover:scale-105 cursor-pointer" />
                </button>
            </section>

            <section className="flex flex-row justify-end w-full md:w-auto space-x-4 md:space-x-12">


                    <button type="button" onClick={() => router.push('/login')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>Música</h1>
                    </button>

                    <button type="button" onClick={() => router.push('/login')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>Tienda</h1>
                    </button>

                    <button type="button" onClick={() => router.push('/login')}>
                        <h1 className={`${allura.variable} font-sans login cursor-pointer text-4xl md:text-5xl text-purple-700 hover:text-white transition-all custom-transition duration-300`}>About</h1>
                    </button>

            </section>
        </div>
</main>

    );
}

export default Navbar;
