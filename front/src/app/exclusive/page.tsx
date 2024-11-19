import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"

export default function exclusivePage () {
  return (
    <main 
    className={styles.fondo}>

    <section className="w-screen h-screen">

    <div className="md:ml-[2vw] md:mr-0 md:mt-[20vh] mt-[5vh] ml-auto mr-auto ">
    <img src="/images/proximamente.png" alt="logo" className=" md:w-[60vw] w-[85vw] logo md:ml-auto md:mr-[2vw]" />
    </div>

    </section>  

    </main>
  );
}
