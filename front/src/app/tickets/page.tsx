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
    <div className="w-screen h-auto mb-[8vh] mt-[28vh]">

      {/* <section className="mt-[28vh]">
      <h1 className="text-center text-8xl">Esta es la pagina de tickets</h1>
      </section> */}

      <div className="flex flex-row">
        <img src="/images/fechasImage.png" alt="FECHAS"
        className=" md:w-[28vw] md:mt-[10vh] md:mb-[10vh] md:mr-[5vw] md:ml-auto
         w-[60vw] mt-[10vh] mb-[10vh] mr-auto ml-auto"></img>

        </div>

      <section>
        <TicketList tickets={tickets} />
      </section>

    </div>  
    </main>
  );
}

export default ticketComponent;
