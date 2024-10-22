import { IAlbum, IDate, Isong } from "@/interfaces/index"

export const mockDates: IDate[] = [
    {
        id:1,
        time: "20:00HRS",
        date: "Noviembre 23",
        location: "Boulverard Juarez 302, Cuernavaca Centro",
        name: "Cuernavaca, Morelos",
        link: "https://wa.me/525570680017",
    },

    {
        id:2,
        time: "20:00HRS",
        date: "marzo 8",
        location: "GATO CALAVERA XOLA #114 Col.alamos",
        name: "Benito juárez, cdmx",
        link: "https://www.ticketmaster.com.mx/",
    },
    {
        id:1,
        time: "20:00HRS",
        date: "FEBRERO 32",
        location: "MALAIDEA, MEDELLIN #143 COL.ROMA",
        name: "cuauhtémoc, cdmx",
        link: "https://wa.me/525570680017",
    },
 ]

 export const mockSongs: Isong[] = [
    {
        id:1,
        title:"Foreign Friends",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/mausan.jpg",

    },
    {
        id:2,
        title:"sonicamente",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/sonica.jpg",
    },
    {
        id:3,
        title:"ZAFIRO DRIVE",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/drill.jpg",
    },
    {
        id:4,
        title:"SHOCK VALUE",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/disco.png",

    },
    {
        id:5,
        title:"BUTCHER",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/butcher.jpg",
    },
    {
        id:6,
        title:"QUAGULA MEGAN MASON",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
    },
    {
        id:7,
        title:"SUEÑOS VIOLENTOS",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
    },
    {
        id:8,
        title:"ULTIMA MIDNIGHT",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
    },
    {
        id:9,
        title:"CRISTAL",
        link:"link",
        description:"descript",
        album:"BIG 4",
        image:"/images/papersP.png",
    },
 ]

 export const big4: Isong[] = [
    {
        id:1,
        title:"Foreign Friends",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/mausan.jpg",

    },
    {
        id:2,
        title:"sonicamente",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/sonica.jpg",
    },
    {
        id:3,
        title:"ZAFIRO DRIVE",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/drill.jpg",
    },
    {
        id:4,
        title:"SHCOK VALUE",
        link:"link",
        description:"descript",
        album:"album",
        image:"/images/disco.png",

    },
]

 export const mockAlbums: IAlbum[] = [
    {
        id:1,      
        title: "BIG 4",
        link: "string",
        description:"string",
        songs:big4,
        image:"/images/drill.jpg",
    },
 ]

