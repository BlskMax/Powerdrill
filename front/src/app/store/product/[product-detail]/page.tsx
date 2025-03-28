'use client'
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockAlbums, mockMerch, mockSongs, purpleLove } from "@/data/data";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { IAlbum, IProduct, Isong } from "@/interfaces";
import { Allura, Bebas_Neue } from "next/font/google";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import IncludedSongCard from "@/components/includedSongCard/includedSongCard";

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

const ProductDetailPage = () => {
    const params = useParams(); 
    const id = params["product-detail"]
    const [product, setProduct] = useState <IProduct | null>(null);
    console.log(params["product-detail"]);
    
    useEffect(() => {
        if (id) {
            const productDetail = mockMerch.find((product) => product.id === Number(id));
            console.log(productDetail);
            
            if (productDetail) {
                setProduct(productDetail);
            } else {
                console.error("product not found");
            }
        }
    }, [id]);

    const relatedProducts = mockMerch
    .filter((p) => p.id !== Number(id))
    .sort(() => Math.random() - 0.5); 


    const router = useRouter();
    const pathname = usePathname();
    

    return (
        <main className={styles.fondo}>
            <section className="w-screen h-auto">
                
                {product ? (
                <main className="flex md:flex-col flex-col md:mt-[16vh] mt-[12vh] mb-[10vh] ">

                    <button type="button" onClick={() => router.push('/store')}>    
                        <FaArrowAltCircleLeft className="md:text-5xl md:ml-[3vw]
                        text-2xl"/>
                    </button>

                    <div className="md:w-screen md:mt-[5vh] md:flex-row flex-col flex pb-[3vh] ">
                    <img src={product.image} 
                    className="md:w-[28vw] md:h-[60vh] w-[50vw] object-cover border-2 border-white p-[1vw] bg-black md:ml-auto md:mr-auto ml-auto mr-auto rounded-xl "/>

                    <div className="md:mr-auto md:mt-auto md:mb-auto text-center ">
                    <h1 className= {`${bebas.variable} font-sans md:text-8xl text-white text-center
                    text-4xl md:mb-[1vh]`} >
                    {product.short}</h1>
                    <h1 className= {`${bebas.variable} font-sans md:text-5xl text-pink-500 text-center
                    text-4xl md:mb-[2vh]`} >
                    {product.long}</h1>
                    
                    
                        {product.available ? (

                    <div className="flex flex-col text-center  justify-center mt-[1vh] ">

                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <button className={`${bebas.variable} font-sans md:w-[16vw] md:h-[10vh] w-[30vw] md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2  bg-black hover:border-purple-700 `}>COMPRAR</button>
                    </a>

                    <h1 className={`${bebas.variable} font-sans md:text-4xl text-purple-700 text-center md:mt-[3vh]
                    text-4xl md:mb-[5vh]`}>
                         {product.price}
                    </h1>
                    </div>
                        ) : (
                            <div>
                                <h1 className={`${bebas.variable} font-sans md:text-3xl text-xs w-[70vw] md:w-[30vw] ml-auto mr-auto border-2 border-purple-700 md:p-[2vh] bg-black text-white`}>
                                    Este producto no está disponible por el momento</h1>
                            </div>
                        )
                    }

                    </div>
                    </div>

                    <div className="mt-10 text-white">
                        <h2 className={`${bebas.variable} font-sans text-6xl text-center mb-5`}>Merch Relacionada:</h2>
                        <div className="flex flex-wrap justify-center gap-[3vw]">
                            {relatedProducts.map((p) => (
                                <div key={p.id} className="cursor-pointer w-[200px] text-center border border-white bg-black bg-opacity-50 p-3 rounded-lg hover:scale-105 hover:bg-opacity-100 transition duration-300"
                                    onClick={() => router.push(`/store/product/${p.id}`)}
                                >
                                    <img src={p.image} alt={p.short} className="w-full h-[25vh] object-cover rounded-md mb-2" />
                                    <h3 className={`${bebas.variable} font-sans text-xl`}>{p.short}</h3>
                                    <h3 className={`${bebas.variable} font-sans text-xl text-pink-500`}>{p.long}</h3>
                                    
                                    {product.available && 
                                    
                                    <p className="text-sm text-gray-400">{p.price}</p>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>


                </main>
                ) : (
                    <p>Product not found</p>
                )}
            </section>
        </main>
    );
};

export default ProductDetailPage;
