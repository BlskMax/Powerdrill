import { IDateProps } from "@/interfaces";
import { Bebas_Neue, Protest_Strike } from "next/font/google";
import { FaBuilding, FaMapLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";


const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

const  protest = Protest_Strike({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-protest',
});


function TicketCard({ ticket }: IDateProps) {
    return (
      <main className="flex flex-col md:flex-row items-center space-y-[3vh] md:space-x-[3vw] w-screen justify-evenly border-b-2 border-dotted pb-[6vh] ">
        {ticket.available ? (
          <>

            <article className=" flex md:flex-row-reverse flex-col place-items-center">
            <section className="text-center md:text-left w-[80vw] md:w-[50vw] items-start">
              <h1
                className={`${bebas.variable} font-sans text-left text-3xl md:text-8xl space-x-8 text-purple-700 uppercase`}
              >
                {ticket.name}
              </h1>
              <h1
                className={`${bebas.variable} font-sans text-xl md:text-7xl space-x-8 mr-6 uppercase`}
              >
                {ticket.date}
              </h1>
            </section>

            <section className="md:space-y-[3vh] w-[80vw] md:w-[25vw] text-center md:text-left flex md:flex-col flex-row">
              <div className="flex flex-row justify- space-x-[1vw] items-center">
                <FaBuilding  className="text-2xl md:text-4xl text-purple-700" />
                <p className="w-[50vw] md:w-[20vw] text-left font-extrabold text-xs md:text-xl uppercase">{ticket.venue}</p>
              </div>
  
              <div className="flex flex-row justify- space-x-[1vw] items-center">
                <FaMapLocationDot className="text-2xl md:text-4xl text-purple-700" />
                <p className="w-[50vw] md:w-[20vw] text-left font-extrabold text-xs md:text-xl uppercase">{ticket.location}</p>
              </div>
  
              <div className="flex flex-row space-x-[1vw] items-center">
                <GoClockFill className="text-lg md:text-3xl text-purple-700" />
                <p className="font-extrabold text-xs md:text-2xl">{ticket.time}</p>
              </div>
            </section>

            </article>

            

            <section className="mt-4">
              <a href={ticket.link} target="_blank" rel="noopener noreferrer">
                <button
                  className={`${bebas.variable} font-sans w-[35vw] md:w-[10vw] h-[5vh] md:h-[10vh] text-base md:text-4xl rounded-md transition-all duration-500 hover:scale-110 border-2 border-purple-700 bg-black `}
                >
                  INFO
                </button>
              </a>
            </section>
  
          </>
        ) : (
          <article className="flex flex-col-reverse">
            
            <section className="space-y-[3vh] w-[80vw] md:w-[vw] text-center md:text-center">
              <div className="flex flex-row space-x-[1vw]">
                <FaMapLocationDot className="text-sm md:text-4xl text-red-800" />
                <p className="font-extrabold text-sm md:text-xl uppercase">{ticket.venue}</p>
              </div>
            </section>
  
            <section className="text-center md:text-left w-[80vw] md:w-[60vw]">
              <h1
                className={`${bebas.variable} font-sans text-left text-3xl md:text-8xl space-x-8 text-red-800 uppercase`}
              >
                {ticket.name}
              </h1>
              <h1
                className={`${bebas.variable} font-sans text-xl md:text-7xl space-x-8 uppercase`}
              >
                {ticket.date}
              </h1>
            </section>
          </article>
        )}
      </main>
    );
  }
  
  export default TicketCard;
  