import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"

export default function tickets () {
  return (
    <main 
    className={styles.fondo}>

    <div className="w-screen h-screen">
      <h1 className="mt-[28vh] text-center text-8xl">Esta es la pagina de tickets</h1>
    </div>  

    </main>
  );
}
