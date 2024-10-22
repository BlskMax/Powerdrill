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
    <main className="md:flex md:flex-row md:ml-auto md:mr-[2vw] md:w-[90vw]
     ">

        <div className="md:flex md:flex-col md:w-[70vw]
        ">
            <button type="button" onClick={() => router.push('/sound')} className="cursor-pointer duration-500">
                <img 
                    src="/images/musicaMock.png" 
                    className="md:w-[70vw] md:h-full md:mt-0 md:mb-0 border-2 md:rounded-none
                    w-[92vw] h-[12vh] mb-[1vh] object-cover object-left rounded-lg"
                    alt="Carrousel Image 1"
                />
            </button>
            
            <div className="md:flex md:flex-row">
                <button type="button" onClick={() => router.push('/tickets')} className="cursor-pointer duration-500">
                    <img 
                        src="/images/fechasMock.png" 
                        className="md:w-[35vw] md:h-full md:mt-0 md:mb-0 border-2 md:rounded-none
                        w-[92vw] h-[12vh] mb-[1vh] object-cover rounded-lg"
                        alt="Carrousel Image 1"
                    />
                </button>

                <button type="button" onClick={() => router.push('/store')} className="cursor-pointer duration-500">
                    <img 
                        src="/images/tiendaMock.png" 
                        className="md:w-[35vw] md:h-full md:mt-0 md:mb-0 border-2 md:rounded-none
                        w-[92vw] h-[12vh] mb-[1vh] object-cover object-top rounded-lg"
                        alt="Carrousel Image 1"
                    />
                </button>
            </div>
        </div>

        <button type="button" onClick={() => router.push('/about')} className="cursor-pointer ml-auto">
            <img 
                src="/images/conoceMock.png" 
                className="md:h-[100%] md:w-[20vw] border-2 md:object-cover md:object-center md:mt-0 md:mb-0 md:rounded-none
                w-[92vw] h-[12vh] mb-[1vh] object-cover rounded-lg"
                alt="Carrousel Image 1"
            />
        </button>

    </main>
</>

    );
}

export default HomeCards;
