import { IDate, IDateListProps } from "@/interfaces";
import { Bebas_Neue } from "next/font/google";
import TicketCard from "../ticketCard/TicketCard";


const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function TicketList ({tickets}: IDateListProps ) {

    return (
        <main>

        <div 
        className="flex flex-col  space-y-12  ">
            
            {tickets.map((ticket: IDate) => (
                <TicketCard ticket={ticket} key={ticket.id} /> 
            ))}
        </div>

        </main>

    ); 
}

export default TicketList;