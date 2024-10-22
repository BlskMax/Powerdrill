'use client';
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation"; 

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function HomeCards() {

    const router = useRouter();

    return (
<>
    <main className="flex flex-row ml-[2vw] mr-auto w-[90vw]">

        <div className="flex flex-col w-[70vw]">
            <button type="button" onClick={() => router.push('/sound')} className="cursor-pointer duration-500">
                <img 
                    src="/images/musicaMock.png" 
                    className="md:w-[70vw] border-2"
                    alt="Carrousel Image 1"
                />
            </button>
            
            <div className="flex flex-row">
                <button type="button" onClick={() => router.push('/tickets')} className="cursor-pointer duration-500">
                    <img 
                        src="/images/fechasMock.png" 
                        className="md:w-[35vw] border-2"
                        alt="Carrousel Image 1"
                    />
                </button>

                <button type="button" onClick={() => router.push('/store')} className="cursor-pointer duration-500">
                    <img 
                        src="/images/tiendaMock.png" 
                        className="md:w-[35vw] border-2"
                        alt="Carrousel Image 1"
                    />
                </button>
            </div>
        </div>

        <button type="button" onClick={() => router.push('/about')} className="cursor-pointer ml-auto">
            <img 
                src="/images/conoceMock.png" 
                className="md:h-[100%] md:w-[20vw] border-2 object-cover"
                alt="Carrousel Image 1"
            />
        </button>

    </main>
</>

    );
}

export default HomeCards;
