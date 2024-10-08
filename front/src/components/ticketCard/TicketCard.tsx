import { IDateProps } from "@/interfaces";
import { Bebas_Neue } from "next/font/google";
import { FaMapLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";


const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function TicketCard ({ticket}: IDateProps) {


    return (
        <main className="flex flex-row items-center space-x-[3vw] w-screen ">

            <section>
                <div className="flex flex-row space-x-[1vw]">
                <FaMapLocationDot />
                <p>{ticket.location}</p>
                </div>

                <div className="flex flex-row space-x-[1vw] ">
                <GoClockFill />
                <p>{ticket.time}</p>
                </div>
            </section>

            <section>
                <h1>{ticket.name}</h1>
                <h1>{ticket.date}</h1>
            </section>

            <section>
                <a href={ticket.link} target="_blank" rel="noopener noreferrer">
                <button>COMPRAR</button>
                </a>
            </section>

        </main>

    ); 
}

export default TicketCard;