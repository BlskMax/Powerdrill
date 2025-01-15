import Image from "next/image";
import styles from "@/components/backgrounds/Backgrounds.module.css"
import { mockDates } from "@/data/data";
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
    const tickets = await fetchDates();
    const availableTickets = tickets.filter((ticket) => ticket.available);
    const pastTickets = tickets.filter((ticket) => !ticket.available);


  return (
    <main 
    className={styles.fondo}>
    <div className="w-screen h-auto md:mb-[8vh] md:mt-[20vh]">

      <section>
        {availableTickets.length > 0 ?
        (
          <>
          <div className="flex flex-row">
          <img src="/images/proxFechas.png" alt="FECHAS"
          className=" md:w-[55vw] md:mt-[2vh] md:mb-[10vh] md:mr-[5vw] md:ml-auto
           w-[60vw] mt-[13vh] mb-[10vh] mr-auto ml-auto"></img>
          </div>
          <TicketList tickets={availableTickets} />
          </>
        ) :
        (
          <h1></h1>
        )
        }
      </section>

      <div className="flex flex-row">
        <img src="/images/antFechas.png" alt="FECHAS"
        className=" md:w-[60vw] md:mt-[8vh] md:mb-[8vh] md:mr-auto md:ml-auto
         w-[60vw] mt-[13vh] mb-[10vh] mr-auto ml-auto"></img>

        </div>

      <section>
        <TicketList tickets={pastTickets} />
      </section>

    </div>  
    </main>
  );
}

export default ticketComponent;



// import Image from "next/image";
// import styles from "@/components/backgrounds/Backgrounds.module.css"
// import { mockDates, pastDates } from "@/data/data";
// import { IDate } from "@/interfaces";
// import TicketList from "@/components/ticketList/TicketList";
// import { Bebas_Neue } from "next/font/google";
// import PastTickets from "@/components/pastTickets/PastTickets";

// const  bebas = Bebas_Neue({
//     subsets:['latin'],
//     weight: ['400'],
//     variable: '--font-bebas',
// });

// async function fetchDates ():Promise <IDate[]> {
//     return mockDates
// }

// async function fetchPastDates ():Promise <IDate[]> {
//     return pastDates
// }

// async function ticketComponent () {
//     const tickets = await fetchDates()
//     const pastTickets = await fetchPastDates


//   return (
//     <main 
//     className={styles.fondo}>
//     <div className="w-screen h-screen md:mb-[8vh] md:mt-[20vh]">

//       <div className="flex flex-row">
//         <img src="/images/fechasImage.png" alt="FECHAS"
//         className=" md:w-[28vw] md:mt-[2vh] md:mb-[10vh] md:mr-[5vw] md:ml-auto
//          w-[60vw] mt-[13vh] mb-[10vh] mr-auto ml-auto"></img>

//         </div>

//       <section>
//         <TicketList tickets={tickets} />
//       </section>

//       <div className="flex flex-row">
//         <img src="/images/fechasImage.png" alt="FECHAS"
//         className=" md:w-[28vw] md:mt-[2vh] md:mb-[10vh] md:mr-[5vw] md:ml-auto
//          w-[60vw] mt-[13vh] mb-[10vh] mr-auto ml-auto"></img>

//         </div>

//       <section>
//         <PastTickets tickets={pastTickets} />
//       </section>

//     </div>  
//     </main>
//   );
// }

// export default ticketComponent;

