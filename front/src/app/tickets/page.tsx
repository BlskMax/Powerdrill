import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { mockDates } from "../../../public/data";
import { IDate } from "@/interfaces";
import TicketList from "@/components/ticketList/TicketList";
import { Bebas_Neue } from "next/font/google";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

async function fetchDates ():Promise <IDate[]> {
    return mockDates
}

async function ticketComponent () {
    const tickets = await fetchDates()


  return (
    <main 
    className={styles.fondo}>
    <div className="w-screen h-screen">

      <section className="mt-[28vh]">
      <h1 className="text-center text-8xl">Esta es la pagina de tickets</h1>
      </section>

      <section>
        <h1
            className={`${bebas.variable} font-sans            
            text-9xl text-yellow-400 text-right
            place-self-end mr-8 md:mt-[10vh] `}>
        Fechas
        </h1>

        <TicketList tickets={tickets} />
      </section>

    </div>  
    </main>
  );
}

export default ticketComponent;
