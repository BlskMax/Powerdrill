import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import MerchFullList from "@/components/merchFullList/MerchFullList";
import { IProduct } from "@/interfaces";
import { mockMerch } from "@/data/data";

async function fetchProducts (): Promise <IProduct[]> {
  return mockMerch
}

async function merchPage () {

    const products = await fetchProducts();

  return (
    <main 
    className={styles.fondo}>
    <div className="w-screen h-auto">


    <div className="md:ml-[2vw] md:mr-0 md:mt-[20vh] mt-[15vh] ">
    <img src="/images/uniforme.png" alt="logo" className=" md:h-[35vh] md:ml-auto md:mr-[2vw] logo" />
    </div>

    <div className="md:ml-[2vw] md:mr-0 md:mt-[5vh] mt-[5vh] ml-auto mr-auto ">
    <img src="/images/proximamente.png" alt="logo" className=" md:w-[45vw] w-[85vw] logo md:ml-[2vw]" />
    </div>

    <div className="mb-[10vh] ">
      <MerchFullList products={products} />
    </div>

    </div>  
    </main>
  );
}

export default merchPage;
