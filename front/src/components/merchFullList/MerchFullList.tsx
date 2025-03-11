import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import SongCard from "../songCard/SongCard";
import { IProduct, IProductListProps, Isong, ISongListProps } from "@/interfaces";
import ProductCard from "../productCard/ProductCard";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function MerchFullList ({products}: IProductListProps) {
    return (
        <>
        
        <main className=" w-screen mt-[1vh] flex flex-row justify-evenly flex-wrap"> 

        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-[5vw] md:gap-y-[2vw] gap-x-[4vw] gap-y-[2vh] pl-[2vw] pr-[2vw]  ">
        {products.map ((product: IProduct) => (
        <ProductCard product={product} key={product.id}/>
        ))}
        </div>

        </main>
        </>
    )
}
export default MerchFullList;