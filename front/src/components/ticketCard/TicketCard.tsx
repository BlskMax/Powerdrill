import { IDateProps } from "@/interfaces";
import { Bebas_Neue, Protest_Strike } from "next/font/google";
import { FaMapLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";


const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const  protest = Protest_Strike({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function TicketCard ({ticket}: IDateProps) {


    return (
        <main className="flex flex-row items-center space-x-[3vw] w-screen justify-center ">

            <section className="space-y-[3vh] w-[18vw]">
                <div className="flex flex-row space-x-[1vw] items-center md:h-[10vh]">
                <FaMapLocationDot className="md:text-6xl text-purple-700"/>
                <p className="font-extrabold md:text-xl text-xs uppercase">{ticket.location}</p>
                </div>

                <div className="flex flex-row space-x-[1vw] items-center ">
                <GoClockFill className="md:text-3xl text-purple-700"/>
                <p className="font-extrabold md:text-2xl text-xs">{ticket.time}</p>
                </div>
            </section>

            <section className="w-[50vw]">
                <h1 className={`${bebas.variable} font-sans hidden md:text-8xl lg:flex space-x-8 mr-6 text-purple-700 uppercase`}>{ticket.name}</h1>
                <h1 className={`${bebas.variable} font-sans hidden md:text-7xl lg:flex space-x-8 mr-6 uppercase`}>{ticket.date}</h1>
            </section>

            <section>
                <a href={ticket.link} target="_blank" rel="noopener noreferrer">
                <button className={`${bebas.variable} font-sans w-[16vw] h-[10vh] md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2 border-purple-700 bg-black hover:text-purple-700 `}>COMPRAR</button>
                </a>
            </section>

        </main>

    ); 
}

export default TicketCard;