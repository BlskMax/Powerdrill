'use client';
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { IProductProps, IsongProps } from "@/interfaces";
import { useRouter } from "next/navigation"; 

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function ProductCard({ product }: IProductProps) {

    const router = useRouter();

    const handleProductClick = () => {
        
        if (product.id) {
            router.push(`/store/product/${product.id}`);
        }
    }

    return (
        <>
            <main className="flex md:flex-col-reverse flex-col items-start">
                <div className="relative border-2 border-purple-700 border-opacity-50 p-[1vw] bg-black rounded-3xl">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="md:w-[20vw] md:h-[45vh] w-[36vw] h-[18vh] object-cover duration-300 hover:opacity-70 rounded-lg "
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 duration-300 transition-opacity text-white">
                        <button
                            onClick={handleProductClick}
                            className="font-bold md:text-4xl hover:scale-110 duration-300"
                        >
                            <img
                            src="/images/adlerDetails.png"
                            alt="DETALLES"
                            className="md:w-[12vw] w-[24vw] opacity-80 hover:opacity-100 duration-300"
                            />
                        </button>
                    </div>
                </div>

                <h1 className={`${bebas.variable} font-sans md:text-3xl text-sm md:w-[20vw] w-[40vw] md:text-center md:mb-[2vh] mt-[2vh] text-center mb-[1vh] `}>
                    {product.name}
                </h1>
            </main>
        </>
    );
}

export default ProductCard;
