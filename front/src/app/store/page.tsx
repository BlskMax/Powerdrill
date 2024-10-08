import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"

export default function about () {
  return (
    <main 
    className={styles.fondo}>
    <div className="w-screen h-screen">

    <div className="md:ml-[2vw] md:mt-[20vh] ">
    <img src="/images/uniforme.png" alt="logo" className="absolute h-[50vh] logo" />
    </div>


    </div>  
    </main>
  );
}
