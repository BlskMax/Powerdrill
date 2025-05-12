import { IDate, IDateListProps } from "@/interfaces";
import { Bebas_Neue } from "next/font/google";
import TicketCard from "../ticketCard/TicketCard";
import PastTicketCard from "../pastTicketCard/PastTicketCard";


const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function PastTicketList ({tickets}: IDateListProps ) {

    return (
        <main>

        <div 
        className="flex flex-row w-screen space-y-12  ">
            
            {tickets.map((ticket: IDate) => (
                <PastTicketCard ticket={ticket} key={ticket.id} /> 
            ))}
        </div>

        </main>

    ); 
}

export default PastTicketList;